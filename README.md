# GIFinder
Allows you to search for GIFS on the Giphy API. Next version will allow to create a list of favorite gifs. Also used ES2015 Class system.
Everything is furnished in an simple express server, but you can get the front-end code only in the public folder.

## What's new?
In this project, I managed to get GIFs from the Giphy API which you can find here : https://github.com/giphy/GiphyAPI (Edit : Heroku account not available at the moment. Just download the App and launch the server yourself to try it).
You can easely get the gif url to use it in anywhere. You can also download it directly (if you're on Chrome, else you'll be redirected to a page containing the gif. Just right-click => Save image).

I also used ES2015 class system. You can find the ES2015 in the jsDev folder. To be usable on the browser, i used babel on Gulp.
CSS is generated with Gulp too, from the .scss files in the sass folder. I highly recommend you to read the pre-compiled JS code, because babelified JS code can be quite hard to read ^^.

## Can i re-use some of this code?
Sure, it's for free ! :)

## What's next?
I plan to allow users to define favorite gifs, but this require a bit more work ( => a session system). 
