// Write a function that removes duplicates from an array.

// Method-1: return Set
function unique(arr){
    const uniq = new Set(arr);
    return uniq;
}

// Method-2: return Array
function removeDuplicates(arr){
    return [...new Set(arr)];
}

console.log(unique([1,2,3,3,4,4,5]));
console.log(removeDuplicates([1,2,3,3,4,4,5]));