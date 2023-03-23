// Q4 :
// function getAvg(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum/arr.length;
// }


// Q5 :
//Using For
// function getPow(arr){
//     let pArray = [];
//     for(let i = 0; i < arr.length; i++){
//         pArray.push(Math.pow(2, arr[i]));
//     }
// }
// Using ForEach
// function getPow(arr){
//     let pArray = [];
//     arr.forEach(element => {
//         pArray.push(Math.pow(2, element));
//     });
//     return pArray;
// }
// Using Map
// function getPow(arr){
//     let newArr = arr.map((value) =>{
//         return Math.pow(2, value);
//     });
//     return newArr;
// }


// Q6 :
// function getValue(arr){
//     let newArr = arr.map((value)=>{
//         if(isNaN(value)){
//             return "N/A";
//           }else if(value%2==0){
//             return "even";
//           }else{
//             return "odd";
//         }
//     });
//     return newArr;
// }


// Q7 :
// function fizzbuzz(arr){
//     let newArr = arr.map((value) => {
//         if(value%3==0 && value%5==0){
//             return "fizzbuzz";
//         }
//         else if(value%3==0){
//             return "fizz";
//         }
//         else if(value%5==0){
//             return "buzz";
//         }
//         else{
//             return value;
//         }
//     });
//     return newArr;
// }