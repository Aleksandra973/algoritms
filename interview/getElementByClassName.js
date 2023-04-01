function getElementByClassName(className){
    let root = document;
    let result = [];
    function find(node){
        if(node.classList){
            if ( node.classList.contains(className)){
                result.push(node);
            };
            
        }
        if(!node.childNodes){
            return;
        }
        for(let i = 0; i<node.childNodes.length; i++){
            find(node.childNodes[i]);
        }
    }
    find(root);
    return result;
}

module.exports=getElementByClassName;