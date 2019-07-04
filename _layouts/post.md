---
layout: default
---
<section class="section section--main">
  <div class="container">
    <div class="post">
      <h1>{{page.title}}</h1>
      Published at <time>{{page.date | date: "%d.%m.%Y"}}</time>
      {{content}}
    </div>
    <div class="comments">
      <div id="commento"></div>
      <script src="https://cdn.commento.io/js/commento.js"></script>
    </div>
  </div>
</section>