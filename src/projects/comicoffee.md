---
title: "Comicoffee"
languages: ['html','scss','js','node.js']
status: ['live','ongoing']
url: "http://comicoffee.uk"
date: 2019-06-01
theme: red
summary: "Website for local comic theme'd coffee shop"
---
The idea was to make a comic looking website to suit the theme of the shop using comic 'panels' for sections such as opening times, a map, menu, etc.
</br></br>
I used a thick border around the panels to create the ... border, then a mix of scewed divs to create a slanted styled title for each panel. These borders would alternate (using CSS) between two colours of the brands choice (red and grey).
</br></br>
For the menu, I wanted to enable the shop to change the menu without too much hassle - this included making a login for a 3rd party site. Google Sheets to the rescue! I created a shared sheet, and used the 'export for web' feature which generates JSON. This JSON then gets read when the site loads. This same technique powers the shake of the week feature too.
</br></br>
Social status' and images where a little more tricky. I'm using Glitch.com to host a Node.js app. Said app uses Cheerio to 'scrape' FaceBook and Instagram to grab the latest posts and photos into a JSON file. This is then read by the site to populate the page.