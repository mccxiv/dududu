# ![](https://static-cdn.jtvnw.net/emoticons/v1/62834/2.0) [Dududu](http://twitch.mccxiv.me/) ![](https://static-cdn.jtvnw.net/emoticons/v1/62834/1.0)

The "Following" page is the most important part of Twitch, but it sucks.

##### Improvements over Twitch.tv
- Following page updates itself, no need to refresh
- Following page shows streams from the Games you follow at a glance
- Zoom and pan the video. Great for small windows
- Responsive: chat automatically goes below video when appropriate to give it more space

Use it at [twitch.mccxiv.me](http://twitch.mccxiv.me)

The current version is no frills.  
Zoom & Pan features only work in Chrome at the moment.  
Maybe I'll make it prettier with animations and such, but I just wanted the functionality first.

---

##### For developers: Running your own version / forking
1. Clone Repo
2. Run `npm install`
3. Copy the sample file in `src/config`, following the instructions within it
4. Try it with `npm start`, visit localhost:8080
5. Build for production with `npm build`, dump the contents of `build` folder into your web server.
6. You'll want to set your server up to work with single page applications. This means serving `index.html` for all 404s. Here's a sample `.htaccess` file to place next to `index.html`

```
RewriteEngine On

# If an existing asset or directory is requested go to it as it is
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]

# If the requested resource doesn't exist, use index.html
RewriteRule ^ /index.html
```
---

My first Webpack + React project so I'm hoping to learn from it :smile:  
** Edit: I have learned from it.*

###### © 2015 Andrea Stella, ISC license.
