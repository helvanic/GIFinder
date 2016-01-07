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

const GIFS_PER_LINE = 3;

class Gif extends Frame{
  constructor(search, url, downloadUrl, number){
    super(name, url);
    this.number = number;
    this.downloadUrl = downloadUrl;
    if(GIFS_PER_LINE==3){
      this.col = 4; // Will create col-m-4 <=> 3 gifs per line
    }else{
      this.col = 3; // Will create col-m-3 <=> 4 gifs per line
    }
  }

  render(){
    switch(GIFS_ON_PAGE){
      case 12 :
        return(
          `
        <div class="col-12 col-m-${this.col} gif ">
          <img src="${this.url}" class="gif-12"></img>
          <div class="overlay">
            <div class="imgWrapper"><a download="Gif.gif" href=${this.downloadUrl} class="downloadUrl"><img src="../img/download.png" alt="download" class="download"></img></a></div>
            <div class="imgWrapper">
              <img src="../img/link.png" alt="link" class="link"></img>
                <textarea rows="1" cols="55">
                </textarea>
            </div>
            <div class="imgWrapper">
              <img src="../img/fav.png" alt="fav" class="fav"></img>
            </div>
          </div>
        </div>
          `
        );
        break;
      case 18 :
        return(
          `
        <div class="col-12 col-m-${this.col} gif ">
          <img src="${this.url}" class="gif-18"></img>
          <div class="overlay">
            <div class="imgWrapper"><a download="Gif.gif" href=${this.downloadUrl} class="downloadUrl"><img src="../img/download.png" alt="download" class="download"></img></a></div>
            <div class="imgWrapper">
              <img src="../img/link.png" alt="link" class="link"></img>
                <textarea rows="1" cols="55">
                </textarea>
            </div>
            <div class="imgWrapper">
              <img src="../img/fav.png" alt="fav" class="fav"></img>
            </div>
          </div>
        </div>
          `
        );
        break;
      case 50 :
        return(
          `
        <div class="col-12 col-m-${this.col} gif ">
          <img src="${this.url}" class="gif-50"></img>
          <div class="overlay">
            <div class="imgWrapper"><a download="Gif.gif" href=${this.downloadUrl} class="downloadUrl"><img src="../img/download.png" alt="download" class="download"></img></a></div>
            <div class="imgWrapper">
              <img src="../img/link.png" alt="link" class="link"></img>
                <textarea rows="1" cols="55">
                </textarea>
            </div>
            <div class="imgWrapper">
              <img src="../img/fav.png" alt="fav" class="fav"></img>
            </div>
          </div>
        </div>
          `
        );
        break;
      case 9 :
        return(
          `
        <div class="col-12 col-m-${this.col} gif ">
          <img src="${this.url}" class="gif-9"></img>
          <div class="overlay">
            <div class="imgWrapper"><a download="Gif.gif" href=${this.downloadUrl} class="downloadUrl"><img src="../img/download.png" alt="download" class="download"></img></a></div>
            <div class="imgWrapper">
              <img src="../img/link.png" alt="link" class="link"></img>
                <textarea rows="1" cols="55">
                </textarea>
            </div>
            <div class="imgWrapper">
              <img src="../img/fav.png" alt="fav" class="fav"></img>
            </div>
          </div>
        </div>
          `
        );
        break;
      case 6 :
        return(
          `
        <div class="col-12 col-m-${this.col} gif">
          <img src="${this.url}" class="gif-6"></img>
          <div class="overlay">
            <div class="imgWrapper"><a download="Gif.gif" href=${this.downloadUrl} class="downloadUrl"><img src="../img/download.png" alt="download" class="download"></img></a></div>
            <div class="imgWrapper">
              <img src="../img/link.png" alt="link" class="link"></img>
                <textarea rows="1" cols="55">
                </textarea>
            </div>
            <div class="imgWrapper">
              <img src="../img/fav.png" alt="fav" class="fav"></img>
            </div>
            <div class="imgWrapper delete">
              <img src="../img/delete.png" alt="fav" class="fav"></img>
            </div>
          </div>
        </div>
          `
        );
        break;
      case 1 :
        return(
          `
        <div class="col-12 col-m-${this.col} col-center gif ">
          <img src="${this.url}" class="gif-1"></img>
          <div class="overlay">
            <div class="imgWrapper"><a download="Gif.gif" href=${this.downloadUrl} class="downloadUrl"><img src="../img/download.png" alt="download" class="download"></img></a></div>
            <div class="imgWrapper">
              <img src="../img/link.png" alt="link" class="link"></img>
                <textarea rows="1" cols="55">
                </textarea>
            </div>
            <div class="imgWrapper">
              <img src="../img/fav.png" alt="fav" class="fav"></img>
            </div>
          </div>
        </div>
          `
        );
        break;
      default :
        return(
          `
        <div class="col-12 col-m-${this.col} gif ">
          <img src="${this.url}" class="gif-${GIFS_ON_PAGE}"></img>
          <div class="overlay">
            <div class="imgWrapper"><a download="Gif.gif" href=${this.downloadUrl} class="downloadUrl"><img src="../img/download.png" alt="download" class="download"></img></a></div>
            <div class="imgWrapper">
              <img src="../img/link.png" alt="link" class="link"></img>
                <textarea rows="1" cols="55">
                </textarea>
            </div>
            <div class="imgWrapper">
              <img src="../img/fav.png" alt="fav" class="fav"></img>
            </div>
          </div>
        </div>
          `
        );
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

class Post extends Call{
  constructor(uri, callback, data){
    super(uri, callback);
    this.data = data;
  }

  send(){
    let post = this;
    let uri = post.uri;
    let data = post.data;
    let callback = post.callback;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', encodeURI(uri), true);
    //Calls a function when the state changes.
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(data));
    xhr.onloadend = function () {
      if(xhr.readyState == 4 && xhr.status == 200) {
    		callback(JSON.parse(xhr.responseText));
    	}else{
        console.log("POST didn't work. Error "+xhr.status);
      }
    };
  }
}


//Script for the page

//Here is the API base adress
const apiURIStart = 'https://api.giphy.com/v1/gifs/search?q=';
const apiURLKey = '&limit=80&api_key=dc6zaTOxFJmzC';
const uri = '/account'; //to create the account we'll post there
const loginUri = uri + '/login';
const gifsUri = uri+'/gifs';

//Number of Gifs on the page. Choose between 9 & 12.
let GIFS_ON_PAGE = 6;
let LAST_GIFS_ON_PAGE = GIFS_ON_PAGE; //Useful to come back to previous choice when showing favorite gifs then searching

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

      //Favorite PART
      let favorite = gif.parentNode.querySelectorAll('.overlay .imgWrapper .fav')[0];
      favorite.addEventListener('click', function(){
        //console.log(this.parentNode.parentNode.parentNode);
        let gifInfo = {
          "fixed_height" : {
            url :this.parentNode.parentNode.parentNode.querySelectorAll('img')[0].src
          },
          "fixed_height_small" : {
            url : this.parentNode.parentNode.parentNode.querySelectorAll('img')[0].src
          },
          "original":  this.parentNode.parentNode.querySelectorAll('.imgWrapper .downloadUrl')[0].href
        }
        let adding = function(data){
          if(data.added){
            console.log('Success !');
          }else{
            console.log("Fail");
          }
        }
        let postFav = new Post(gifsUri, adding, gifInfo);
        postFav.send();

        // Now we hide the button
        Velocity(
          this.parentNode,
          "fadeOut",
          {
            duration : 300
          }
        );
        // And we show the delete button (to remove the favorite)
        Velocity(
          this.parentNode.parentNode.querySelectorAll('.delete')[0],
          "fadeIn",
          {
            duration : 300,
            delay : 200
          }
        );
      });
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
      //console.log(gifsDisplayed);

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
  for(let gif of gifsReceived.data){//Small gifs
      gifs.addOne(new Gif(searchInput.value, gif.images["fixed_height_small"].url, gif.images.original.url, i));
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
  GIFS_ON_PAGE = LAST_GIFS_ON_PAGE;
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
let page = document.getElementById('page');
page.addEventListener('keydown', function (e) {
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
    LAST_GIFS_ON_PAGE = GIFS_PER_LINE;
    console.log(GIFS_ON_PAGE);
    display();
  }
});


//Build : electron-packager "C:\Users\Victor\Desktop\Agence DevWeb\Electron\Gifinder-ES2015\app" Gifinder --platform=all --arch=all --version=0.35.0

/* ***************** FORM PART ****************** */


  /* ****** Inscription Form fadeIn ****** */
let inscription = document.getElementById('inscription');
let incsriptionForm = document.getElementById('inscriptionForm');
let inscriptionSubmit = document.getElementById('inscriptionSubmit');

inscription.addEventListener('click', function(){
  Velocity(
    inscriptionForm,
    "fadeIn",
    {
      duration : 500
    }
  );
});

  /* **** Inscription Form closing function if user wants to go back to the site ***** */

//First we set it on the whole page
let footer = document.getElementById('footer');

page.addEventListener('click', function(e){
  Velocity(
    inscriptionForm,
    "fadeOut",
    {
      duration : 500
    }
  );
});
footer.addEventListener('click', function(e){
  Velocity(
    inscriptionForm,
    "fadeOut",
    {
      duration : 500
    }
  );
});

  /* ***** Inscription Form Submit handling ***** */

inscriptionSubmit.addEventListener('click', function(event){
  event.preventDefault();
  let userIDDiv = document.getElementById('userID');
  let userPasswordDiv = document.getElementById('userPassword');
  let credentials = {
    userID : userIDDiv.value,
    password : userPasswordDiv.value
  }
  let creation = function(data){
    console.log(data);
    switch(data.created){
      case true :
        alert('Account created ! ');
        break;

      case false :
        alert('Account not created');
        break;

      default:
        alert('There seems to be an error. You might want to check your internet connection');
    }
  }
  let accountPost = new Post(uri, creation, credentials);
  accountPost.send();
});

/* ****** Login form to log in one's session ****** */
let loginPop = document.getElementById('login');
let loginForm = document.getElementById('loginForm');
let loginSubmit = document.getElementById('loginSubmit');

loginPop.addEventListener('click', function(){
  Velocity(
    loginForm,
    "fadeIn",
    {
      duration : 500
    }
  );
});

page.addEventListener('click', function(e){
  Velocity(
    loginForm,
    "fadeOut",
    {
      duration : 500
    }
  );
});
footer.addEventListener('click', function(e){
  Velocity(
    loginForm,
    "fadeOut",
    {
      duration : 500
    }
  );
});

/* ******* Login Submit ********* */
loginSubmit.addEventListener('click', function(event){
  event.preventDefault();
  let userIDLoginDiv = document.getElementById('userIDLogin');
  let userPasswordLoginDiv = document.getElementById('userPasswordLogin');
  let credentials = {
    userID : userIDLoginDiv.value,
    password : userPasswordLoginDiv.value
  }
  let login = function(data){
    console.log(data);
    switch(data.logged){
      case true :
        console.log('Logged in, gj');
        Velocity(//We make the button login disappear
          document.getElementById('login'),
          "fadeOut",
          {
            duration : 100
          }
        );
        Velocity(//We replace it by the logout button
          document.getElementById('logout'),
          "fadeIn",
          {
            duration : 100,
            delay : 100
          }
        );
        Velocity(//We then make the form disappear
          document.getElementById('loginForm'),
          "fadeOut",
          {
            duration : 600
          }
        );
        document.getElementById('logged').innerHTML = "Logged as "+credentials.userID;
        Velocity(//We display "Logged as username"
          document.getElementById('logged').parentNode,
          "fadeIn",
          {
            duration : 600
          }
        );
        Velocity(//We show the button allowing to get your own gifs
          document.getElementById('showFav'),
          "fadeIn",
          {
            duration : 100
          }
        );
        break;

      case false :
        alert('Not logged in !');
        break;

      default:
        alert('There seems to be an error. You might want to check your internet connection');
    }
  }
  let loginPost = new Post(loginUri, login, credentials);
  loginPost.send();
});

/* ***** Get favorite Gifs ***** */
let favGifsButton = document.getElementById('showFav');
favGifsButton.addEventListener('click', function(e){
  e.preventDefault();
  let uri = gifsUri;
  let callback = function(data){
    GIFS_ON_PAGE = parseInt(data.data.length); // LAST_GIFS_ON_PAGE will allow to return to previous value on search.
    listBuild(data);
  }
  let getFavGifs = new Get(uri, callback);

  getFavGifs.send();
});


/* ****** Logout ****** */
let logoutPop = document.getElementById('logout');
// logoutPop.addEventListener('click', function(e){
//   e.preventDefault();
//   let logoutPost = new Post('/account/logout', function(data){
//     console.log(data);
//   });
//   logoutPost.send();
// });
/* ****** Tcheck at page load if already a session ****** */
let getLogged = new Get('/account/logged', function(data){
  console.log(data);
  if(data.userName){
    //Hiding the login and the sign in buttons
    Velocity(
      loginPop,
      "fadeOut",
      {
        duration : 1
      }
    );
    Velocity(
      inscription,
      "fadeOut",
      {
        duration : 1
      }
    );
    Velocity(
      logoutPop,
      "fadeIn",
      {
        duration : 1
      }
    );
    document.getElementById('logged').innerHTML = "Logged as "+data.userName;
    Velocity(
      document.getElementById('logged').parentNode,
      "fadeIn",
      {
        duration : 300
      }
    );
    Velocity(
      favGifsButton,
      "fadeIn",
      {
        duration : 300
      }
    );
  }
});

getLogged.send();


//CORRECTION NEEDED WHEN LESS GIFS THAN WE WANT
//CORRECTION NEEDED FOR 1 GIFS, LAST OF THE LIST NOT DISPLAYED
