//100
// console.log(sum(1,2,3,4,5));
// function sum(...items){
//     return items.reduce((a,b)=>a+b);
// }
//101
// let circle={
//     radius:1,
//     getarea(){
//         console.log(Math.PI*this.radius*this.radius);
//     }
// }
// console.log(circle.getarea);

//102
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
