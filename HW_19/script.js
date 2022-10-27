"use strict";

function isContainSame(arr) {
  const set = new Set(arr);
  return set.size < arr.length ? true : false;
}

const nums1 = [1, 2, 3, 1];
console.log(isContainSame(nums1));
const nums2 = [1, 2, 3, 4];
console.log(isContainSame(nums2));
const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(isContainSame(nums3));

function getIntersection(firstarray, secondArray) {
  const firstSet = new Set(firstarray);
  const secondSet = new Set(secondArray);
  const resultArray = [];
  let prevLength = firstSet.size;
  secondSet.forEach((value) => {
    firstSet.add(value);
    firstSet.size === prevLength
      ? resultArray.push(value)
      : (prevLength = firstSet.size);
  });
  return resultArray;
}

const firstNums = [1, 2, 2, 1];
const secondNums = [2, 2];
console.log(getIntersection(firstNums, secondNums));
const thirdNums = [4, 9, 5];
const fourthNums = [9, 4, 9, 8, 4];
console.log(getIntersection(thirdNums, fourthNums));
