
function prime(number){
    var number = 11;
   for(var i=2;i<number;i++)
   {
      if(number % i == 0)
      {
          return `${number} is not a prime number`;
      }
      else{
          return `${number} is a prime number`;
      }
   }
};
console.log(prime());