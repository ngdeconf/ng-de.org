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
      <script 
        async
        src="https://cdn.commento.io/js/commento.js"
        data-css-override="https://ng-de.org/css/commento.css"></script>
    </div>
  </div>
</section>