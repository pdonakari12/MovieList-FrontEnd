import { actorMovieDTO } from "../actors/actor.model";
import { genreDTO } from "../genres/genre.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";

export interface movieDTO {
    id:number;
    title:string;
    poster:string;
    inTheater:boolean;
    trailer:string;
    summary?:string;
    releaseDate:Date;   
    genres:genreDTO[];
    movieTheaters:movieTheaterDTO[];
    actors:actorMovieDTO[];
    uservote:number;
    averageVote:number;

}

export interface movieCreationDTO{
    title:string;
    inTheater:boolean;
    trailer:string;
    summary?:string;
    releaseDate?:Date;
    poster?:File;
    posterURL?:string;
    genresIds?:number[];
    movieTheatersIds?:number[];
    actors?:actorMovieDTO[];
}
export interface landingPageDTO {
    inTheaters?: movieDTO[];
    upcomingReleases?:movieDTO[];
}


export interface moviesPostGetDTO{
    genres:genreDTO[];
    moviesTheaters:movieTheaterDTO[];
}

export interface moviePutGetDTO{
    movie:movieDTO;
    selectedGenres:genreDTO[];
    nonSelectedGenres:genreDTO[];
    selectedMoviTheaters:movieTheaterDTO[];
    nonSelectedMOvieTheaters:movieTheaterDTO[];
    actors:actorMovieDTO[];
}

