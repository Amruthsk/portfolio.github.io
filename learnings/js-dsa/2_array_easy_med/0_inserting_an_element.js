function insert(arr, ele, pos) {
  let newarr = [...arr]; // clone to avoid mutating original
  for (let i = newarr.length; i > pos; i--) {
    newarr[i] = newarr[i - 1];
  }
  newarr[pos] = ele;
  return newarr;
}

let arr = [1, 2, 4, 5];
console.log(insert(arr, 3, 2)); // [1, 2, 3, 4, 5]
