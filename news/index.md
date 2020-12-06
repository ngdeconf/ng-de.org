---
layout: section
title: News - NG-DE 2022 - Angular Conference - 2022 in Berlin
description: >
  The NG-DE conference is a conference organised for the community, by the community.
  We want to create an open, diverse and welcoming conference with fantastic speakers and a warm and friendly environment.
---

## News

<div class="posts">
  <div class="row row--two">
    {% for post in site.posts %}
    <div class="row__col">
      <div class="posts__post">
        {% include post.html %}
      </div>
    </div>
    {% endfor %}
  </div>
</div>