"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Class Declaration for the list

var List = (function () {
  function List(data) {
    _classCallCheck(this, List);

    this.list = [];
    for (var i in data) {
      this.list.push(data[i]);
    }
  }

  _createClass(List, [{
    key: "get",
    value: function get(n) {
      return this.list.slice(0, n);
    }
  }, {
    key: "getLength",
    value: function getLength() {
      return this.list.length;
    }
  }, {
    key: "addOne",
    value: function addOne(element) {
      this.list.push(element);
    }
  }, {
    key: "add",
    value: function add(elements) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var element = _step.value;

          this.list.push(element);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.list = [];
    }
  }]);

  return List;
})();

// Classes for Gif

var Frame = (function () {
  function Frame(search, url) {
    _classCallCheck(this, Frame);

    this.search = search;
    this.url = url;
  }

  _createClass(Frame, [{
    key: "get",
    value: function get() {
      return this;
    }
  }]);

  return Frame;
})();

var GIFS_PER_LINE = 3;

var Gif = (function (_Frame) {
  _inherits(Gif, _Frame);

  function Gif(search, url, downloadUrl, number) {
    _classCallCheck(this, Gif);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Gif).call(this, name, url));

    _this.number = number;
    _this.downloadUrl = downloadUrl;
    if (GIFS_PER_LINE == 3) {
      _this.col = 4; // Will create col-m-4 <=> 3 gifs per line
    } else {
        _this.col = 3; // Will create col-m-3 <=> 4 gifs per line
      }
    return _this;
  }

  _createClass(Gif, [{
    key: "render",
    value: function render() {
      switch (GIFS_ON_PAGE) {
        case 12:
          return "\n        <div class=\"col-12 col-m-" + this.col + " gif \">\n          <img src=\"" + this.url + "\" class=\"gif-12\"></img>\n          <div class=\"overlay\">\n            <div class=\"imgWrapper\"><a download=\"Gif.gif\" href=" + this.downloadUrl + " class=\"downloadUrl\"><img src=\"../img/download.png\" alt=\"download\" class=\"download\"></img></a></div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/link.png\" alt=\"link\" class=\"link\"></img>\n                <textarea rows=\"1\" cols=\"55\">\n                </textarea>\n            </div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/fav.png\" alt=\"fav\" class=\"fav\"></img>\n            </div>\n          </div>\n        </div>\n          ";
          break;
        case 18:
          return "\n        <div class=\"col-12 col-m-" + this.col + " gif \">\n          <img src=\"" + this.url + "\" class=\"gif-18\"></img>\n          <div class=\"overlay\">\n            <div class=\"imgWrapper\"><a download=\"Gif.gif\" href=" + this.downloadUrl + " class=\"downloadUrl\"><img src=\"../img/download.png\" alt=\"download\" class=\"download\"></img></a></div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/link.png\" alt=\"link\" class=\"link\"></img>\n                <textarea rows=\"1\" cols=\"55\">\n                </textarea>\n            </div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/fav.png\" alt=\"fav\" class=\"fav\"></img>\n            </div>\n          </div>\n        </div>\n          ";
          break;
        case 50:
          return "\n        <div class=\"col-12 col-m-" + this.col + " gif \">\n          <img src=\"" + this.url + "\" class=\"gif-50\"></img>\n          <div class=\"overlay\">\n            <div class=\"imgWrapper\"><a download=\"Gif.gif\" href=" + this.downloadUrl + " class=\"downloadUrl\"><img src=\"../img/download.png\" alt=\"download\" class=\"download\"></img></a></div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/link.png\" alt=\"link\" class=\"link\"></img>\n                <textarea rows=\"1\" cols=\"55\">\n                </textarea>\n            </div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/fav.png\" alt=\"fav\" class=\"fav\"></img>\n            </div>\n          </div>\n        </div>\n          ";
          break;
        case 9:
          return "\n        <div class=\"col-12 col-m-" + this.col + " gif \">\n          <img src=\"" + this.url + "\" class=\"gif-9\"></img>\n          <div class=\"overlay\">\n            <div class=\"imgWrapper\"><a download=\"Gif.gif\" href=" + this.downloadUrl + " class=\"downloadUrl\"><img src=\"../img/download.png\" alt=\"download\" class=\"download\"></img></a></div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/link.png\" alt=\"link\" class=\"link\"></img>\n                <textarea rows=\"1\" cols=\"55\">\n                </textarea>\n            </div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/fav.png\" alt=\"fav\" class=\"fav\"></img>\n            </div>\n          </div>\n        </div>\n          ";
          break;
        case 6:
          return "\n        <div class=\"col-12 col-m-" + this.col + " gif\">\n          <img src=\"" + this.url + "\" class=\"gif-6\"></img>\n          <div class=\"overlay\">\n            <div class=\"imgWrapper\"><a download=\"Gif.gif\" href=" + this.downloadUrl + " class=\"downloadUrl\"><img src=\"../img/download.png\" alt=\"download\" class=\"download\"></img></a></div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/link.png\" alt=\"link\" class=\"link\"></img>\n                <textarea rows=\"1\" cols=\"55\">\n                </textarea>\n            </div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/fav.png\" alt=\"fav\" class=\"fav\"></img>\n            </div>\n            <div class=\"imgWrapper delete\">\n              <img src=\"../img/delete.png\" alt=\"fav\" class=\"fav\"></img>\n            </div>\n          </div>\n        </div>\n          ";
          break;
        case 1:
          return "\n        <div class=\"col-12 col-m-" + this.col + " col-center gif \">\n          <img src=\"" + this.url + "\" class=\"gif-1\"></img>\n          <div class=\"overlay\">\n            <div class=\"imgWrapper\"><a download=\"Gif.gif\" href=" + this.downloadUrl + " class=\"downloadUrl\"><img src=\"../img/download.png\" alt=\"download\" class=\"download\"></img></a></div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/link.png\" alt=\"link\" class=\"link\"></img>\n                <textarea rows=\"1\" cols=\"55\">\n                </textarea>\n            </div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/fav.png\" alt=\"fav\" class=\"fav\"></img>\n            </div>\n          </div>\n        </div>\n          ";
          break;
        default:
          return "\n        <div class=\"col-12 col-m-" + this.col + " gif \">\n          <img src=\"" + this.url + "\" class=\"gif-" + GIFS_ON_PAGE + "\"></img>\n          <div class=\"overlay\">\n            <div class=\"imgWrapper\"><a download=\"Gif.gif\" href=" + this.downloadUrl + " class=\"downloadUrl\"><img src=\"../img/download.png\" alt=\"download\" class=\"download\"></img></a></div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/link.png\" alt=\"link\" class=\"link\"></img>\n                <textarea rows=\"1\" cols=\"55\">\n                </textarea>\n            </div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/fav.png\" alt=\"fav\" class=\"fav\"></img>\n            </div>\n          </div>\n        </div>\n          ";
      }
    }
  }]);

  return Gif;
})(Frame);

