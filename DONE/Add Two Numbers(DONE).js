// function addTwoNumbers(l1, l2) {
//   const num1 = parseInt(l1.reverse("").join(""))
//   const num2 = parseInt(l2.reverse("").join(""))
//   const sum = (num1 + num2).toString().split("").reverse("")
//   return sum
// }
function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0) // создаем фиктивную голову связанного списка
  let currentNode = dummyHead // создаем текущий узел, начинающийся с фиктивной головы
  let carry = 0 // остаточная цифра для сложения

  while (l1 || l2) {
    let val1 = l1 ? l1.val : 0 // получаем значение первого связанного списка, если он не пуст
    let val2 = l2 ? l2.val : 0 // получаем значение второго связанного списка, если он не пуст
    let sum = val1 + val2 + carry // складываем значения и остаточную цифру

    carry = Math.floor(sum / 10) // вычисляем новую остаточную цифру
    currentNode.next = new ListNode(sum % 10) // создаем новый узел для результата
    currentNode = currentNode.next // перемещаем текущий узел на следующий

    if (l1) l1 = l1.next // переходим к следующему узлу первого связанного списка, если он не пуст
    if (l2) l2 = l2.next // переходим к следующему узлу второго связанного списка, если он не пуст
  }

  if (carry > 0) {
    currentNode.next = new ListNode(carry) // добавляем остаточную цифру в конец связанного списка
  }

  return dummyHead.next
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])) //[7,0,8]
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])) //[8,9,9,9,0,0,0,1]

// Этот код какого-то хера не принимает Leetcode, хз почему
