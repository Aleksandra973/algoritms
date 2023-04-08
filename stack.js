function heapSort(arr) {
    let heap = [];
    function add (i) {
      heap.push(i);
      heapyfyUp(heap.length-1);
    };
  
    function heapyfyUp(index){
      let current = heap[index];
      let parentIndex = Math.floor(index/2);
      while(current<heap[parentIndex]){
        let tmp = heap[index];
        heap[index] = heap[parentIndex];
        heap[parentIndex] = tmp;
        current = heap[parentIndex];
        parentIndex=Math.floor(parentIndex/2);
      }
    }
    for(let i=0; i<arr.length; i++){
      add(arr[i])
    }
    return heap;
  }
  

  console.log(heapSort([4, 5, 6, 1, 2, 3]))