//Class definition for ajax calls

var Call = function Call(uri, callback) {
  _classCallCheck(this, Call);

  this.uri = uri;
  this.callback = callback;
};

var Get = (function (_Call) {
  _inherits(Get, _Call);

  function Get(uri, callback) {
    _classCallCheck(this, Get);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Get).call(this, uri, callback));

    _this2.params = [];

    for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      params[_key - 2] = arguments[_key];
    }

    for (var i in params) {
      _this2.params.push(params[i]);
    }
    return _this2;
  }

  _createClass(Get, [{
    key: "send",
    value: function send() {
      var get = this;
      var url = get.uri;
      var params = get.params;
      for (var i in params) {
        url += "/" + params[i];
      }
      var xhr = new XMLHttpRequest();
      xhr.open('GET', encodeURI(url));
      xhr.onload = function () {
        if (xhr.status == 200) {
          get.callback(JSON.parse(xhr.responseText));
        } else {
          console.log({
            content: "We couldn't get your data..."
          });
        }
      };
      xhr.send();
    }
  }]);

  return Get;
})(Call);

var Post = (function (_Call2) {
  _inherits(Post, _Call2);

  function Post(uri, callback, data) {
    _classCallCheck(this, Post);

    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Post).call(this, uri, callback));

    _this3.data = data;
    return _this3;
  }

  _createClass(Post, [{
    key: "send",
    value: function send() {
      var post = this;
      var uri = post.uri;
      var data = post.data;
      var callback = post.callback;

      var xhr = new XMLHttpRequest();
      xhr.open('POST', encodeURI(uri), true);
      //Calls a function when the state changes.
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.send(JSON.stringify(data));
      xhr.onloadend = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          callback(JSON.parse(xhr.responseText));
        } else {
          console.log("POST didn't work. Error " + xhr.status);
        }
      };
    }
  }]);

  return Post;
})(Call);

