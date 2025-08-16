Time complexity- counts most significant action
measure the efficiency of algo in terms of speed as the input size increase
speed & efficiency

algorithm - specific pattern - specific time complexity
no.of operation in relation to the size of input

size of Input(elements)  | number of operations
for loop - O(n)
nested loop - O(n^2)
fixed no matter the size - O(1)
cut half - O(logn)

How many times does the dominant action run relative to the input size ?


BigO Notation - represents worstcase time complexity

O(1)>O(logn)>O(n)>O(nlogn)>O(n^2)>O(2^n)>O(n!)

improvement always towards the left

Space complexity - counts new things being created.

amount of memory in relation to the size of input
size of input and size of axuillary memory size
how much extra space we are using

size of input | new substance creation

pointers,counters,modify -  O(1)
array - O(n)
2d - O(n^2)

How much NEW substance  does my algorithm create relative to the input size (n)?"

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