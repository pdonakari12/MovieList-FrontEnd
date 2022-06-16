const baseURL=process.env.REACT_APP_API_URL;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

// export const urlGenres="https://localhost:44328/api/genres";
// export const urlActors="https://localhost:44328/api/actors";
// export const urlMovieTheaters="https://localhost:44328/api/movietheaters";
// export const urlMovies="https://localhost:44328/api/movies";
// export const urlAccounts="https://localhost:44328/api/accounts";
// export const urlRatings="https://localhost:44328/api/ratings";


export const urlGenres=`${baseURL}/genres`;
export const urlActors=`${baseURL}/actors`;
export const urlMovieTheaters=`${baseURL}/movietheaters`;
export const urlMovies=`${baseURL}/movies`;
export const urlAccounts=`${baseURL}/accounts`;
export const urlRatings=`${baseURL}/ratings`;