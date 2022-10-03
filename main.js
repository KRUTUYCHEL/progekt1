//alert ('Hello')
//const result = confirm("Are you here")
//console.log (result)
//const answer = prompt ("you are 18","18")
//console.log (typeof(answer))

const answers = []

answers[0] = prompt('Как ваше имя', '')
answers[1] = prompt('Какая у вас фамилия', '')
answers[2] = prompt('Сколько вам лет', '')

document.write(answers)

const  numberFilms = prompt('Сколько фильмов вы уже посмотрели',' ');

const pesonalMovieBD = {
    count: numberFilms,
    movies: {},
    actoros: {},
    genres: [],
    privat: false

};
const a = prompt('Один из последних просмотренных фильмов', ' '),
      b = prompt('На сколько его оцените', ' '),
      c = prompt('Один из последних просмотренных фильмов', ' '),
      d = prompt('На сколько его оцените', ' '); 

      pesonalMovieBD.movies[a] = b;
      pesonalMovieBD.movies[c] = d

      console.log (pesonalMovieBD)