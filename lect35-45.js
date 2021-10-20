// 35
// function max(a,b){
//     if(a>b)
//     return a;
//     return b;
// }
// console.log(max(3,4));

// function max(a,b){
//     return(a>b)?a:b;
// }
// console.log(max(3,4));

//36
// function isLandscape(width,height){
//     return(width>height);
// }
// console.log(isLandscape(180,100));

//37
// function fizzbuzz(number){
//     if(typeof number !=='number'){
//         console.log('Not a Number');
//     }
//     else if(number %3 ===0 && number %5===0)
//     {
//         console.log('FizzBuzz');
//     }
//     else if(number %3=== 0){
//         console.log('Fizz');
//     }
//    else if(number % 5=== 0){
//         console.log('Buzz');
//     }
//     else{
//         console.log(number);
//     }
// }
// fizzbuzz('7');

//38
// function checkspeed(speed){
//     const limit=70;
//     const km=5;
//     if(speed<limit){
//         console.log('ok');
//     }
//     else{
//         let points=((speed-limit)/km);
//         if(points>=12){
//             console.log('licence suspended');
//         }
//         else{
//             console.log(points,'points');
//         }
//     }
// }
// checkspeed(100);

//39
// function evenodd(){
// for(i=0;i<=10;i++){
//     if(i%2==0){
//         console.log(i,'even');
//     }
//     else{
//         console.log(i,'odd');
//     }
// }}
// evenodd();

//40
// const arrar=[0,null,undefined,'',2,3];
// console.log(counttruthly(arrar));
// function counttruthly(arrar){
//     let count=0;
//     for(let value of arrar)
//         if(value){
//             count++;
//             return count;   
//         }
// }

//41
// const movie={name:'a',year:2010,rating:4,director:'b'};
// property(movie);
// function property(obj){
//     for(let key in obj)
//         if (typeof obj[key] === 'string')
//         console.log(key, obj[key]);
// }

//42
// function sum(limit)
// {
//     let sum=0;
//     for(i=0;i<=limit;i++){
//     if(i%3===0 ||i%5===0)
//     {
//         sum +=i;
//     }
// }
// return sum;
// }
// console.log(sum(5));

//43
// const array=[80,30,50];
// console.log(grade(array));

// function grade(array){
// let sum=0;
// for(let value of array)
//     sum+=array;
// let average=sum/array.length;

// if(average<59) return 'f';
// if(average<69) return 'd';
// if(average<79) return 'c';
// if(average<89) return 'b';
// return 'a';
// }

//44
// function pat(row){
//     let pattern = "";
//     for(let i=1;i<=row;i++){
//        for(let j=0;j<i;j++){
//            pattern+='*';
//        }
//        pattern+= "\n";
//     }
//     console.log(pattern);
// }
// console.log(pat(5));

//45
// showprime(20);
// function showprime(limit){
//     for(let i=2;i<=limit;i++){
//         isprime=true;
//         for(let j=2;j<i;j++){
//             if(i%j===0){
//                 isprime=false;
//                 break;
//             }
//         }
//         if(isprime)
//         console.log(i);
//     }
// }