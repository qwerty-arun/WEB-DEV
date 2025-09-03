// Write a function that groups an array of objects by a given key.

// first try: extract by key, not group by key

/*
function grpArrays(arr, key) {
  let groupedArr = [];
  for (obj of arr) {
    for (objKey in obj) {
      if (objKey === key) {
        groupedArr.push(obj[objKey]);
      }
    }
  }
  return groupedArr;
}

let list = [
  { name: "arun", college: "rvce" },
  { name: "hitesh", college: "bms" },
  { name: "raj", college: "pes" },
  { name: "sagar", college: "rvce" },
  { name: "alex", college: "rvce" },
];

let grp = grpArrays(list, "name");
for (person of grp) {
  console.log(person);
}
*/

// Correct implementation: grouping by key
function groupBy(arr, key) {
  return arr.reduce((result, obj) => {
    let value = obj[key];
    if (!result[value]) {
      result[value] = [];
    }
    result[value].push(obj.name); // you can use 'obj' directly if you wan't to, here it just adds names
    return result;
  }, {});
}

let list = [
  { name: "arun", college: "rvce" },
  { name: "hitesh", college: "bms" },
  { name: "raj", college: "pes" },
  { name: "sagar", college: "rvce" },
  { name: "alex", college: "rvce" },
];

let grouped = groupBy(list, "college");
console.log(grouped);
