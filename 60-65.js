//60
// let address={
//     Street:'a',
//     city:'b',
//     zipcode:'c'
// };
// function showaddress(address){
//     for(let key in address)
//     console.log(key,address[key]);
// }
// showaddress(address);

//61
// factory function
// function fulladdress(street,city,zipcode){
//     return{
//         street,
//         city,
//         zipcode,
//     };
// }
// let address=fulladdress('a','b','c');
// console.log(address);
//constructor function

// function Createaddress(street,city,zipcode)
// {
//         this.street=street;
//         this.city=city;
//         this.zipcode=zipcode;
// }
// let address=new Createaddress('a','b','c');
// console.log(address);

//62

// let address1=new Address('a','b','c');
// let address2=new Address('a','b','c');
// let address3=address1;

// console.log(areEqual(address1,address2));
// console.log(areSame(address1,address2));
// console.log(areSame(address1,address3));
// function Address(street,city,zipcode){
//         this.street=street;
//         this.city=city;
//         this.zipcode=zipcode;}

//         function areEqual(address1,address2){
//             return
//             address1.street===address2.street &&
//              address1.city===address2.city &&
//               address1.zipcode===address2.zipcode
//         }
// function areSame(address1,address2){
//     return address1===address2;
// }

//63
// let post={
//     title:'a',
//     body:'b',
//     author:'c',
//     comments:[{author:'a',body:'b'}
// ,{author:'d',body:'c'}],
// islive:true
// };
// console.log(post);
//64

// let post=new past('a','b','c');
// console.log(post);
// function past(title,body,author){
//     this.title=title;
//     this.body=body;
//     this.author=author;
//     this.view=0;
//     this.comments=[];
//     this.islive=false;
// }

//65
// let priceRange=[{label:'$',tooltip:'cheap',min:0,max:10}
// ,{label:'$$',tooltip:'medium',min:11,max:25},
// {label:'$$$',tooltip:'high',min:25,max:50}];
// let resturant=[
//     {average resturant}
// ];