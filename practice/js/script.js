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

// const questionAboutLastFilm = prompt('Один из последних просмотренных фильмов', ''),
//       questionAboutFilmTotal = prompt('На сколько оцегните его', ''),
//       questionSecondAboutLastFilm = prompt('Один из последних просмотренных фильмов', ''),
//       questionSecondAboutFilmTotal = prompt('На сколько оцегните его', '');

// personaMovieDB.movies[questionAboutLastFilm] = questionAboutFilmTotal;
// personaMovieDB.movies[questionSecondAboutLastFilm] = questionSecondAboutFilmTotal;


for (let i = 0; i < numberOfFilms; i++) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('На сколько оцегните его', '');

      if (a != null && b !=null && a.length <= 50 && a != '' && b != '') {
        personaMovieDB.movies[a] = b;
      }
      else {
        i--;
      }   
}

  if (personaMovieDB.count < 10) {
    console.log("malo filmov");
  }
  else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
    console.log("classic");
  }
  else if (personaMovieDB.count > 30) {
    console.log("kinoman")
  }
  else console.log("error");


    console.log(personaMovieDB);