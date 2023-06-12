var intersection = function (nums1, nums2) {
  const res = nums1.filter((el, index) => {
    return nums2.includes(el) && nums1.indexOf(el) === index
  })
  return res
}

console.log(intersection([1, 2, 2, 1], [2, 2])) //[2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])) //[9,4]
