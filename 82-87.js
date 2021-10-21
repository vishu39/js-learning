//82
// const number=arrayFromRange(1,4)
// console.log(number);
// function arrayFromRange(min,max){
//     let output=[];
//     for(let i=min;i<=max;i++)
// output.push(i);
// return output;
// }

//83

// const number=[1,2,3,4];
// console.log(includes(number,1));
// function includes(array,searchelement){
//     for(let element of array)
//     if(element === searchelement)
//     return true;
//     return false;
// }

//84
// const numbers=[1,2,3,4,1,5];
// const output=expect(numbers,[1,2]);
// console.log(output);
// function expect(array,num){
//     const output=[];
//     for (let element of array)
//     if(!num.includes(element))
//     output.push(element);
//     return output;
// }

//85
// const n=[1,2,3,4];
// const output=move(n,0,2);
// console.log(output);
// function move(array,index,offset){
//     let position=index+offset;
//     if(position===array.length||position<0){
//     console.error('Invalid offset');
//     return;
// }
// const output=[...array];
// const element=output.splice(index,1)[0];
// output.splice(position,0,element);
// return output;
// }

//86
// const n=[1,2,3,4,1];
// let output=counts(n,1);
// console.log(output);
// function counts(array,se){
//     let count=0;
//     for(let element of array)
//     if(element===se)
//     count++
//     return count;
// }

//87
const number=[1,2,3,4,5];
const max=getmax(number);
console.log(max);
function getmax(array){
    if(array.length===0)
    return undefined;
    let max=array[0];
    for(let i=1;i<=array.length;i++)
    if(array[i]>max)
    max=array[i];
    return max;
}