//Script for the page

//Here is the API base adress

var apiURIStart = 'https://api.giphy.com/v1/gifs/search?q=';
var apiURLKey = '&limit=80&api_key=dc6zaTOxFJmzC';
var uri = '/account'; //to create the account we'll post there
var loginUri = uri + '/login';
var gifsUri = uri + '/gifs';

//Number of Gifs on the page. Choose between 9 & 12.
var GIFS_ON_PAGE = 6;
var LAST_GIFS_ON_PAGE = GIFS_ON_PAGE; //Useful to come back to previous choice when showing favorite gifs then searching

// Divs definition

//This is the div where we will display all the gifs
var gallery = document.getElementById('gallery');

// This input is the "Search" which is used to get user input.
var searchInput = document.getElementById("search");

//This is the div where we display a loading phrase to let the user know it's working
var loading = document.getElementById('loading');

//Here we'll store the gifs and the methods
var gifs = new List();

//Contains current active overlay element
var currentOverlay = [];

var pageLoaded = 0;

//Make an element appear with data and executes a callback after a selected time
var textAppear = function textAppear(el, callback, time) {
  Velocity(el, "fadeIn", {
    duration: time
  });
  setTimeout(callback, time);
};
//Add events listeners for overlay to be a thing
var overlayListeners = function overlayListeners() {
  var gifsDivs = document.querySelectorAll('.gif .gif-' + GIFS_ON_PAGE);
  //console.log(gifsDivs);

  for (var i = 0; i <= GIFS_ON_PAGE - 1; i++) {
    var gif = gifsDivs[i];
    gif.addEventListener('mouseover', function () {
      for (var j in currentOverlay) {
        Velocity(currentOverlay[j], "fadeOut", {
          duration: 1
        });
        currentOverlay = [];
      }
      currentOverlay.push(this.parentNode.querySelectorAll('.overlay'));
      Velocity(this.parentNode.querySelectorAll('.overlay'), "fadeIn", {
        duration: 200
      });
      // console.log("You're hovering a div : ");
      // console.log(this);
    });
    //Link part :
    var link = gif.parentNode.querySelectorAll('.overlay .imgWrapper .link')[0];
    link.addEventListener('click', function () {
      var textarea = this.parentNode.querySelectorAll('textarea')[0];
      var downloadUrl = this.parentNode.parentNode.querySelectorAll('.imgWrapper .downloadUrl')[0].href;
      console.log(downloadUrl);
      textAppear(textarea, function () {
        textarea.innerHTML = "" + downloadUrl;
        textarea.select();
      }, 200);
    });

    //Download part is directly done in html

    //Favorite PART
    var favorite = gif.parentNode.querySelectorAll('.overlay .imgWrapper .fav')[0];
    favorite.addEventListener('click', function () {
      //console.log(this.parentNode.parentNode.parentNode);
      var gifInfo = {
        "fixed_height": {
          url: this.parentNode.parentNode.parentNode.querySelectorAll('img')[0].src
        },
        "fixed_height_small": {
          url: this.parentNode.parentNode.parentNode.querySelectorAll('img')[0].src
        },
        "original": this.parentNode.parentNode.querySelectorAll('.imgWrapper .downloadUrl')[0].href
      };
      var adding = function adding(data) {
        if (data.added) {
          console.log('Success !');
        } else {
          console.log("Fail");
        }
      };
      var postFav = new Post(gifsUri, adding, gifInfo);
      postFav.send();

      // Now we hide the button
      Velocity(this.parentNode, "fadeOut", {
        duration: 300
      });
      // And we show the delete button (to remove the favorite)
      Velocity(this.parentNode.parentNode.querySelectorAll('.delete')[0], "fadeIn", {
        duration: 300,
        delay: 200
      });
    });
  }
};

var randomNumber = function randomNumber(array, length) {
  var r = Math.max(0, Math.round(Math.random() * length) - 2);
  var inArray = false;
  for (var i in array) {
    if (array[i] == r) {
      inArray = true;
    }
  }
  if (inArray) {
    return randomNumber(array, length);
  } else {
    return r;
  }
};

