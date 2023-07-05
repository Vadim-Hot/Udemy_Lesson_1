const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,

  start() {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");
    }
  },

  questionFilm() {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", "").trim();
      b = prompt("На сколько цените его?", "");

      if (a != "" && b != "" && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },

  whoYouBe() {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  
  showMyDb(hidden) {
    //  проверяем personalMovieDB.private на true false
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  
  toggleVisibleMeDB() {
    if (personalMovieDB.private) {
      personalMovieDB.private = true;
    } else {personalMovieDB.private = false}    
    
  },

  writeYourGenres() {
    for (let i = 1; i < 2; i++) {
      let gente = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();
      
      if (gente === null || gente === "") {
        console.log("Вы ввели не верные данные или вообще не ввели")
        i--;
      } else {
        personalMovieDB.genres = gente.split(', ');
        personalMovieDB.genres.sort()

      }
      personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} это ${item}`);
      });
      //const gente = prompt(`Ваш любимый жанр под номером ${i}`, "")
      //personalMovieDB.genres[i - 1] = gente;
    }
  },
};







