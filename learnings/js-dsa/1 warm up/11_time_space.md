Time complexity- measure the efficiency of algo in terms of speed as the input size increase
speed & efficiency

BigO Notation - represents worstcase time complexity

O(1)>O(logn)>O(n)>O(nlogn)>O(n^2)>O(2^n)>O(n!)

improvement always towards the left

Space complexity
how much extra space we are using

                  time       space
access element -  O(1)        O(1)     
max element -     O(n)        O(1)     
double arr        O(n)        O(n)

[i,j,max,....]countable - O(1) constant space

creating new array[     ] - n -O(n)  space

creating n * n 2d array =  O(n^2) space


corner cases
input size n-  for i loop ntimes,(not nested) for  j loop n times

time - n + n = O(2n)---(ignore 2)---> O(n)

nested loop- n*n = n^2
individual loop - n + n = 2n  ---> n

O(n^2 + n) ----> O(n^2) 
whatever is the greater order time boils down to it
ignored because trivial

similar to space