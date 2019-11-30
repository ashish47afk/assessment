var xhr= new XMLHttpRequest();
  xhr.open("GET","https://newsapi.org/v2/sources?apiKey=b4b696684e274c4d81ac6674cbc3442c");
  xhr.send();
  var data;
  xhr.onreadystatechange = function() {
      if (this.readyState == 4   && this.status == 200) {
       data=JSON.parse(this.responseText);
       console.log(data);
       document.getElementById("news-10").innerHTML=data.sources[0].name;         //getting the name
       document.getElementById("news-11").innerHTML=data.sources[0].description;  //getting the description
       document.getElementById("news-12").innerHTML=data.sources[0].url;          //getting the url
       document.getElementById("news-13").innerHTML=data.sources[0].category;     //getting the category
       document.getElementById("news-14").innerHTML=data.sources[0].language;     //getting the language
       document.getElementById("news-15").innerHTML=data.sources[0].country;      //getting the country

       document.getElementById("news-20").innerHTML=data.sources[1].name;
       document.getElementById("news-21").innerHTML=data.sources[1].description;
       document.getElementById("news-22").innerHTML=data.sources[1].url;
       document.getElementById("news-23").innerHTML=data.sources[1].category;
       document.getElementById("news-24").innerHTML=data.sources[1].language;
       document.getElementById("news-25").innerHTML=data.sources[1].country;

       document.getElementById("news-30").innerHTML=data.sources[2].name;
       document.getElementById("news-31").innerHTML=data.sources[2].description;
       document.getElementById("news-32").innerHTML=data.sources[2].url;
       document.getElementById("news-33").innerHTML=data.sources[2].category;
       document.getElementById("news-34").innerHTML=data.sources[2].language;
       document.getElementById("news-35").innerHTML=data.sources[2].country;

       document.getElementById("news-40").innerHTML=data.sources[3].name;
       document.getElementById("news-41").innerHTML=data.sources[3].description;
       document.getElementById("news-42").innerHTML=data.sources[3].url;
       document.getElementById("news-43").innerHTML=data.sources[3].category;
       document.getElementById("news-44").innerHTML=data.sources[3].language;
       document.getElementById("news-45").innerHTML=data.sources[3].country;

       document.getElementById("news-50").innerHTML=data.sources[4].name;
       document.getElementById("news-51").innerHTML=data.sources[4].description;
       document.getElementById("news-52").innerHTML=data.sources[4].url;
       document.getElementById("news-53").innerHTML=data.sources[4].catgory;
       document.getElementById("news-54").innerHTML=data.sources[4].language;
       document.getElementById("news-55").innerHTML=data.sources[4].country;

       document.getElementById("news-60").innerHTML=data.sources[5].name;
       document.getElementById("news-61").innerHTML=data.sources[5].description;
       document.getElementById("news-62").innerHTML=data.sources[5].url;
       document.getElementById("news-63").innerHTML=data.sources[5].category;
       document.getElementById("news-64").innerHTML=data.sources[5].language;
       document.getElementById("news-65").innerHTML=data.sources[5].country;

       document.getElementById("news-70").innerHTML=data.sources[6].name;
       document.getElementById("news-71").innerHTML=data.sources[6].description;
       document.getElementById("news-72").innerHTML=data.sources[6].url;
       document.getElementById("news-73").innerHTML=data.sources[6].category;
       document.getElementById("news-74").innerHTML=data.sources[6].language;
       document.getElementById("news-75").innerHTML=data.sources[6].country;
    };
  }