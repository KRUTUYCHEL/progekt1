//alert ('Hello')
//const result = confirm("Are you here")
//console.log (result)
//const answer = prompt ("you are 18","18")
//console.log (typeof(answer))

//const answers = []

/*answers[0] = prompt('Как ваше имя', '')
answers[1] = prompt('Какая у вас фамилия', '')
answers[2] = prompt('Сколько вам лет', '')

document.write(answers)*/


let  numberFilms 

function start(){
 numberFilms = +prompt('Сколько фильмов вы уже посмотрели',' ');
   while (numberFilms == '' || numberFilms== null || isNaN(numberFilms)){
   numberFilms = +prompt('Сколько фильмов вы уже посмотрели',' ');
   }
}

start();

const personalMovieBD = {
    count: numberFilms,
    movies: {},
    actoros: {},
    genres: [],
    privat: false

};


//const a = prompt('Один из последних просмотренных фильмов', ' '),
      //b = prompt('На сколько его оцените', ' '),
      //c = prompt('Один из последних просмотренных фильмов', ' '),
     // d = prompt('На сколько его оцените', ' '); 

      //pesonalMovieBD.movies[a] = b;
     // pesonalMovieBD.movies[c] = d

     // console.log (pesonalMovieBD)


function rememberMyFilms(){
  for (i = 0; i<2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', ' '),
          b = prompt('На сколько его оцените', ' ');

     if (a!=null && b!=null && a !='' && b!='' && a.length <50){
      console.log('done')
      personalMovieBD.movies[a] = b;
    } else {
        console.log ('error')
         i--;
    }
  }
} 
  //rememberMyFilms();

 function detectPersonalLevel(){
 if (personalMovieBD.count<10){
    console.log('Вы посмотрели мало фильмов')
  }  else if (personalMovieBD.count >=10 && personalMovieBD.count <30){
   console.log('Вы классический зритель')
  }  else if (personalMovieBD.count>=30){
   console.log('Вы киноман')
  }  else {
   console.log('Произошла ошибка')
  }    
}              
     // detectPersonalLevel();
     function showMyDB(hiden){
      if (!hiden){
       console.log(personalMovieBD)
      }
    }
    showMyDB(personalMovieBD.privat);


function writeYourGeneris (){
   for (let i=1; i<=3; i++){
  const a = prompt(`Ваш любимый жанр ${i}`)
  personalMovieBD.genres[i-1] = a;
   }
}
writeYourGeneris();