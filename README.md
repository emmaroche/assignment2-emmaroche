# Assignment 2 - Web API.

Name: Emma Roche (20088680)

## Features.

 + Added new views for login and sign up authentication 

 + Added protected routes onto every page expect the main home page so you will have to sign up/login to access these routes.

 + Added two new API routes, including a parameterised URL for Latest movies that have been put out and Movie release dates for different countries.

 + Added React App integration where the React app makes a request to the Web API which would then request data from TMDB.

 + Mongo integration

 + Use of express middleware such as error handling in the web-api index.js and api/movies/index.js

## API Configuration

First, I had to install mongoose using npm install -save mongoose. Then I had to create an .env file that included information such as connecting the web api to Mongodb and loading the user data to Mongodb using seedDB and extra infomration included in the example below:
______________________

REACT_APP_TMDB_KEY=MyKey
NODEENV=development
PORT=8080
HOST=local host
mongoDB=MyMongoURL - this connects to MongoDB
seedDb=true - This loads User Data to MongoDB
secret=YourJWTSecret
______________________

## API Design

- /api/movies | GET | Gets a list of movies 

- /api/movies/{movieid} | GET | Gets a single movie

- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 

- /api/users | POST | Login

- /api/users?action=register | POST | Sign up

- /api/movies/tmdb/upcoming | GET | Gets a list of upcoming movies

- /api/movies/tmdb/now_playing| GET | Gets a list of now playing movies

- /api/movies/tmdb/top_rated | GET | Gets a list of top rated movies

- /api/movies/${id}/similar | GET | Gets a list of similar movies to the movie you clicked on

- /api/movies/${id}/recommendations | GET | Gets a list of reccommended movies to the movie you clicked on

- /api/movies/${id}/credits | GET | Gets a list of cast members involed in the movie you clicked on

- /api/movies/${id}/person | GET | Gets information of the cast member you click on 

## Security and Authentication

Any user can access the home screen to get a feel of the app however they must autheticate themselves by signing up or logging in in order to access the rest of the pages which are listed below in the protected route list. There are user sessions in the web-api folder that include Mongoose methods to create a simple authentication middleware function for the login and signup. There is validation on the passwords during sign up to make sure that passwords entered are at least 5 characters long and contain at least one number and one letter.

Protected routes include:

- /reviews/:id | Reviews page

- /movies/favorites | Favourites page

- /movies/upcoming | Upcoming page

- /movie/now_playing | Now Playing Page

- /movie/top_rated | Top rated page

- /movies/:id | Movie details page

- /similar/:id | Similar movies page

- /person/:id | Person details page
      
## Integrating with React App

First, to have the React development server proxy the API requests to the Express API server, I added "proxy":"http://localhost:8080" before the final closing brace in the package.json file of my react app.

I added further React App integration by combining the react app and api together, where the React app makes a request to the Web API which would then request data from TMDB.

Views used in Web API instead of the TMDB API:

- Reviews page: /:id/reviews

- Upcoming page: /tmdb/upcoming

- Now Playing Page: /tmdb/now_playing

- Top rated page: /tmdb/top_rated

- Similar movies page: /:id/similar

- Cast details: /:id/credits

- Recommedned movies: /:id/recommendations

- Person details page: /:id/person

- Genres: /tmdb/genres
