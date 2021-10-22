// const movies=[
//     {title:'a',rating:4.5,year:2018},
//     {title:'b',rating:4.5,year:2018},
//     {title:'c',rating:3,year:2018},
//     {title:'d',rating:4.0,year:2017},
// ];
// const title=movies
// .filter(movies=>movies.year===2018 && movies.rating>=4)
// .sort((a,b)=> a.rating-b.rating)
// .reverse()
// .map(movies=>movies.title)
// console.log(title);

//89
//function declaration
// function walk(){
//     console.log('walk');
// }
// walk();
// //function expression
// const run=function(){
//     console.log('run');
// }
// run();

//92
// function sum(...items){
//     console.log(items);
// }
// console.log(sum(1,2,3,4,5));

//95
// try{
//     const number=[1,2,3,4];
//     const count=countOccurrences(null,1);
//     console.log(count);
// }
// catch(e){
//     console.log(e.message);
// }
// function countOccurrences(array,se){
//     if(!Array.isArray(array))
//     throw new Error('Invalid array');
//     return array.reduce((a,c)=>{
//         const occurrence=(c===se)?1:0
//         return a+occurrence;
//     },0);
// }

