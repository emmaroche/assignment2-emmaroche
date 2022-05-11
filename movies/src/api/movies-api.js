
//Routes included in the react app only

export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

export const getMovie = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

  export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  

  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  export const getPersonImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

//Routes included in both the react app and web API folder

export const login = (username, password) => {
  return fetch('/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const signup = (username, password) => {
  return fetch('/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const getUpcomingMovie = () => {
  return fetch(
     '/api/movies/tmdb/upcoming', {
          headers: {
              'Authorization': window.localStorage.getItem('token')
          }
      }
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getNowPlayingMovies = () => {
  return fetch(
     '/api/movies/tmdb/now_playing', {
          headers: {
              'Authorization': window.localStorage.getItem('token')
          }
      }
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getTopMovie = () => {
  return fetch(
     '/api/movies/tmdb/top_rated', {
          headers: {
              'Authorization': window.localStorage.getItem('token')
          }
      }
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getSimilarMovie = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/${id}/similar`, {
         headers: {
             'Authorization': window.localStorage.getItem('token')
         }
     })
 .then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};

export const getRecomMovie = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/${id}/recommendations`, {
         headers: {
             'Authorization': window.localStorage.getItem('token')
         }
     })
 .then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};

export const getCastMovie = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/${id}/credits`, {
         headers: {
             'Authorization': window.localStorage.getItem('token')
         }
     }
 ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};

export const getPersonMovie = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/${id}/person`, {
         headers: {
             'Authorization': window.localStorage.getItem('token')
         }
     }
 ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};


