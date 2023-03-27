/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isOneEditDistance = function(s, t) {
    let n = s.length+1;
    let m = t.length+1;

    let matrix = [];
    for(let row=0; row<n; row++){
        matrix[row] = [row];
    }
    for(let col=0; col<m; col++){
        matrix[0][col] = col;
    }

    const isDiff = (indexS, indexT) => s[indexS]===t[indexT] ? 0 : 1;

    for(let i=1; i<n; i++){
       for(let j=1; j<m; j++){
            matrix[i][j]=Math.min(matrix[i-1][j]+1, matrix[i][j-1]+1, matrix[i-1][j-1]+isDiff(i-1, j-1));
        } 
    }
    return matrix[n-1][m-1]==1;
}

var isOneEditDistance_v2 = function(s, t) {
    let n = s.length+1;
    let m = t.length+1;

    let prevRow = [];
    for(let col=0; col<m; col++){
        prevRow[col] = col;
    }
    let curRow = [];

    const isDiff = (indexS, indexT) => s[indexS]===t[indexT] ? 0 : 1;

    for(let i=1; i<n; i++){
        curRow[0]=i;
       for(let j=1; j<m; j++){
            curRow[j]=Math.min(prevRow[j]+1, curRow[j-1]+1, prevRow[j-1]+isDiff(i-1, j-1));
        } 
        prevRow=[...curRow];
    }
    return prevRow[m-1]==1;
}

module.exports=isOneEditDistance;
module.exports=isOneEditDistance_v2;