import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ngde-imprint',

  imports: [CommonModule],
  template: `
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold mb-8">Imprint</h1>

          <div class="prose dark:prose-invert max-w-none">
            <h2 class="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
            <p class="mb-6">
              Symetics GmbH<br />
              Lohmühlenstraße 65<br />
              12435 Berlin
            </p>

            <h2 class="text-2xl font-bold mb-4">Umsatzsteuer-ID</h2>
            <p class="mb-6">
              Umsatzsteuer-Identifikationsnummer gemäß §27 a
              Umsatzsteuergesetz:<br />
              DE295155649
            </p>

            <h2 class="text-2xl font-bold mb-4">Kontakt</h2>
            <p class="mb-6">
              E-Mail: info&#64;ng-de.org<br />
              Telefon: +49 (0) 201 / 87535773
            </p>

            <h2 class="text-2xl font-bold mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p class="mb-6">
              Robin Böhm<br />
              Koppenstraße 82<br />
              10243 Berlin
            </p>

            <h2 class="text-2xl font-bold mb-4">Online-Streitbeilegung</h2>
            <p class="mb-6">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
              <a
                href="https://ec.europa.eu/consumers/odr"
                class="text-primary-500 hover:text-primary-600"
                target="_blank"
                rel="noopener noreferrer"
                >https://ec.europa.eu/consumers/odr</a
              >. Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p class="mb-6">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>

            <h2 class="text-2xl font-bold mb-4">
              Haftungsausschluss (Disclaimer)
            </h2>

            <h3 class="text-xl font-bold mb-2">Haftung für Inhalte</h3>
            <p class="mb-6">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p class="mb-6">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>

            <h3 class="text-xl font-bold mb-2">Haftung für Links</h3>
            <p class="mb-6">
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar.
            </p>
            <p class="mb-6">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>

            <h3 class="text-xl font-bold mb-2">Urheberrecht</h3>
            <p class="mb-6">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
            <p class="mb-6">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
              werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend
              entfernen.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ImprintComponent {}
