//Class Declaration for the list
class List{
  constructor(data){
    this.list = [];
    for(let i in data){
      this.list.push(data[i]);
    }
  }

  get(n){
    return this.list.slice(0,(n));
  }

  getLength(){
    return this.list.length;
  }
  addOne(element){
    this.list.push(element);
  }

  add(elements){
    for(let element of elements){
      this.list.push(element);
    }
  }

  clear(){
    this.list = [];
  }
}

// Classes for Gif
class Frame{
  constructor(search, url){
    this.search = search;
    this.url = url;
  }

  get(){
    return this;
  }
}

class Gif extends Frame{
  constructor(search, url, downloadUrl, number){
    super(name, url);
    this.number = number;
    this.downloadUrl = downloadUrl;
  }

  render(){
    switch(GIFS_ON_PAGE){
      case 12 :
        return(
          `
        <div class="col-12 col-m-4 gif ">
          <img src="${this.url}" class="gif-12"></img>
          <div class="overlay">
            <div class="imgWrapper"><a download="Gif.gif" href=${this.downloadUrl} class="downloadUrl"><img src="../img/download.png" alt="download" class="download"></img></a></div>
            <div class="imgWrapper">
              <img src="../img/link.png" alt="link" class="link"></img>
                <textarea rows="1" cols="55">
                </textarea>
            </div>
          </div>
        </div>
          `
        );
        break;
      case 18 :
        return(
          `
        <div class="col-12 col-m-4 gif ">
          <img src="${this.url}" class="gif-18"></img>
          <div class="overlay">
            <div class="imgWrapper"><a download="Gif.gif" href=${this.downloadUrl}><img src="../img/download.png" alt="download" class="download"></img></a></div>
            <div class="imgWrapper">
              <img src="../img/link.png" alt="link" class="link"></img>
                <textarea rows="1" cols="55">
                </textarea>
            </div>
          </div>
        </div>
          `
        );
        break;
      case 50 :
        return(
          `
        <div class="col-12 col-m-4 gif ">
          <img src="${this.url}" class="gif-50"></img>
          <div class="overlay">
            <div class="imgWrapper"><a download="Gif.gif" href=${this.downloadUrl}><img src="../img/download.png" alt="download" class="download"></img></a></div>
            <div class="imgWrapper">
              <img src="../img/link.png" alt="link" class="link"></img>
                <textarea rows="1" cols="55">
                </textarea>
            </div>
          </div>
        </div>
          `
        );
        break;
      case 9 :
        return(
          `
        <div class="col-12 col-m-4 gif ">
          <img src="${this.url}" class="gif-9"></img>
          <div class="overlay">
            <div class="imgWrapper"><a download="Gif.gif" href=${this.downloadUrl}><img src="../img/download.png" alt="download" class="download"></img></a></div>
            <div class="imgWrapper">
              <img src="../img/link.png" alt="link" class="link"></img>
                <textarea rows="1" cols="55">
                </textarea>
            </div>
          </div>
        </div>
          `
        );
        break;
      case 6 :
        return(
          `
        <div class="col-12 col-m-4 gif">
          <img src="${this.url}" class="gif-6"></img>
          <div class="overlay">
            <div class="imgWrapper"><a download="Gif.gif" href=${this.downloadUrl}><img src="../img/download.png" alt="download" class="download"></img></a></div>
            <div class="imgWrapper">
              <img src="../img/link.png" alt="link" class="link"></img>
                <textarea rows="1" cols="55">
                </textarea>
            </div>
          </div>
        </div>
          `
        );
        break;
      case 1 :
        return(
          `
        <div class="col-12 gif ">
          <img src="${this.url}" class="gif-1"></img>
          <div class="overlay">
            <div class="imgWrapper"><a download="Gif.gif" href=${this.downloadUrl}><img src="../img/download.png" alt="download" class="download"></img></a></div>
            <div class="imgWrapper">
              <img src="../img/link.png" alt="link" class="link"></img>
                <textarea rows="1" cols="55">
                </textarea>
            </div>
          </div>
        </div>
          `
        );
        break;
      default :
        return(`<h1 class="article">BUG OMG</h1>`);
    }
  }
}

//Class definition for ajax calls

class Call{
  constructor(uri, callback){
    this.uri = uri;
    this.callback = callback;
  }
}

class Get extends Call{
  constructor(uri, callback,...params){
    super(uri, callback);
    this.params = [];
    for(let i in params){
      this.params.push(params[i]);
    }
  }

  send(){
    let get = this;
    let url = get.uri;
    let params = get.params;
    for(let i in params){
      url+="/"+params[i];
    }
    let xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI(url));
    xhr.onload = function(){
      if(xhr.status==200){
        get.callback(JSON.parse(xhr.responseText));
      }else{
        console.log({
          content : "We couldn't get your data..."
        });
      }
    };
    xhr.send();
  }
}

//Script for the page

//Here is the API base adress
const apiURIStart = 'https://api.giphy.com/v1/gifs/search?q=';
const apiURLKey = '&limit=80&api_key=dc6zaTOxFJmzC';

//Number of Gifs on the page. Choose between 9 & 12.
let GIFS_ON_PAGE = 6;

// Divs definition

//This is the div where we will display all the gifs
let gallery = document.getElementById('gallery');

// This input is the "Search" which is used to get user input.
let searchInput = document.getElementById("search");

//This is the div where we display a loading phrase to let the user know it's working
let loading = document.getElementById('loading');


//Here we'll store the gifs and the methods
let gifs = new List();

//Contains current active overlay element
let currentOverlay = [];

let pageLoaded = 0;


