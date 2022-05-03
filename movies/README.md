# Assignment 1 - ReactJS app.

Name: Emma Roche (20088680)

## Overview.

 My movies app includes 5 views on the site header menu bar which display different movie lists such as Home, Now Playing, Upcoming, Top Rated and Favourites. When you click on an individual movie card, it displays basic overview information on the selected movie, as well as cast details and recommended movies. There are two buttons on the bottom of the movie cards, one is a favourites button that when you click on it, it adds that selected movie to the favourites movie list view. The other button is labeled 'Similar Movies', where you can click on that to view the similar movies to the selected movie. You can also filter the movie lists by search, genres and ratings.

### Features.

+ There is a new view added to the site header menu bar called 'Now Playing' where you can see a list of now playing movies.

+ There is a new view added to the site header menu bar called 'Top rated' where you can see a list of top rated movies.

+ There is a new 'Similar movies' clickable button at the bottom of the movie cards, where it brings you to a page that displays pictures and names of movies that are similar to the selected movie.

+ There is a new rating filter card, added under the original filter card, where it will only show the movies on that page with the ratings matching or higher than the number you enter.

+ Instead of click a 'more info' button on the movies card, I have made it so you can just click on the movie image and it will bring you to the movie details page.

+ You can now see the Cast pictures, their names and the characters they played in the movie on the movies more details page.

+ When you click on a cast member it will bring you to a page where it shows their biography and a scrollable section with more pictures of the actor/actress.

+ I have added a scrollable imageList to the movie posters on the left of the screen on the movies details page.

+ I have made some basic UI changes to the site header, similar movies button and filter card background by changing their colour to primary blue.

+ I changed the presentation of the movie release date and movie rating on the movie cards.

+ To make the app responsive, I added Responsive UI components, such as ImageLists and Grids, to the sections that didn't have these responsive features previously and to the sections that I newly added.

+ I made the movie cards wider so now 3/4 movie cards are shown in a row instead of 5 to make it easier to read the mvoue names and see the movie pictures.

+ I added pagination to the movie list pages, each page shows max 7 movie cards.

## Setup requirements.

N/A

## API endpoints.

+ Now Playing movies - path: movie/now_playing 
URL: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`

+ Top Rated movies - path: /movie/top_rated
URL: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`

+ Movie credits - path: /movie/{movie_id}/credits 
URL: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`

+ People details  - path: /person/:id
URL: `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`

+ People images - path: /person/{person_id}/images 
URL: `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`

+ Movie Recommendations  - path: /movie/{movie_id}/recommendations 
URL:  `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}`

+ Similar movies - path: /similar/:id
URL: `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`

## Routing.

+ /movie/now_playing - NowPlayingMoviesPage.js - Displays view of the movies that are now playing.

+ /movie/top_rated - TopRatedMoviesPage.js - Displays view of the top rated movies.

+ /similar/:id - similarMoviesPage.js - Displays view of similar movies to the movie that you click on.

+ /person/:id - moviePersonPage.js - Displays view of people details for the cast member you click on in the movie details page.

## Independent learning 

### New Material UI components

I researched a bit more into the use of the imageList API via [MUI](https://mui.com). While researching how to use imageList, I found another component API called <ImageListItemBar> which allowed me to add a caption under the Imagelists which I used to display the casts names & roles and to display the movie recommendation & similar movie names.

### Pagination

I wanted to add pagination to my app, to help with this I found a few websites and youtube videos that I followed instructions from and put them together to create successful pagination that you can see in all the movie list views. The most significant website and video that helped me are linked below.

+ I installed 'npm i react-paginate' which is a ReactJS component, I got this command from this website: (https://www.npmjs.com/package/react-paginate) 

+ I was advised to install the above ReactJS component from this youtube video: (https://youtu.be/HANSMtDy508) I followed most of this youtube tutorial and made the relevant changes to get it to work within in this app. 




