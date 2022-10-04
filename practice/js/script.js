'use strict';



// start();
      

const personaMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
      personaMovieDB.count = +prompt('Сколько фильмов вы уже посомтрели', '');
      while (personaMovieDB.count == '' || personaMovieDB.count == null || isNaN(personaMovieDB.count) || personaMovieDB.count < 0) {
        personaMovieDB.count = +prompt('Сколько фильмов вы уже посомтрели', '');
      }
    },
    rememberMyFilms: function() {
      for (let i = 0; i < personaMovieDB.count; i++) {
        const a = prompt('Один из последних просмотренных фильмов', '').trim(),
          b = prompt('На сколько оцегните его', '');
          if (a != null && b !=null && a.length <= 50 && a != '' && b != '') {
            personaMovieDB.movies[a] = b;
          }
          else {
            i--;
          }   
      }
    },
    detectPersonalLevel: function() {
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
    },
    showMyDB: function(hidden) {
      if (!hidden) {
        console.log(personaMovieDB);
      }
    },
    writeYourGenres: function() {
      for (let i = 0; i < 1; i++) {
        // let genre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');  
        //   if (genre === '' || genre == null) {
        //     console.log('Вы ввели некорректные денные или не ввели их)');
        //       i--;
        //   } else {
        //     personaMovieDB.genres[i] = genre;
        //   }

        let genres = prompt(`Введите ваши любимые жанры через запятую`);
          if (genres === '' || genres == null) {
            console.log('Вы ввели некорректные денные или не ввели их)');
              i--;
          } else {
            personaMovieDB.genres = genres.split(', ');
            personaMovieDB.genres.sort();
          }
      }
      personaMovieDB.genres.forEach(function (item, i) {
        console.log(`Любимый жанр #${i+1} - это  ${item}`);
      });
    },
    toggleVisibleMyDb: function() {
      if (personaMovieDB.privat === false) {
        personaMovieDB.privat = true;
      }
      else {
        personaMovieDB.privat = false;
      }
    }
};