//Make an element appear with data and executes a callback after a selected time
let textAppear = function(el, callback, time){
  Velocity(
    el,
    "fadeIn",
    {
      duration : time
    }
  );
  setTimeout(callback, time)
}
//Add events listeners for overlay to be a thing
let overlayListeners = function(){
  let gifsDivs = document.querySelectorAll('.gif .gif-'+GIFS_ON_PAGE);
  //console.log(gifsDivs);

  for(let i=0;i<=(GIFS_ON_PAGE-1);i++){
    let gif = gifsDivs[i];
    gif.addEventListener('mouseover', function(){
        for(let j in currentOverlay){
          Velocity(
            currentOverlay[j],
            "fadeOut",
            {
              duration : 1
            }
          );
          currentOverlay = [];
        }
        currentOverlay.push(this.parentNode.querySelectorAll('.overlay'));
        Velocity(
          this.parentNode.querySelectorAll('.overlay'),
          "fadeIn",
          {
            duration : 200
          }
        );
        // console.log("You're hovering a div : ");
        // console.log(this);
      });
      //Link part :
      let link = gif.parentNode.querySelectorAll('.overlay .imgWrapper .link')[0];
      link.addEventListener('click', function(){
        let textarea = this.parentNode.querySelectorAll('textarea')[0];
        let downloadUrl = this.parentNode.parentNode.querySelectorAll('.imgWrapper .downloadUrl')[0].href;
        console.log(downloadUrl);
        textAppear(textarea, function(){
          textarea.innerHTML = ""+downloadUrl;
          textarea.select();
        }, 200);

      });

      //Download part is directly done in html
  }
}

let randomNumber = function(array, length){
  let r = Math.max(0,Math.round(Math.random()*length)-2);
  let inArray = false;
  for(let i in array){
    if(array[i]==r){
      inArray = true;
    }
  }
  if(inArray){
    return randomNumber(array, length);
  }else{
    return r;
  }
}

//Here we display our gifs from our List
let display = function(){
  //Here, we clear the list of gifs visually
  document.getElementById('gallery').innerHTML="";
  let length = gifs.getLength();
  let gifsList = gifs.get(length);

  //Contains the number of the gifs displayed, in the list
  let gifsDisplayed = [];
  // console.log(length);
  // console.log(gifsList);

  for(let i=0; i<=(GIFS_ON_PAGE-1); i++){
    if(length<=(GIFS_ON_PAGE)){ //No need for random because it doesn't even fully populate the page.
      document.getElementById('gallery').innerHTML+=gifsList[i].render();
    }else{//Random picking
      let random = randomNumber(gifsDisplayed, length); // Create a random number that's not in this array
      gifsDisplayed.push(random);
      // console.log(random);
      // console.log(gifsList[random]);
      console.log(gifsDisplayed);

      document.getElementById('gallery').innerHTML+=gifsList[random].render();
    }
  }
  overlayListeners();
}

//Here we feed the list with the gifs data received from the API
let listBuild = function(gifsReceived){
  //Here, we clear the list of gifs in memory
  gifs.clear();
  let i = 0;
  for(let gif of gifsReceived.data){
    gifs.addOne(new Gif(searchInput.value, gif.images.fixed_height.url, gif.images.original.url, i));
    i++;
  }

  display();
}



//Here we create an instance of the GET Class to make GET calls to giphy API, when user inputs text

//gallery.innerHTML+="<div class=\"col-12 col-m-3 gif\"><img id=\"gif-"+i+"\" src=\""+gifs.data[i].images.fixed_height.url+"\"></img><div id=\"overlay-"+i+"\" class=\"overlay\"><h2 id=\"download-"+i+"\"class=\"subtitle\">Download</h2></div></div>"
// for(let k in gifs.data){
//   let gif = document.getElementById('gif-'+k);
//   let overlay = document.getElementById('overlay-'+k);
//   let download = document.getElementById('download-'+k);
//
// }

//This will allow us to control if the user finished typing his text.
let changeTimer = false;

let search = function(){
  let input = searchInput.value;
  input = input.replace(/\s+/g, '');// We remove spaces before checking the length, cause the 3 min char set isn't for spaces
  if(input.length>=3){
    if(changeTimer !== false) clearTimeout(changeTimer);
       changeTimer = setTimeout(function(){
         // Ajax Get Call to Giphy API
         input = searchInput.value; // We get again the original query
         input = input.replace(/\s+/g, '+'); // Now we replace spaces with + for the query
         let uri = apiURIStart+input+apiURLKey;
         console.log(uri);

         let get = new Get(uri, listBuild);
         get.send();
         changeTimer = false;
       },300);
    //console.log(searchInput.value);
  }else{
    console.log("Trop petit, minimum requis: 3 caractères");
  }
}
searchInput.addEventListener('input', function(){
  search();
});

//Enter listener

//Enter

window.addEventListener('keydown', function (e) {
  if (13 == e.keyCode) {
     display();
  }
});


// UI Slider
var slider = document.getElementById('slider');
noUiSlider.create(slider, {
  start: [ 6 ],
	range: {
		'min': [ 1,5 ],
		'20%': [  6,3 ],
    '40%': [  9,3 ],
		'60%': [  12,6 ],
    '80%' : [ 18,32 ],
		'max': [ 50 ]
	},
  'direction' : 'ltr',
  'pips' : {
    'mode' : 'steps',
    'density' : '20'// = 1/3
  }
});

// When the slider value changes, update the input and span
slider.noUiSlider.on('update', function( values, handle ) {
  if(pageLoaded ==0){
    pageLoaded++;
  }else{
    GIFS_ON_PAGE = Math.round(parseInt(values));
    console.log(GIFS_ON_PAGE);
    display();
  }
});


//Build : electron-packager "C:\Users\Victor\Desktop\Agence DevWeb\Electron\Gifinder-ES2015\app" Gifinder --platform=all --arch=all --version=0.35.0
