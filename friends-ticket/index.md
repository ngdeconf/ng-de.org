---
layout: section
title: Friend Ticket - NG-DE 2025 - Angular Conference - 2025 in Berlin
description: >
  NG-DE is a conference organised for the community, by the community.
  We create an open, diverse and welcoming conference with fantastic speakers and a warm and friendly environment.
---

## NG-DE Friends Ticket 🎉

If you love the NG-DE conference and want to snag a very special offer that only a select few attendees can get, the Friends Ticket is just what you're looking for!

### Why is it special?

- You'll receive an exclusive swag package reserved only for our closest friends.
- Enjoy all three conference days, including a workshop of your choice.
- Be one of the first 10 buyers and get an invitation to our VIP dinner! Rub shoulders with speakers, workshop leaders, community icons, and even members of the Angular team themselves. 🤗

**🎅 Don't Miss Out:** This exclusive offer is only available until New Year's Eve. Grab your Friends Ticket now and be part of the NG-DE adventure!

<tito-widget event="ng-de/berlin-2025" releases="bselfksgx8w" discount-code="christmas-for-friends" save-metadata-parameters="utm_*"></tito-widget>

_By buying a ticket you accept the code of conduct._

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
