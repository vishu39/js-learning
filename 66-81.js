//67
// const number=[3,4];
// //end
// number.push(5,6);
// console.log(number);
// //starting
// number.unshift(1,2);
// console.log(number);
// //middle
// number.splice(2,0,'a','b');
// console.log(number);

//68 finding element primitive type
// const number=[1,2,3,1,4];
// console.log(number.indexOf(1));
// console.log(number.lastIndexOf(1));
// console.log(number.indexOf(1)!==-1);
// console.log(number.includes(1));// shorter form of upper one

//69 finding element reference type
// const courses=[
//     {id:1,name:'a'},
//     {id:2,name:'b'}
// ];
// const course=courses.find(function(course){
//     return course.name==='a'
// });
// console.log(course);              //we can use fat arrow function also

// this method will find the index of the object array

// const course1=courses.findIndex(function(course1){
//     return course1.name==='a'
// });
// console.log(course1);  

// 70 this win make the function easier and cleaner

// const courses=[
//     {id:1,name:'a'},
//     {id:2,name:'b'}
// ];
// const course=courses.find(course=> course.name==='a');
// console.log(course);

//71 remove element from array
// const number=[1,2,3,4,5];
// //end
// const last=number.pop();
// console.log(number);
// console.log(last);
// //starting
// const first=number.shift();
// console.log(number);
// console.log(first);
// //middle
// const middle=number.splice(2,1);
// console.log(number);
// console.log(middle);

//72  emptying an array
// let number=[1,2,3,4];
// //solution 1
// number=[];
// //solution2
// number.length=0;
// //solution3 
// number.splice(0,number.length);
// //solution 4
// while(number.length>0){
//     console.log(number.pop());
// }

//73 combining an array

// let a1=[1,2,3];
// let a2=[3,4,5];

// const combined=a1.concat(a2);

// const slice=combined.slice(2,4);  // give enelent b/w 2 nad 4
// const slice=combined.slice(2);  // give element after 2nd position
// const slice=combined.slice(;    // giv full array

//     console.log(slice);

//74 spread operators
// const first=[1,2,3];
// const second=[4,5,6];

// const combined=[...first,...second];
// const copy=[...combined];
// console.log(combined);
// console.log(copy);

//75  itrating an array
// const numbers=[1,2,3,4]
// for(let number of numbers)
// console.log(number);
// numbers.forEach(number=>console.log(number));

//76 joining an array
// const numbers=[1,2,3,4]
// const joined=numbers.join(',')
// console.log(joined);

// const message='This is my first message'
// const parts=message.split(' ');
// console.log(parts);
// const combined=parts.join('-');
// console.log(combined);

//77 sorting an array
// const array=[2,1,3];
// array.sort();
// console.log(array);

// array.reverse();
// console.log(array);

//78 thest the element of array
//every()
// const number=[1,2,3,4];
// const num=[1,2,3,-1,4];

// const allPositive=number.every(value=> value>=0);
// console.log(allPositive);
// //for -ve value
// const allPositive1=num.every(value=>value>=0);
// console.log(allPositive1);
// //some() it will show true if only one value is positive in an array
// const atLeastOne=num.some(value=> value>=0);
// console.log(atLeastOne);

//79filter

// const n=[10,15,18,20,25];
// const flt=n.filter(n=> n>=18);
// console.log(flt);

//80 map
// const n=[1,-1,2,3];
// const filtered=n.filter(n=> n>0);
// const items=filtered.map(n=>'<li>'+n+'</li>');
// const html='<ul>'+items.join()+'</ul>'
// console.log(html);

//81 redusing an element
