


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // Join all the separate arrays of the matrix and store them in variable m

    let m = []; 
    let count = 0;
    while(count< matrix.length){
        m= m.concat(matrix[count]);
        count++;
    }

    if(m.includes(target)){
    return true;
    }
    else{
    return false;
    }


    
};
