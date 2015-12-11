"use strict";
//Remote allows to access the main process
let remote = require('remote');
//Now, even if we're in the rendered process (from the page)
//We can require the Electron libraries.
let Menu = remote.require('menu');
//IPC Allows to exchange calls between the 2 processes
//Similar to routes on back-end from front-end
let ipc = require('ipc');

/* ******** Closing Window function ********* */
// This input is the "Search" which is used to get user input.
let searchInput = document.getElementById("search");

//This is the div where we will display all the gifs
let gallery = document.getElementById('gallery');

//This is the div where we display a loading phrase to let the user know it's working
let loading = document.getElementById('loading');

//This will allow us to control if the user finished typing his text.
let changeTimer = false;

let currentGifs = [];
let currentOverlay = [];

let search = function(){
  if(searchInput.value.length>=3){
    if(changeTimer !== false) clearTimeout(changeTimer);
       changeTimer = setTimeout(function(){
           /* your ajax here */
           let uri  = "http://api.giphy.com/v1/gifs/search?q="+searchInput.value+"&api_key=dc6zaTOxFJmzC";
           let xhr = new XMLHttpRequest();
           xhr.open('GET', encodeURI(uri));
           xhr.onload = function(){
             if (xhr.status === 200){
               //console.log(JSON.parse(xhr.responseText));
               let gifs = JSON.parse(xhr.responseText);
               currentGifs = gifs;
               gallery.innerHTML = "";
               loading.innerHTML = "Images Loading";
               for(let i in gifs.data){
                 /* Hiding the prefs Window */
                 gallery.innerHTML+="<div class=\"col-12 col-m-3 gif\"><img id=\"gif-"+i+"\" src=\""+gifs.data[i].images.fixed_height.url+"\"></img><div id=\"overlay-"+i+"\" class=\"overlay\"><h2 id=\"download-"+i+"\"class=\"subtitle\">Download</h2></div></div>"
                 if(i==gifs.data.length-1){
                   loading.innerHTML = "";

                   for(let k in gifs.data){
                     let gif = document.getElementById('gif-'+k);
                     let overlay = document.getElementById('overlay-'+k);
                     let download = document.getElementById('download-'+k);
                     gif.addEventListener('mouseover', function(){
                       for(let j in currentOverlay){
                         Velocity(
                           currentOverlay[j],
                           "fadeOut",
                           {
                             duration : 200
                           }
                         );
                         currentOverlay = [];
                       }
                       currentOverlay.push(overlay);
                       Velocity(
                         overlay,
                         "fadeIn",
                         {
                           duration : 200
                         }
                       );
                       console.log("You're hovering : "+currentGifs.data[k].url);
                     });
                     download.addEventListener('click', function(){
                       window.location = currentGifs.data[k].url;
                     });
                   }
                 }
               }
             }else{
               console.log("Erreur : "+xhr.status);
             }
           }
           xhr.send();
           changeTimer = false;
       },300);
    console.log(searchInput.value);
  }else{
    console.log("Trop petit, minimum requis: 3 caractères");
  }
}

searchInput.addEventListener('input', function(){
  search();
});
