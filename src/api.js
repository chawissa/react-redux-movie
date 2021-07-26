//Base URL
const base_url = "https://api.themoviedb.org/3/movie/";

// Movies
const movies = `{movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

// Getting the date
// const getCurrentMonth = () => {
//   const month = new Date().getMonth() + 1;
//   if (month < 10) {
//     return `0${month}`;
//   } else {
//     return month;
//   }
// };

// const getCurrentDay = () => {
//   const day = new Date().getDate();
//   if (day < 10) {
//     return `0${day}`;
//   } else {
//     return day;
//   }
// };

// Current day/month/year
// const currentYear = new Date().getFullYear();
// const currentMonth = getCurrentMonth();
// const currentDay = getCurrentDay();
// const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
// const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular movies
const popular_movies = `popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&region=US&page=1`;
const nowShowing_movies = `now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&region=US&page=1`;
const upcoming_movies = `upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&region=US&page=1`;

export const popularMoviesURL = () => `${base_url}${popular_movies}`;
export const nowShowingMoviesURL = () => `${base_url}${nowShowing_movies}`;
export const upcomingMoviesURL = () => `${base_url}${upcoming_movies}`;

// MOVIE DETAILS
export const movieDetailsURL = (movie_id) =>
  `${base_url}${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
