import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngde-newsletter-subscription',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      id="newsletter"
      class="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div class="absolute inset-0 pointer-events-none">
        <div
          class="absolute -right-16 top-10 h-64 w-64 rounded-full bg-primary-200/40 blur-3xl dark:bg-primary-500/10"
          aria-hidden="true"
        ></div>
        <div
          class="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-secondary-200/30 blur-3xl dark:bg-secondary-500/10"
          aria-hidden="true"
        ></div>
      </div>

      <div class="container relative mx-auto max-w-3xl px-4">
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-5 text-left">
            <span
              class="inline-flex items-center self-start rounded-full bg-primary-100 px-4 py-1 text-sm font-semibold text-primary-700 shadow-sm ring-1 ring-primary-500/20 dark:bg-primary-500/10 dark:text-primary-300"
            >
              Newsletter
            </span>
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
              Stay in the Loop
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300">
              Subscribe for quick updates when new NG-DE videos go live, tickets
              become available, or community events launch.
            </p>
            <p class="text-base text-gray-600 dark:text-gray-400">
              You can unsubscribe at any time through the link in our emails or
              by contacting us directly.
            </p>
          </div>

          <form
            class="space-y-6 rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-lg backdrop-blur dark:border-gray-700 dark:bg-gray-900/60"
            action="https://ng-de.us5.list-manage.com/subscribe/post?u=465db430c1cb88ec6dea2ca40&amp;id=a64bc22ee3&amp;f_id=0026b8edf0"
            method="post"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Newsletter subscription form"
          >
            <div class="grid gap-6 md:grid-cols-2">
              <div class="md:col-span-2">
                <label
                  class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200"
                  for="mce-EMAIL"
                >
                  Email Address <span class="text-primary-600">*</span>
                </label>
                <input
                  type="email"
                  id="mce-EMAIL"
                  name="EMAIL"
                  required
                  autocomplete="email"
                  class="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 shadow-sm transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-400 dark:focus:ring-primary-500/30"
                />
              </div>

              <div>
                <label
                  class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200"
                  for="mce-FNAME"
                >
                  First Name <span class="text-primary-600">*</span>
                </label>
                <input
                  type="text"
                  id="mce-FNAME"
                  name="FNAME"
                  required
                  autocomplete="given-name"
                  class="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 shadow-sm transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-400 dark:focus:ring-primary-500/30"
                />
              </div>

              <div>
                <label
                  class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200"
                  for="mce-LNAME"
                >
                  Last Name <span class="text-primary-600">*</span>
                </label>
                <input
                  type="text"
                  id="mce-LNAME"
                  name="LNAME"
                  required
                  autocomplete="family-name"
                  class="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 shadow-sm transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-400 dark:focus:ring-primary-500/30"
                />
              </div>
            </div>

            <div
              class="space-y-4 rounded-2xl border border-dashed border-gray-200 bg-gray-50/80 p-6 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-300"
            >
              <div>
                <h3 class="text-base font-semibold text-gray-800 dark:text-gray-100">
                  Marketing Permissions
                </h3>
                <p class="mt-2">
                  Symetics GmbH will use the information you provide on this
                  form to stay in touch and provide updates and marketing.
                  Please let us know all the ways you would like to hear from us:
                </p>
              </div>

              <fieldset class="grid gap-3">
                <legend class="sr-only">Marketing preferences</legend>
                <label class="flex items-center gap-3">
                  <input
                    id="gdpr_6177"
                    name="gdpr[6177]"
                    type="checkbox"
                    value="Y"
                    required
                    class="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800"
                  />
                  <span>Email</span>
                </label>
              </fieldset>

              <p>
                You can change your mind at any time by clicking the unsubscribe
                link in the footer of any email you receive from us, or by
                contacting us at
                <a
                  href="mailto:orga@ng-de.org"
                  class="text-primary-600 underline hover:text-primary-500 dark:text-primary-400"
                >
                  orga@ng-de.org
                </a
                >. We will treat your information with respect. For more
                information about our privacy practices please visit our
                website. By clicking below, you agree that we may process your
                information in accordance with these terms.
              </p>

              <p class="text-xs text-gray-500 dark:text-gray-400">
                We use Mailchimp as our marketing platform. By clicking below to
                subscribe, you acknowledge that your information will be
                transferred to Mailchimp for processing.
                <a
                  href="https://mailchimp.com/legal/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-primary-600 underline hover:text-primary-500 dark:text-primary-400"
                >
                  Learn more
                </a>
                about Mailchimp's privacy practices.
              </p>
            </div>

            <div class="space-y-2">
              <input type="hidden" name="tags" value="3517866" />
              <div aria-hidden="true" class="hidden">
                <input
                  type="text"
                  name="b_465db430c1cb88ec6dea2ca40_a64bc22ee3"
                  tabindex="-1"
                  value=""
                  autocomplete="off"
                />
              </div>
              <button
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                Subscribe
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="h-5 w-5"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              <p
                id="mce-responses"
                class="text-center text-xs text-gray-500 dark:text-gray-400"
              >
                We respect your privacy and will only contact you about NG-DE
                related news.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  `
})
export class NewsletterSubscriptionComponent {}
