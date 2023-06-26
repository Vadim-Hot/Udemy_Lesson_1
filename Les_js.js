let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

  while (
    numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)
  ) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
  }
}
//start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function questionFilm() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", "").trim();
          b = prompt("На сколько цените его?", "");

    if (a != "" && b != "" && a != null && b != null && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}
//questionFilm();

function whoYouBe() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}
//whoYouBe();

function showMyDb(hidden){  //  проверяем personalMovieDB.private на true false
    if(!hidden){ 
        console.log(personalMovieDB);
    }
}
showMyDb(personalMovieDB.private);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
      //const gente = prompt(`Ваш любимый жанр под номером ${i}`, "")
      //personalMovieDB.genres[i - 1] = gente;
    }
    
}
writeYourGenres()
console.log(personalMovieDB)