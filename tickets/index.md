---
layout: section
title: Tickets - NG-DE 2024 - Angular Conference - 2024 in Bonn
description: >
  NG-DE is a conference organised for the community, by the community.
  We create an open, diverse and welcoming conference with fantastic speakers and a warm and friendly environment.
---

## For the community, by the community

NG-DE is the first community-driven angular conference in Germany.

What's included:

- **2-Day Access**: Two full days of insightful talks, engaging discussions, and exciting workshops.

- **Delicious Meals**: Start your day right with breakfast, refuel with lunch, and enjoy in cake during the breaks. Unlimited coffee, soft drinks, and refreshments provided throughout.

- **Inspiring Talks**: Gain valuable insights from 16 awesome talks (30% beginner, 70% expert-level) and 2 keynote speeches by core community members.

- **Sponsoring Area**: Explore the sponsoring area, where you can connect with leading industry professionals and discover new opportunities.

This is more than just a conference; it's a chance to grow and connect with the NG-DE community. Don't let this opportunity pass you by - reserve your ticket now before they're gone!

By buying a ticket you accept the code of conduct.

<tito-widget event="ng-de/berlin-2025" releases="ng-de-2025-blind-bird-ticket,ng-de-2025-blind-bird-ticket-copy" save-metadata-parameters="utm_*"></tito-widget>

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
