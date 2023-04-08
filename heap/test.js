const heapTree = require("./heapTree");
const heapSort = require("./heapSort");
const { default: expect } = require("expect");

test("max heap 1", () => {
    let tree = new heapTree();
    tree.add(5);
    tree.add(9);
    tree.add(1);
    tree.add(54);
    expect(tree.tree).toEqual([54,9,1,5]);
  });

  test("heap sort", () => {
    let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    heapSort(arr);
    expect(arr).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      ])
  })
  