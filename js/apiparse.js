var header = document.querySelector('.header-t');
var section = document.querySelector('.posts-a');
var requestURL = 'https://bot-descartes.netlify.com/api/articles.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
request.onload = function() {
  var superHeroesText = request.response;
  var superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}
function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['Name'];
  myH1.className = 'brand-title';
  header.appendChild(myH1);
  var myPara = document.createElement('h2');
  myPara.textContent = jsonObj['description'];
  myPara.className = 'brand-tagline';
  header.appendChild(myPara);
}
function showHeroes(jsonObj) {
  var heroes = jsonObj['articles'];
  for(var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('section');
    var d = new Date(heroes[i].date);
    var webp = heroes[i].img;
    myArticle.className = 'post';
    myArticle.innerHTML = '<div class="pure-g"><div class="pure-u-7-8 pure-u-md-4-5"><header class="post-header"><h2 class="post-title">' + heroes[i].title + '</h2><p class="post-meta"><a class="button-large pure-button pure-button-primary" href="' + heroes[i].file + '">Завантажити</a> Опубліковано <time datetime="' + d.toLocaleDateString()+ '">' + d.toLocaleDateString()+ '</time></p></header><div class="post-description"><p>' + heroes[i].strippost + '</p></div></div><div class="pure-u-1-8 pure-u-md-1-5 post-images"><picture><source srcset="' + webp.replace("jpg", "webp") + '" type="image/webp"><img src="' + heroes[i].img + '" class="pure-img-responsive"></picture></div>';
    section.appendChild(myArticle);
  }
}
