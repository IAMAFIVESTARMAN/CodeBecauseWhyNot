Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)





function persistence(num) {
   //code me
    console.log(num)
let n=num
let rem,rev=1;
  let count=0

  
  while(Math.floor(n/10)!==0)
                {
    
                        while(n!==0)
                               {
                                     console.log(`value of n : ${n}`)
                                     
                                       rem=n%10
                                      rev=rev*rem
                                       n=Math.floor(n/10)
                                       
                                }
                                        count++
                                        n=rev;
                                        rev=1
                                        
                   }

 return count
  }