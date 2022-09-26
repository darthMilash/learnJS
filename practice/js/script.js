'use strict';


let  numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посомтрели', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms < 0) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посомтрели', '');
    }
}

// start();
      

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
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
}


// rememberMyFilms();

function detectPersonalLevel() {
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
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personaMovieDB);
    }
}

showMyDB(personaMovieDB.privat);

function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {
        personaMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
        
    }
}

writeYourGenres();




