---
layout: section
title: Tickets - NG-DE 2022 - Angular Conference - 2022 in Berlin
description: >
  NG-DE is a conference organised for the community, by the community.
  We create an open, diverse and welcoming conference with fantastic speakers and a warm and friendly environment.
---

## For the community, by the community

NG-DE is the first community-driven angular conference in Germany. We partner together with the [VueJS.DE Community Conference](https://conf.vuejs.de) that will happen just one day before NG-DE. 

Both frameworks have a huge community focus and similar concepts so we provide a platform for these together. You are able to buy a combo ticket at a reduced price.

The venue BOLLE FESTSÄLE is located next to the beautiful Spree river, close to Bellevue palace and Tiergarten. A bunch of one-day workshops are planned which can be booked separately from the main event.

By buying a ticket you accept the code of conduct.
<tito-widget event="ng-de/ng-de-conf-2024" releases="nbqczabenoa,ng-de-2-day-price-tier-1-copy,ng-de-2-day-price-tier-2-copy,ng-de-2-days"></tito-widget>
<!-- 
### Workshop Tickets
<tito-widget event="ng-de/ng-de-vuejsde-conf-2022-workshop-day"></tito-widget>

### Combo Tickets
<tito-widget event="ng-de/vuejsde-conf-2022" releases="ngtgyud9c9c,ng-de-conf-2-day-pass-from-moduliths-to-micro-frontends-workshop,ng-de-conf-2-day-pass-rxjs-for-angular-workshop,ng-de-conf-2-day-pass-implementing-desktop-class-productivity-apps-with-angular-and-project-fugu-workshop,ng-de-conf-2-day-pass-handling-state-in-angular-applications-ngrx-store-and-componentstore-workshop,epljcabgrs8"></tito-widget>
-->
<script>
  const url = new URL(location.href)
  const searchParams = new URLSearchParams(url.searchParams);

  if (searchParams.has("voucher")) {
    const widgets = document.querySelectorAll('tito-widget');
    for(const widget of widgets){
      widget.setAttribute("discount-code", searchParams.get("voucher"))
    }
  }
</script>
