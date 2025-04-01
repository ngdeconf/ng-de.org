import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-code-of-conduct',
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold mb-8">Code of Conduct</h1>

          <!-- Purpose -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold mb-4">PURPOSE</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              We want to provide a harassment-free conference experience for
              everyone, regardless of gender, gender identity and expression,
              sexual orientation, disability, physical appearance, body size,
              race, age, religion or lack thereof. We do not tolerate harassment
              of conference participants in any form. Sexual language and
              imagery is not appropriate for any conference venue, including
              talks. Conference participants violating these rules may be
              sanctioned or expelled from the conference without a refund at the
              discretion of the conference organizers.
            </p>
          </div>

          <!-- Anti-Harassment -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold mb-4">ANTI-HARASSMENT</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Harassment includes, but is not limited to:
            </p>
            <ul
              class="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400"
            >
              <li>
                Verbal comments that reinforce social structures of domination
                related to gender, gender identity and expression, sexual
                orientation, disability, physical appearance, body size, race,
                age, religion
              </li>
              <li>Sexual images in public spaces</li>
              <li>Deliberate intimidation, stalking, or following</li>
              <li>Harassing photography or recording</li>
              <li>Sustained disruption of talks or other events</li>
              <li>Inappropriate physical contact</li>
              <li>Invasion of personal space</li>
              <li>Unwelcome sexual attention</li>
              <li>
                Advocating for, or encouraging, any of the above behaviour
              </li>
            </ul>
          </div>

          <!-- Enforcement -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold mb-4">ENFORCEMENT</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Participants asked to stop any harassing behavior are expected to
              comply immediately.
            </p>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              If a participant engages in harassing behaviour, event organizers
              retain the right to take any actions to keep the event a welcoming
              environment for all participants. This includes warning the
              offender or expulsion from the conference with no refund.
            </p>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Event organizers may take action to address anything designed to,
              or with the clear impact of, disrupting the event or making the
              environment hostile for any participants. We expect participants
              to follow these rules at all event venues and event-related social
              activities. We think people should follow these rules outside
              event activities too!
            </p>
          </div>

          <!-- Reporting -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold mb-4">REPORTING</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              If someone makes you or anyone else feel unsafe or unwelcome,
              please report it as soon as possible. The conference team can be
              identified by t-shirts. Harassment and other Code of Conduct
              violations reduce the value of our event for everyone. We want you
              to be happy at our event. People like you make our event a better
              place. You can make a report either personally or anonymously.
            </p>

            <h3 class="text-xl font-bold mb-3">Anonymous report</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              You can make an anonymous report here. We can't follow up an
              anonymous report with you directly, but we will fully investigate
              it and take whatever action is necessary to prevent a recurrence.
            </p>

            <h3 class="text-xl font-bold mb-3">Personal report</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              You can make a personal report by:
            </p>
            <ul
              class="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-4"
            >
              <li>Contacting a TEAM member, identified by TEAM t-shirt</li>
              <li>Emailing us: info&#64;ng-de.org</li>
              <li>
                Calling us: We'll publish a phone number that is staffed during
                main conference hours
              </li>
            </ul>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              When taking a personal report, our team will ensure you are safe
              and cannot be overheard. They may involve other event staff to
              ensure your report is managed properly. Once safe, we'll ask you
              to tell us about what happened. This can be upsetting, but we'll
              handle it as respectfully as possible, and you can bring someone
              to support you. You won't be asked to confront anyone and we won't
              tell anyone who you are.
            </p>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Our team will be happy to help you contact hotel/venue security,
              local law enforcement, local support services, provide escorts, or
              otherwise assist you to feel safe for the duration of the event.
              We value your attendance.
            </p>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Important contact numbers:
            </p>
            <ul
              class="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400"
            >
              <li>Police: Alt-Moabit 145, 10557 Berlin, phone: 110</li>
              <li>Medical Emergency: Call 112</li>
            </ul>
          </div>

          <!-- Photo Policy -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold mb-4">PHOTO POLICY</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              We will have colored lanyards for attendees to indicate their
              comfort level with being photographed:
            </p>
            <ul
              class="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400"
            >
              <li>Black: fine to photograph</li>
              <li>Red: do not photograph</li>
            </ul>
            <p class="text-gray-600 dark:text-gray-400 mt-4">
              In case of any doubt, please ask before taking photographs of
              attendees, speakers or team members.
            </p>
          </div>

          <!-- Inclusive Language -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold mb-4">INCLUSIVE LANGUAGE</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              In our commitment to a harassment-free and inclusive environment
              we strongly believe it's important to pay attention to harmful
              language patterns.
            </p>

            <h3 class="text-xl font-bold mb-3">Ableism</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Words like "crazy", "dumb", "insane" or "lame" are examples of
              ableist language, devaluating people who have physical or mental
              disabilities. Its appearance often stems not from any intentional
              desire to offend, but from our innate sense of what it means to be
              normal. These words can be avoided by using more fitting, clearer
              descriptions of what we want to communicate.
            </p>

            <h3 class="text-xl font-bold mb-3">Sexism</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Using gendered terms like "dude" or "guys" to address a
              mixed-gendered group of people contributes to furthering exclusion
              of underrepresented individuals. We strongly advise avoiding
              gendered pronouns as well as gendered terms.
            </p>
          </div>

          <!-- Attribution -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold mb-4">ATTRIBUTION</h2>
            <p class="text-gray-600 dark:text-gray-400">
              This Code of Conduct is based on JSConf EU, The Geek Feminism Wiki
              and related sources.
            </p>
            <p class="text-gray-600 dark:text-gray-400 mt-2">
              Last update: 14 Dec 2018
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CodeOfConductComponent {}
