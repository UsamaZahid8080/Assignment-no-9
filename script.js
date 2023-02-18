//1st Problem:
var myVar = 5;
console.log(myVar);

//2nd Problem:
var myString="Hello World!";
alert(myString);

//3rd Problem:
var num1=5;
var num2=10;
var userNum= parseFloat(prompt('Enter Your Number'));
var sum = num1+num2+userNum;
console.log(sum);

//4th Problem:
var a = false;
if (a==true){
    console.log('Its true')
}else{
    console.log('Its not true');
}

//5th Problem:
var number=6;
var remainder = (number%2);
if (remainder==0){
    console.log(number + "is even");
}else{
    console.log(number + 'is odd')
}

//6th Problem:
var a ='Umair';
var b = 'Azmat';
var c = a+b;
console.log(c);

//7th Problem:
var a =5;
var b =5;
var c = a*b;
console.log(c);

//8th Problem:
var a =prompt('Enter Name');
var password= 'usama';
if (password==a){
   alert('Access granted') 
}else{
    alert('Access denied')
}

//9th Problem:
var n1 = prompt('Enter your 1st number');
var n2 = prompt('Enter your 2nd number');
var n3 = prompt('Enter your 3rd number');
if(n1>=n2 && n1>=n3){
   alert('n1 is Largest number');
}
else if(n2>=n1 && n2>=n3){
    alert('n2 is the largest number');
}else{
    alert('n3 is the largest number')
}
//10th Problem:
var a = prompt('Enter String');
var b = prompt('Enter String');
if (a==b){
    alert('The string are equal,');
}else{
    alert('The string are not equal.');
}

