/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
function heapSort(arr) {
  
    function heapyfyDown(index, maxLength){
      let largestIndex = index;
      let lIndex = 2*index + 1;
      let rIndex =2*index + 2;
      if(lIndex<maxLength && arr[largestIndex]<arr[lIndex]){
        largestIndex=lIndex;
      }
      if(rIndex<maxLength && arr[largestIndex]<arr[rIndex]){
        largestIndex=rIndex;
      }
        if(largestIndex!==index){
          let tmp = arr[index];
          arr[index] = arr[largestIndex];
          arr[largestIndex] = tmp;
          heapyfyDown(largestIndex, maxLength);
        }
    }
  
    for (let i = Math.floor(arr.length-1 / 2 - 1); i >= 0; i--) {
      heapyfyDown(i, arr.length);
    }
  
    for(let i=arr.length-1; i>=0; i--){
      let tmp = arr[0];
      arr[0] = arr[i];
      arr[i] = tmp;
      heapyfyDown(0, i);
    }
    return arr;
  }

  module.exports=heapSort;