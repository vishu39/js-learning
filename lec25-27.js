//lecture 25 swap 2 values
let a=10;
let b=20;
let c=a;
a=b;
b=c;
console.log(a);
console.log(b);

// if else   lecture 26
let hour=10;
if(hour>=6 && hour<12){
    console.log('Good Morning');
}
else if(hour>=12 && hour<18){
    console.log('Good Afternoon');
}
else{
    console.log("Good Evening");
}

//Switch lecture 27
let role='guest';
switch(role){
    case'guest':
    console.log("Guest User");
    break;
    case'Moderator':
    console.log("Moderator User");
    break;
    default:
        console.log("Unknown user");
    }