const heapTree = require("./heapTree");

test("max heap 1", () => {
    let tree = new heapTree();
    tree.add(5);
    tree.add(9);
    tree.add(1);
    tree.add(54);
    expect(tree.tree).toEqual([54,9,1,5]);
  });
  