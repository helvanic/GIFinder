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

var Gif = (function (_Frame) {
  _inherits(Gif, _Frame);

  function Gif(search, url, downloadUrl, number) {
    _classCallCheck(this, Gif);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Gif).call(this, name, url));

    _this.number = number;
    _this.downloadUrl = downloadUrl;
    return _this;
  }

  _createClass(Gif, [{
    key: "render",
    value: function render() {
      switch (GIFS_ON_PAGE) {
        case 12:
          return "\n        <div class=\"col-12 col-m-4 gif \">\n          <img src=\"" + this.url + "\" class=\"gif-12\"></img>\n          <div class=\"overlay\">\n            <div class=\"imgWrapper\"><a download=\"Gif.gif\" href=" + this.downloadUrl + " class=\"downloadUrl\"><img src=\"../img/download.png\" alt=\"download\" class=\"download\"></img></a></div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/link.png\" alt=\"link\" class=\"link\"></img>\n                <textarea rows=\"1\" cols=\"55\">\n                </textarea>\n            </div>\n          </div>\n        </div>\n          ";
          break;
        case 18:
          return "\n        <div class=\"col-12 col-m-4 gif \">\n          <img src=\"" + this.url + "\" class=\"gif-18\"></img>\n          <div class=\"overlay\">\n            <div class=\"imgWrapper\"><a download=\"Gif.gif\" href=" + this.downloadUrl + " class=\"downloadUrl\"><img src=\"../img/download.png\" alt=\"download\" class=\"download\"></img></a></div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/link.png\" alt=\"link\" class=\"link\"></img>\n                <textarea rows=\"1\" cols=\"55\">\n                </textarea>\n            </div>\n          </div>\n        </div>\n          ";
          break;
        case 50:
          return "\n        <div class=\"col-12 col-m-4 gif \">\n          <img src=\"" + this.url + "\" class=\"gif-50\"></img>\n          <div class=\"overlay\">\n            <div class=\"imgWrapper\"><a download=\"Gif.gif\" href=" + this.downloadUrl + " class=\"downloadUrl\"><img src=\"../img/download.png\" alt=\"download\" class=\"download\"></img></a></div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/link.png\" alt=\"link\" class=\"link\"></img>\n                <textarea rows=\"1\" cols=\"55\">\n                </textarea>\n            </div>\n          </div>\n        </div>\n          ";
          break;
        case 9:
          return "\n        <div class=\"col-12 col-m-4 gif \">\n          <img src=\"" + this.url + "\" class=\"gif-9\"></img>\n          <div class=\"overlay\">\n            <div class=\"imgWrapper\"><a download=\"Gif.gif\" href=" + this.downloadUrl + " class=\"downloadUrl\"><img src=\"../img/download.png\" alt=\"download\" class=\"download\"></img></a></div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/link.png\" alt=\"link\" class=\"link\"></img>\n                <textarea rows=\"1\" cols=\"55\">\n                </textarea>\n            </div>\n          </div>\n        </div>\n          ";
          break;
        case 6:
          return "\n        <div class=\"col-12 col-m-4 gif\">\n          <img src=\"" + this.url + "\" class=\"gif-6\"></img>\n          <div class=\"overlay\">\n            <div class=\"imgWrapper\"><a download=\"Gif.gif\" href=" + this.downloadUrl + " class=\"downloadUrl\"><img src=\"../img/download.png\" alt=\"download\" class=\"download\"></img></a></div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/link.png\" alt=\"link\" class=\"link\"></img>\n                <textarea rows=\"1\" cols=\"55\">\n                </textarea>\n            </div>\n          </div>\n        </div>\n          ";
          break;
        case 1:
          return "\n        <div class=\"col-12 col-m-4 col-center gif \">\n          <img src=\"" + this.url + "\" class=\"gif-1\"></img>\n          <div class=\"overlay\">\n            <div class=\"imgWrapper\"><a download=\"Gif.gif\" href=" + this.downloadUrl + " class=\"downloadUrl\"><img src=\"../img/download.png\" alt=\"download\" class=\"download\"></img></a></div>\n            <div class=\"imgWrapper\">\n              <img src=\"../img/link.png\" alt=\"link\" class=\"link\"></img>\n                <textarea rows=\"1\" cols=\"55\">\n                </textarea>\n            </div>\n          </div>\n        </div>\n          ";
          break;
        default:
          return "<h1 class=\"article\">BUG OMG</h1>";
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

//Script for the page

//Here is the API base adress

var apiURIStart = 'https://api.giphy.com/v1/gifs/search?q=';
var apiURLKey = '&limit=80&api_key=dc6zaTOxFJmzC';

//Number of Gifs on the page. Choose between 9 & 12.
var GIFS_ON_PAGE = 6;

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
      console.log(gifsDisplayed);

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

      gifs.addOne(new Gif(searchInput.value, gif.images.fixed_height.url, gif.images.original.url, i));
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

window.addEventListener('keydown', function (e) {
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