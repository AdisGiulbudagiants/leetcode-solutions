class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function mergeTwoLists(l1, l2) {
  if (!l1) return l2
  if (!l2) return l1

  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}

function mergeKLists(lists) {
  if (lists.length === 0) return null

  let result = lists[0]
  for (let i = 1; i < lists.length; i++) {
    result = mergeTwoLists(result, lists[i])
  }

  return result
}
