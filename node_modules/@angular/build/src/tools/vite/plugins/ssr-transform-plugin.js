"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAngularSsrTransformPlugin = createAngularSsrTransformPlugin;
const remapping_1 = __importDefault(require("@ampproject/remapping"));
const load_esm_1 = require("../../../utils/load-esm");
async function createAngularSsrTransformPlugin(workspaceRoot) {
    const { normalizePath } = await (0, load_esm_1.loadEsmModule)('vite');
    return {
        name: 'vite:angular-ssr-transform',
        enforce: 'pre',
        async configureServer(server) {
            const originalssrTransform = server.ssrTransform;
            server.ssrTransform = async (code, map, url, originalCode) => {
                const result = await originalssrTransform(code, null, url, originalCode);
                if (!result || !result.map || !map) {
                    return result;
                }
                const remappedMap = (0, remapping_1.default)([result.map, map], () => null);
                // Set the sourcemap root to the workspace root. This is needed since we set a virtual path as root.
                remappedMap.sourceRoot = normalizePath(workspaceRoot) + '/';
                return {
                    ...result,
                    map: remappedMap,
                };
            };
        },
    };
}
