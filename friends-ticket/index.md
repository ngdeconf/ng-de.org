---
layout: section
title: Friend Ticket - NG-DE 2025
description: >
  NG-DE is a conference organised for the community, by the community.
  We create an open, diverse and welcoming conference with fantastic speakers and a warm and friendly environment.
---

## 🎉 NG-DE Friends Ticket – Your All-Inclusive Package! 🎉

- 👩‍🏫 Workshop Day: Participate in one of our exclusive workshops and level up your skills.
- 🫂 Two Conference Days: Enjoy talks, networking, and all the NG-DE vibes!
- 🍵 Limited Edition Cup: Perfect for your coffee or matcha tea.
- ✒️ Special Conference Journal: Capture every idea and moment.
- 👕 Exclusive NG-DE T-Shirt: Wear your community pride in style!

- 💥 Total Value: _1428 €_
- 🎄 Christmas Special: Only **€833 €**!

**🎅 Don’t Miss Out: This offer is only available until Christmas. Grab your Friends Ticket and join the NG-DE adventure!**

_By buying a ticket you accept the code of conduct._

<tito-widget event="ng-de/berlin-2025" releases="bselfksgx8w" discount-code="christmas-for-friends" save-metadata-parameters="utm_*"></tito-widget>

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
