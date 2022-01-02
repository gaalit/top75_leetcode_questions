//https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

var twoSum = function (nums, target) {
  var map = new Map();

  for (var i = 0; i < nums.length; i++) {
    // finding the difference between target and current value
    var number = target - nums[i];

    // if the number exists as a key, return the value and the current index
    if (map.get(number) !== undefined) {
      // console.log("result",map.get(number),i)
      return [map.get(number), i];
    } else {
      // if the number does not exist in the map yet, set the key to equal the current value and the value to equal the index
      // console.log('-',map.get(number));
      // console.log("Set",nums[i], i)
      map.set(nums[i], i);
    }
  }
};
