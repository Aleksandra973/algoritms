function heapTree(){
    this.tree = [];
}


heapTree.prototype.add=function(number){
    this.tree.push(number);
    let i = this.tree.length-1;
    let parent = this.getParent(i);
    while(this.tree[parent]<this.tree[i] && i>0){
        let tmp = this.tree[parent];
        this.tree[parent] = this.tree[i];
        this.tree[i]=tmp;

        i=parent;
        parent=this.getParent(i);
    }
}

heapTree.prototype.fixHeap = function(index) {
    let l = this.getLeftChild(index);
    let r = this.getRightChild(index);
    let largest = index;
    if(this.tree[l]>this.tree[index] && l<this.tree.length){
        largest=l;
    }
    if(this.tree[r]>this.tree[index] && r<this.tree.length){
        largest=r;
    }
    if(largest!=i){
        let tmp = this.tree[largest];
        this.tree[largest]=this.tree[index];
        this.tree[index] = tmp;
        this.fixHeap(largest);
    }
}

heapTree.prototype.getParent = function(index) {
    return Math.floor(index-1)/2
}
heapTree.prototype.getLeftChild = (index) => {
    return index*2+1
}
heapTree.prototype.getRightChild = (index) => {
    return index*2+2
}

module.exports=heapTree;