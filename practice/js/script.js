'use strict';

//part1

const numberOfFilms = +prompt('Сколько фильмов вы уже посомтрели', '');
      

      const personaMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

const questionAboutLastFilm = prompt('Один из последних просмотренных фильмов', ''),
      questionAboutFilmTotal = prompt('На сколько оцегните его', ''),
      questionSecondAboutLastFilm = prompt('Один из последних просмотренных фильмов', ''),
      questionSecondAboutFilmTotal = prompt('На сколько оцегните его', '');

personaMovieDB.movies[questionAboutLastFilm] = questionAboutFilmTotal;
personaMovieDB.movies[questionSecondAboutLastFilm] = questionSecondAboutFilmTotal;


    console.log(personaMovieDB);