// to remove elements matching a target value from an array using in-place operations and minimal extra space.
//shift elements to left if it is not equal to val

function removeelement(num,val){
    let x = 0;
    for(let i = 0; i < num.length;i++){
        if (num[i] != val) {
          num[x] = num[i];
          x += 1;
        }
    }

    return x;

}

let arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 45];
console.log(removeelement(arr,2));