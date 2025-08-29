// Write a function that flattens an array (only 1-level nested)

function flatten(arr) {
  let flat = [];
  for (const list of arr) {
    if (Array.isArray(list)) {
      for (const element of list) {
        flat.push(element);
      }
    } else {
      flat.push(list);
    }
  }
  return flat;
}

function flatten1(arr) {
  return arr.flat();
}

const ans = flatten([1, 2, [3, 4]]);
for (const element of ans) {
  console.log(element);
}

const ans1 = flatten1([1, 2, [3, 4]]);
for (const element of ans1) {
  console.log(element);
}