//Here we display our gifs from our List
var display = function display() {
  //Here, we clear the list of gifs visually
  document.getElementById('gallery').innerHTML = "";
  var length = gifs.getLength();
  var gifsList = gifs.get(length);

  //Contains the number of the gifs displayed, in the list
  var gifsDisplayed = [];
  // console.log(length);
  // console.log(gifsList);

  for (var i = 0; i <= GIFS_ON_PAGE - 1; i++) {
    if (length <= GIFS_ON_PAGE) {
      //No need for random because it doesn't even fully populate the page.
      document.getElementById('gallery').innerHTML += gifsList[i].render();
    } else {
      //Random picking
      var random = randomNumber(gifsDisplayed, length); // Create a random number that's not in this array
      gifsDisplayed.push(random);
      // console.log(random);
      // console.log(gifsList[random]);
      //console.log(gifsDisplayed);

      document.getElementById('gallery').innerHTML += gifsList[random].render();
    }
  }
  overlayListeners();
};

//Here we feed the list with the gifs data received from the API
var listBuild = function listBuild(gifsReceived) {
  //Here, we clear the list of gifs in memory
  gifs.clear();
  var i = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = gifsReceived.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var gif = _step2.value;
      //Small gifs
      gifs.addOne(new Gif(searchInput.value, gif.images["fixed_height_small"].url, gif.images.original.url, i));
      i++;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  display();
};

//Here we create an instance of the GET Class to make GET calls to giphy API, when user inputs text

//gallery.innerHTML+="<div class=\"col-12 col-m-3 gif\"><img id=\"gif-"+i+"\" src=\""+gifs.data[i].images.fixed_height.url+"\"></img><div id=\"overlay-"+i+"\" class=\"overlay\"><h2 id=\"download-"+i+"\"class=\"subtitle\">Download</h2></div></div>"
// for(let k in gifs.data){
//   let gif = document.getElementById('gif-'+k);
//   let overlay = document.getElementById('overlay-'+k);
//   let download = document.getElementById('download-'+k);
//
// }

//This will allow us to control if the user finished typing his text.
var changeTimer = false;

var search = function search() {
  var input = searchInput.value;
  GIFS_ON_PAGE = LAST_GIFS_ON_PAGE;
  input = input.replace(/\s+/g, ''); // We remove spaces before checking the length, cause the 3 min char set isn't for spaces
  if (input.length >= 3) {
    if (changeTimer !== false) clearTimeout(changeTimer);
    changeTimer = setTimeout(function () {
      // Ajax Get Call to Giphy API
      input = searchInput.value; // We get again the original query
      input = input.replace(/\s+/g, '+'); // Now we replace spaces with + for the query
      var uri = apiURIStart + input + apiURLKey;
      console.log(uri);

      var get = new Get(uri, listBuild);
      get.send();
      changeTimer = false;
    }, 300);
    //console.log(searchInput.value);
  } else {
      console.log("Trop petit, minimum requis: 3 caractères");
    }
};
searchInput.addEventListener('input', function () {
  search();
});

//Enter listener

//Enter
var page = document.getElementById('page');
page.addEventListener('keydown', function (e) {
  if (13 == e.keyCode) {
    display();
  }
});

// UI Slider
var slider = document.getElementById('slider');
noUiSlider.create(slider, {
  start: [6],
  range: {
    'min': [1, 5],
    '20%': [6, 3],
    '40%': [9, 3],
    '60%': [12, 6],
    '80%': [18, 32],
    'max': [50]
  },
  'direction': 'ltr',
  'pips': {
    'mode': 'steps',
    'density': '20' // = 1/3
  }
});

// When the slider value changes, update the input and span
slider.noUiSlider.on('update', function (values, handle) {
  if (pageLoaded == 0) {
    pageLoaded++;
  } else {
    GIFS_ON_PAGE = Math.round(parseInt(values));
    console.log(GIFS_ON_PAGE);
    display();
  }
});

//Build : electron-packager "C:\Users\Victor\Desktop\Agence DevWeb\Electron\Gifinder-ES2015\app" Gifinder --platform=all --arch=all --version=0.35.0

/* ***************** FORM PART ****************** */

/* ****** Inscription Form fadeIn ****** */
var inscription = document.getElementById('inscription');
var incsriptionForm = document.getElementById('inscriptionForm');
var inscriptionSubmit = document.getElementById('inscriptionSubmit');

inscription.addEventListener('click', function () {
  Velocity(inscriptionForm, "fadeIn", {
    duration: 500
  });
});

/* **** Inscription Form closing function if user wants to go back to the site ***** */

