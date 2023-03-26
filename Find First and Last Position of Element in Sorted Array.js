// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // find the first index and last index of a elements
    let search = [nums.indexOf(target) || -1, nums.lastIndexOf(target) || -1]; 
    return search;
};
