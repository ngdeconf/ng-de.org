"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_APP_ENGINE_MANIFEST_FILENAME = exports.SERVER_APP_MANIFEST_FILENAME = void 0;
exports.generateAngularServerAppEngineManifest = generateAngularServerAppEngineManifest;
exports.generateAngularServerAppManifest = generateAngularServerAppManifest;
const node_path_1 = require("node:path");
const options_1 = require("../../builders/application/options");
const bundler_context_1 = require("../../tools/esbuild/bundler-context");
const utils_1 = require("../../tools/esbuild/utils");
exports.SERVER_APP_MANIFEST_FILENAME = 'angular-app-manifest.mjs';
exports.SERVER_APP_ENGINE_MANIFEST_FILENAME = 'angular-app-engine-manifest.mjs';
const MAIN_SERVER_OUTPUT_FILENAME = 'main.server.mjs';
/**
 * A mapping of unsafe characters to their escaped Unicode equivalents.
 */
const UNSAFE_CHAR_MAP = {
    '`': '\\`',
    '$': '\\$',
    '\\': '\\\\',
};
/**
 * Escapes unsafe characters in a given string by replacing them with
 * their Unicode escape sequences.
 *
 * @param str - The string to be escaped.
 * @returns The escaped string where unsafe characters are replaced.
 */
function escapeUnsafeChars(str) {
    return str.replace(/[$`\\]/g, (c) => UNSAFE_CHAR_MAP[c]);
}
/**
 * Generates the server manifest for the App Engine environment.
 *
 * This manifest is used to configure the server-side rendering (SSR) setup for the
 * Angular application when deployed to Google App Engine. It includes the entry points
 * for different locales and the base HREF for the application.
 *
 * @param i18nOptions - The internationalization options for the application build. This
 * includes settings for inlining locales and determining the output structure.
 * @param baseHref - The base HREF for the application. This is used to set the base URL
 * for all relative URLs in the application.
 */
function generateAngularServerAppEngineManifest(i18nOptions, baseHref) {
    const entryPoints = {};
    if (i18nOptions.shouldInline) {
        for (const locale of i18nOptions.inlineLocales) {
            const importPath = './' + (i18nOptions.flatOutput ? '' : locale + '/') + MAIN_SERVER_OUTPUT_FILENAME;
            let localeWithBaseHref = (0, options_1.getLocaleBaseHref)('', i18nOptions, locale) || '/';
            // Remove leading and trailing slashes.
            const start = localeWithBaseHref[0] === '/' ? 1 : 0;
            const end = localeWithBaseHref[localeWithBaseHref.length - 1] === '/' ? -1 : undefined;
            localeWithBaseHref = localeWithBaseHref.slice(start, end);
            entryPoints[localeWithBaseHref] = `() => import('${importPath}')`;
        }
    }
    else {
        entryPoints[''] = `() => import('./${MAIN_SERVER_OUTPUT_FILENAME}')`;
    }
    const manifestContent = `
export default {
  basePath: '${baseHref ?? '/'}',
  entryPoints: {
    ${Object.entries(entryPoints)
        .map(([key, value]) => `'${key}': ${value}`)
        .join(',\n    ')}
  },
};
`;
    return manifestContent;
}
/**
 * Generates the server manifest for the standard Node.js environment.
 *
 * This manifest is used to configure the server-side rendering (SSR) setup for the
 * Angular application when running in a standard Node.js environment. It includes
 * information about the bootstrap module, whether to inline critical CSS, and any
 * additional HTML and CSS output files.
 *
 * @param additionalHtmlOutputFiles - A map of additional HTML output files generated
 * during the build process, keyed by their file paths.
 * @param outputFiles - An array of all output files from the build process, including
 * JavaScript and CSS files.
 * @param inlineCriticalCss - A boolean indicating whether critical CSS should be inlined
 * in the server-side rendered pages.
 * @param routes - An optional array of route definitions for the application, used for
 * server-side rendering and routing.
 * @param locale - An optional string representing the locale or language code to be used for
 * the application, helping with localization and rendering content specific to the locale.
 * @param baseHref - The base HREF for the application. This is used to set the base URL
 * for all relative URLs in the application.
 *
 * @returns An object containing:
 * - `manifestContent`: A string of the SSR manifest content.
 * - `serverAssetsChunks`: An array of build output files containing the generated assets for the server.
 */
function generateAngularServerAppManifest(additionalHtmlOutputFiles, outputFiles, inlineCriticalCss, routes, locale, baseHref) {
    const serverAssetsChunks = [];
    const serverAssets = {};
    for (const file of [...additionalHtmlOutputFiles.values(), ...outputFiles]) {
        const extension = (0, node_path_1.extname)(file.path);
        if (extension === '.html' || (inlineCriticalCss && extension === '.css')) {
            const jsChunkFilePath = `assets-chunks/${file.path.replace(/[./]/g, '_')}.mjs`;
            serverAssetsChunks.push((0, utils_1.createOutputFile)(jsChunkFilePath, `export default \`${escapeUnsafeChars(file.text)}\`;`, bundler_context_1.BuildOutputFileType.ServerApplication));
            serverAssets[file.path] =
                `{size: ${file.size}, hash: '${file.hash}', text: () => import('./${jsChunkFilePath}').then(m => m.default)}`;
        }
    }
    const manifestContent = `
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: ${inlineCriticalCss},
  baseHref: '${baseHref}',
  locale: ${JSON.stringify(locale)},
  routes: ${JSON.stringify(routes, undefined, 2)},
  assets: {
    ${Object.entries(serverAssets)
        .map(([key, value]) => `'${key}': ${value}`)
        .join(',\n    ')}
  },
};
`;
    return { manifestContent, serverAssetsChunks };
}
