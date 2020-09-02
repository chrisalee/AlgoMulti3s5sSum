// Multiples of 3 & 5, sum
// Playing with digits
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
  var sum = 0;
  console.log('***********************');
  for (var i = 1; i < number; i++){
    if( i % 5 == 0 ) {
      console.log(i);
      sum = sum + i;
//       console.log("sum=", sum);
    }
    else{
      if( i % 3 == 0) {
        console.log(i)
        sum = sum + i;
//         console.log("sum=", sum);
      }
      else{
        continue;
      }
    } 
  }
  console.log('sum = ', sum);
  return sum;
}

solution(10);
solution(11);

// optimal solution
// function solution(number){
//   var sum = 0;
  
//   for(var i = 1; i< number;  i++){
//     if(i % 3 == 0 || i % 5 == 0){
//       sum += i
//     }
//   }
//   return sum;
// }