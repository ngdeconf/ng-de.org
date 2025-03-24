---
layout: section
title: Tickets - NG-DE 2025 - Angular Conference - 2025 in Berlin
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

## Ticket Tiers

<div class="ticket-timeline">
  <div class="timeline-item active">
    <div class="timeline-dot">✓</div>
    <div class="timeline-content">
      <h3>Super Early Bird</h3>
      <p class="timeline-date">Begins April 08</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-dot active"></div>
    <div class="timeline-content">
      <h3>Early Bird</h3>
      <p class="timeline-date">Begins June 17</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
      <h3>Normal Bird</h3>
      <p class="timeline-date">Begins August 12</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
      <h3>Final Bird</h3>
      <p class="timeline-date">Begins October 14</p>
    </div>
  </div>
</div>

<style>
.ticket-timeline {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 40px 0;
  padding: 20px 0;
}

.ticket-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: linear-gradient(to right, 
    #00ff99,
    #33ff33,
    #ffcc00,
    #ff3333
  );
  z-index: 1;
  box-shadow: 0 0 20px rgba(0, 255, 153, 0.5);
}

.timeline-item {
  position: relative;
  z-index: 3;
  text-align: center;
  flex: 1;
  padding: 20px 10px 0;
}

.timeline-dot {
  width: 30px;
  height: 30px;
  background:rgb(239, 239, 239);
  border: 2px solid #666;
  border-radius: 50%;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #00ffcc;
  position: relative;
  z-index: 2;
}

.timeline-item.active .timeline-dot {
  background: #00ffcc;
  border-color: #00ffcc;
  color: #1a1a1a;
}

.timeline-content h3 {
  margin: 0 0 5px;
  font-size: 1.1em;
  color: #ffffff;
}

.timeline-date {
  margin: 0;
  font-size: 0.9em;
  color: lightgray;
  font-weight: bold;
}

@media (max-width: 768px) {
  .ticket-timeline {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 30px;
  }

  .ticket-timeline::before {
    top: 0;
    bottom: 0;
    left: 15px;
    width: 8px;
    height: 100%;
    background: linear-gradient(to bottom, 
      #00ff99,
      #33ff33,
      #ffcc00,
      #ff3333
    );
    box-shadow: 0 0 30px rgba(0, 255, 153, 0.8);
  }

  .timeline-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 0;
  }

  .timeline-dot {
    margin: 0 15px 0 0;
  }

  .timeline-content {
    text-align: left;
  }
}
</style>

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
