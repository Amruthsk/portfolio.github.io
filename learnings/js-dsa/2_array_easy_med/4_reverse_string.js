// 344 Write a function that reverses a string. The input string is given as an array of characters s.

//You must do this by modifying the input array in-place with O(1) extra memory.

function reverseString(s){
    let len = s.length;
    let half = Math.floor(len/2);
    
    for(let i = 0; i < half; i++){
        let temp = s[i];
        s[i] = s[len - 1 -i];
        s[len - 1 - i] = temp;
    }
    return s;
}

console.log(reverseString(["h", "e", "l", "l", "o"]));