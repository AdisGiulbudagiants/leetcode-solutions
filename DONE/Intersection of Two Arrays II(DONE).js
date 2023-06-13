var intersect = function (nums1, nums2) {
  const res = nums1.filter((el) => {
    if (nums2.includes(el)) {
      nums2.splice(nums2.indexOf(el), 1)
      return true
    }
    return false
  })
  return res
}

console.log(intersect([1, 2, 2, 1], [2, 2])) //[2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])) //[9,4]
console.log(intersect([1, 2, 2, 1], [2])) //[2]
