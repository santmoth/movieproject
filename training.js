// let a =10 
// let b = 15;
// const c = a + b;
// console.log('the value is ' + a)

/* 1) Get sharma from whole string
let fullname = 'Narayan  Sharma';

2) reverse the string
let fullname = "narayan Sharma" //>amrahs nayaran

//sharma Narayan

3. let address = " rayandanda 3 ramtola baglung, Nepal"

output > rayandanda 3 ramtola ...

*/
// console.log('interface'.toUpperCase());

// const name = 'narayan sharma';
// const lastname = name.substring(8, 14);

// console.log(name.split('').reverse().join('')) 

// let address = 'rayandanda 3 ramtola baglung, Nepal';
// let count = 20

// function truncate(address,count){
// return address.substring(0,count) +'...';
// }
// console.log((truncate(address,20))

// let address = " rayandanda 3 ramtola baglung, Nepal"
// let count = 20;

// function truncate(address, count){
//     return address.slice(0, count) + (address.length > count ? "..." : "")
// }

// console.log(truncate(" rayandanda 3 ramtola baglung, Nepal", 20));

// let str = "As sly as a fox, as strong as an ox";
// let target = "as";

// //alert(str.indexOf(target, 0))//? ?

// let pos = -1;
// //alert(str.indexOf(target, pos + 1))

// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   alert( pos );//7, 17, 27
// }

/*
for extracting movie properties from the movie object;
*/
const movieMaker = (mov) => {
  return `${mov.title}movies in the year ${mov.Year}`;
}
/*
For dropdown selection 
*/
const movieGeneres = (movies) => {
  let makeGeneresList = [];
  movies.forEach((movies, index) => {
    const movieGeneres = movies.Genres;
    makeGeneresList = [...makeGeneresList, ...movieGeneres]
  });
  console.log('genre withDuplicate', makeGeneresList)
  makeGeneresList = new Set(makeGeneresList);
  console.log('without duplicate', makeGeneresList);
  OptionGeneresList = [...makeGeneresList];
  select = document.getElementById('generes');

  for (let generes of OptionGeneresList) {
    select.add(new Option(generes));
  }
}

/*
List of array of movies with property
*/

let movieLists = [
  {
    title: 'Gulabo Sitabo',
    Year: 2020,
    IMDBrating: 6.5,
    Genres: ['International', 'Drama'],
    BoxOffice: 10000000000,
    EarningCurrency: '$'
  },
  {
    title: 'Tumbbad',
    Year: 2018,
    IMDBrating: 8.3,
    Genres: ['Horror', 'International', 'Suspense'],
    BoxOffice: 2000000000,
    EarningCurrency: '$'
  },
  {
    title: 'David',
    Year: 2013,
    IMDBrating: 5,
    Genres: ['Drama', 'Action'],
    BoxOffice: 1000000000,
    EarningCurrency: '$'
  },
  {
    title: 'K.G.F',
    Year: 2018,
    IMDBrating: 8.2,
    Genres: ['Action', 'International'],
    BoxOffice: 100000000,
    EarningCurrency: '$'
  },
  {
    title: 'Penguin',
    Year: 2020,
    IMDBrating: 4.7,
    Genres: ['Drama', 'Suspense'],
    BoxOffice: 10000000,
    EarningCurrency: '$'
  },
  {
    title: 'Blackmail',
    Year: 2018,
    IMDBrating: 7.1,
    Genres: ['Comedy', 'International'],
    BoxOffice: 1000000000,
    EarningCurrency: '$'
  },
  {
    title: 'Shubh Mangal Zyada Saavdhan',
    Year: 2020,
    IMDBrating: 5.8,
    Genres: ['Comedy'],
    BoxOffice: 20000000000,
    EarningCurrency: '$'
  },
  {
    title: 'Into The Wild',
    Year: 2007,
    IMDBrating: 8.1,
    Genres: ['Action', 'Drama'],
    BoxOffice: 1500000000,
    EarningCurrency: '$'

  },
  {
    title: 'Interstellar',
    Year: 2014,
    IMDBrating: 8.6,
    Genres: ['Action', 'Science Fiction'],
    BoxOffice: 1000000000,
    EarningCurrency: '$'
  },
  {
    title: 'San Andreas',
    Year: 2015,
    IMDBrating: 6.0,
    Genres: ['Action'],
    BoxOffice: 2000000000,
    EarningCurrency: '$'
  },
]

/* 
function to filter the  title and year
*/
const commonMovie = (movies) => {
  const formattedMovies = movies.map(mov => movieMaker(mov));
  formattedMovies.sort();
  console.log('aftersort', formattedMovies);
  return formattedMovies.join("<br>");
}


const finalGeneres = movieGeneres(movieLists);
const finalMovie = commonMovie(movieLists);
document.getElementById("movieDisplay").innerHTML = `Movie Title List :<br>${finalMovie}<br> Movies Average collection`


const getInputValue = () => {
  let inputVal = document.getElementById("moviego").value;
  console.log(inputVal);
  let comboVal = document.getElementById("generes").value;
  let boxOfficeVal = document.getElementById("boxoffice").value;

  let movieValidate = validate(inputVal);
  if (movieValidate) {
    let filterMovieList = movieLists.filter(movi => (movi.Year == inputVal && movi.Genres.includes(comboVal) && boxOfficeVal))
    const finalStringMovies = commonMovie(filterMovieList);
    let average = filterMovieList.reduce((accumlator, next) => { return accumlator + next.BoxOffice }, 0) / filterMovieList.length;
    console.log(average);
    document.getElementById("selmovieDisplay").innerHTML = `Movie Titles:<br>${finalStringMovies}<br>
    Movies Average collection :${average}`;
  }
}


function validate(inputVal) {
  const today = Number(new Date().getFullYear());
  inputVal = Number(inputVal)
  if (inputVal === 0) {
    document.getElementById("messagediv").innerHTML = `please Enter the Years `;
    return false;
  } else if (isNaN(inputVal)) {
    document.getElementById("messagediv").innerHTML = `please Enter the Numeric Year`;
    return false;
  } else if (inputVal.toString().length !== 4) {
    document.getElementById("messagediv").innerHTML = `please enter the four digit year `;
    return false;
  } else if (inputVal > today) {
    document.getElementById("messagediv").innerHTML = `please enter the year before ${today} `;
    return false;
  }
  document.getElementById("messagediv").innerHTML = ` `;
  return true;

}



// let user = ['narayan', 'sharma', 'rayadanda 3 ramtola', ]
// const [a, b, c, d , e, f] = ['santosh', 'sharma', ...user]
// //


