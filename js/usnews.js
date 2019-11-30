var xhr= new XMLHttpRequest();
  xhr.open("GET","https://newsapi.org/v2/top-headlines?country=us&apiKey=b4b696684e274c4d81ac6674cbc3442c");
  xhr.send();
  var data;
  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       data=JSON.parse(this.responseText);
       console.log(data);
       document.getElementById("news-10").innerHTML=data.articles[0].title;         //getting the title
       document.getElementById("news-11").innerHTML=data.articles[0].description;   //getting the description
       document.getElementById("news-12").innerHTML=data.articles[0].url;           //getting the url
       document.getElementById("news-13").innerHTML=data.articles[0].content;       //getting the content
       document.getElementById("news-14").innerHTML=data.articles[0].author;        //getting the author name
       document.getElementById("news-15").innerHTML=data.articles[0].publishedAt;   //getting the published date

       document.getElementById("news-20").innerHTML=data.articles[1].title;
       document.getElementById("news-21").innerHTML=data.articles[1].description;
       document.getElementById("news-22").innerHTML=data.articles[1].url;
       document.getElementById("news-23").innerHTML=data.articles[1].content;
       document.getElementById("news-24").innerHTML=data.articles[1].author;
       document.getElementById("news-25").innerHTML=data.articles[1].publishedAt;

       document.getElementById("news-30").innerHTML=data.articles[2].title;
       document.getElementById("news-31").innerHTML=data.articles[2].description;
       document.getElementById("news-32").innerHTML=data.articles[2].url;
       document.getElementById("news-33").innerHTML=data.articles[2].content;
       document.getElementById("news-34").innerHTML=data.articles[2].author;
       document.getElementById("news-35").innerHTML=data.articles[2].publishedAt;

       document.getElementById("news-40").innerHTML=data.articles[3].title;
       document.getElementById("news-41").innerHTML=data.articles[3].description;
       document.getElementById("news-42").innerHTML=data.articles[3].url;
       document.getElementById("news-43").innerHTML=data.articles[3].content;
       document.getElementById("news-44").innerHTML=data.articles[3].author;
       document.getElementById("news-45").innerHTML=data.articles[3].publishedAt;

       document.getElementById("news-50").innerHTML=data.articles[4].title;
       document.getElementById("news-51").innerHTML=data.articles[4].description;
       document.getElementById("news-52").innerHTML=data.articles[4].url;
       document.getElementById("news-53").innerHTML=data.articles[4].content;
       document.getElementById("news-54").innerHTML=data.articles[4].author;
       document.getElementById("news-55").innerHTML=data.articles[4].publishedAt;


       document.getElementById("news-60").innerHTML=data.articles[5].title;
       document.getElementById("news-61").innerHTML=data.articles[5].description;
       document.getElementById("news-62").innerHTML=data.articles[5].url;
       document.getElementById("news-63").innerHTML=data.articles[5].content;
       document.getElementById("news-64").innerHTML=data.articles[5].author;
       document.getElementById("news-65").innerHTML=data.articles[5].publishedAt;


       document.getElementById("news-70").innerHTML=data.articles[6].title;
       document.getElementById("news-71").innerHTML=data.articles[6].description;
       document.getElementById("news-72").innerHTML=data.articles[6].url;
       document.getElementById("news-73").innerHTML=data.articles[6].content;
       document.getElementById("news-74").innerHTML=data.articles[6].author;
       document.getElementById("news-75").innerHTML=data.articles[6].publishedAt;

    }
}