//First we set it on the whole page
var footer = document.getElementById('footer');

page.addEventListener('click', function (e) {
  Velocity(inscriptionForm, "fadeOut", {
    duration: 500
  });
});
footer.addEventListener('click', function (e) {
  Velocity(inscriptionForm, "fadeOut", {
    duration: 500
  });
});

/* ***** Inscription Form Submit handling ***** */

inscriptionSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  var userIDDiv = document.getElementById('userID');
  var userPasswordDiv = document.getElementById('userPassword');
  var credentials = {
    userID: userIDDiv.value,
    password: userPasswordDiv.value
  };
  var creation = function creation(data) {
    console.log(data);
    switch (data.created) {
      case true:
        alert('Account created ! ');
        break;

      case false:
        alert('Account not created');
        break;

      default:
        alert('There seems to be an error. You might want to check your internet connection');
    }
  };
  var accountPost = new Post(uri, creation, credentials);
  accountPost.send();
});

/* ****** Login form to log in one's session ****** */
var loginPop = document.getElementById('login');
var loginForm = document.getElementById('loginForm');
var loginSubmit = document.getElementById('loginSubmit');

loginPop.addEventListener('click', function () {
  Velocity(loginForm, "fadeIn", {
    duration: 500
  });
});

page.addEventListener('click', function (e) {
  Velocity(loginForm, "fadeOut", {
    duration: 500
  });
});
footer.addEventListener('click', function (e) {
  Velocity(loginForm, "fadeOut", {
    duration: 500
  });
});

/* ******* Login Submit ********* */
loginSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  var userIDLoginDiv = document.getElementById('userIDLogin');
  var userPasswordLoginDiv = document.getElementById('userPasswordLogin');
  var credentials = {
    userID: userIDLoginDiv.value,
    password: userPasswordLoginDiv.value
  };
  var login = function login(data) {
    console.log(data);
    switch (data.logged) {
      case true:
        console.log('Logged in, gj');
        Velocity( //We make the button login disappear
        document.getElementById('login'), "fadeOut", {
          duration: 100
        });
        Velocity( //We replace it by the logout button
        document.getElementById('logout'), "fadeIn", {
          duration: 100,
          delay: 100
        });
        Velocity( //We then make the form disappear
        document.getElementById('loginForm'), "fadeOut", {
          duration: 600
        });
        document.getElementById('logged').innerHTML = "Logged as " + credentials.userID;
        Velocity( //We display "Logged as username"
        document.getElementById('logged').parentNode, "fadeIn", {
          duration: 600
        });
        Velocity( //We show the button allowing to get your own gifs
        document.getElementById('showFav'), "fadeIn", {
          duration: 100
        });
        break;

      case false:
        alert('Not logged in !');
        break;

      default:
        alert('There seems to be an error. You might want to check your internet connection');
    }
  };
  var loginPost = new Post(loginUri, login, credentials);
  loginPost.send();
});

/* ***** Get favorite Gifs ***** */
var favGifsButton = document.getElementById('showFav');
favGifsButton.addEventListener('click', function (e) {
  e.preventDefault();
  var uri = gifsUri;
  var callback = function callback(data) {
    GIFS_ON_PAGE = parseInt(data.data.length); // LAST_GIFS_ON_PAGE will allow to return to previous value on search.
    listBuild(data);
  };
  var getFavGifs = new Get(uri, callback);

  getFavGifs.send();
});

/* ****** Logout ****** */
var logoutPop = document.getElementById('logout');
// logoutPop.addEventListener('click', function(e){
//   e.preventDefault();
//   let logoutPost = new Post('/account/logout', function(data){
//     console.log(data);
//   });
//   logoutPost.send();
// });
/* ****** Tcheck at page load if already a session ****** */
var getLogged = new Get('/account/logged', function (data) {
  console.log(data);
  if (data.userName) {
    //Hiding the login and the sign in buttons
    Velocity(loginPop, "fadeOut", {
      duration: 1
    });
    Velocity(inscription, "fadeOut", {
      duration: 1
    });
    Velocity(logoutPop, "fadeIn", {
      duration: 1
    });
    document.getElementById('logged').innerHTML = "Logged as " + data.userName;
    Velocity(document.getElementById('logged').parentNode, "fadeIn", {
      duration: 300
    });
    Velocity(favGifsButton, "fadeIn", {
      duration: 300
    });
  }
});

getLogged.send();