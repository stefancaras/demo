let root = { val: 3, left: { val: 9, left: null, right: null }, right: { val: 20, left: { val: 15, left: null, right: null }, right: { val: 7, left: null, right: null } } }

var maxDepth = function (root) {
  let result = []
  let count = 0
  const inorder = (root) => {
    if (!root) {
      return
    }
    count++
    inorder(root.left)
    if (!root.left && !root.right) result.push(count)
    inorder(root.right)
    count--
  }
  inorder(root)
  return result
};
console.log(maxDepth(root))