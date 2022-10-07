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




const personalMovieBD = {
    count: 0,
    movies: {},
    actoros: {},
    genres: [],
    privat: false,
    start: ()=>{
      personalMovieBD.count = +prompt('Сколько фильмов вы уже посмотрели',' ');
        while (personalMovieBD.count == '' || personalMovieBD.count== null || isNaN(personalMovieBD.count)){
          personalMovieBD.count = +prompt('Сколько фильмов вы уже посмотрели',' ');
        }
     },
     rememberMyFilms: ()=>{
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
    },
    detectPersonalLevel: ()=>{
      if (personalMovieBD.count<10){
         console.log('Вы посмотрели мало фильмов')
       }  else if (personalMovieBD.count >=10 && personalMovieBD.count <30){
        console.log('Вы классический зритель')
       }  else if (personalMovieBD.count>=30){
        console.log('Вы киноман')
       }  else {
        console.log('Произошла ошибка')
       }    
     },
     showMyDB: (hiden)=>{
      if (!hiden){
       console.log(personalMovieBD)
      }
    },
    toggleVisibleMyDB : function (){
       if (personalMovieBD.privat){
        personalMovieBD.privat=false
       } else{
        personalMovieBD.privat=true
       }
    },
    writeYourGeneris: ()=>{
      for (let i=1; i<=3; i++){

        let gener =prompt(`Ваш любимый жанр ${i}`);

        if (gener == '' || gener == null){
          console.log ('Вы ввели некоректные данные или не ввели их вовсе')
          i--;
        } else {
          personalMovieBD.genres[i-1] = gener;
        }
     
      }
      personalMovieBD.genres.forEach((item, i)=> {
        console.log(`Мой любимый жанр ${i+1} - это ${item}`);
      });
   }
};
