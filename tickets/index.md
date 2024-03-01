---
layout: section
title: Tickets - NG-DE 2024 - Angular Conference - 2024 in Bonn
description: >
  NG-DE is a conference organised for the community, by the community.
  We create an open, diverse and welcoming conference with fantastic speakers and a warm and friendly environment.
---

## For the community, by the community

NG-DE is the first community-driven angular conference in Germany. We partner together with the [VueJS.DE Community Conference](https://conf.vuejs.de) that will happen just one day before NG-DE. 

Both frameworks have a huge community focus and similar concepts so we provide a platform for these together. You are able to buy a combo ticket at a reduced price.

The venue Maritim Hotel is located next to the beautiful Rhein and has perfect travel conditions for public transport.

By buying a ticket you accept the code of conduct.

Don't miss out on your chance to join the NG-DE conference! With only a limited number of cheap tickets available (Price Tiers), act fast to secure your place at this dynamic event.

What's included:

- **2-Day Access**: Immerse yourself in two full days of insightful talks, engaging discussions, and exciting workshops.

- **Delicious Meals**: Start your day right with breakfast, refuel with lunch, and enjoy in cake during the breaks. Unlimited coffee, soft drinks, and refreshments provided throughout.

- **Inspiring Talks**: Gain valuable insights from 14 thought-provoking talks and 2 keynote speeches delivered by experts in the field.

- **Sponsoring Area**: Explore additional talks and mini-workshops in the sponsoring area, where you can also connect with leading industry professionals and discover new opportunities.

- **Afterparty**: Wrap up the conference with a bang at our exclusive afterparty. Network, unwind, and celebrate a successful event with fellow attendees.

This is more than just a conference; it's a chance to grow and connect with the NG-DE community. Don't let this opportunity pass you by - reserve your ticket now before they're gone!


<tito-widget event="ng-de/ng-de-conf-2024" releases="nbqczabenoa,ng-de-2-day-price-tier-1-copy,ng-de-2-day-price-tier-2-copy,ng-de-2-days"></tito-widget>
 
### Workshop Tickets
Comming soon! =) 
<!--
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
