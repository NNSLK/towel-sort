// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr2 = [];
    let arr3 = [];
    let arrchange = [];
    let lastarr = [];
    if (!matrix) {
        return arr3;
    }
    for (let i = 0; i < matrix.length; i++) {
        if (matrix.length == 2) {
            arr2 = matrix[0].concat(arrchange);
            arrchange = matrix[1].reverse();
        } else if (matrix.length == 3) {
            arrchange = matrix[1].reverse();
            arr2 = matrix[0].concat(arrchange).concat(matrix[2]);
        } else if (matrix.length == 4) {
            arr2 = matrix[0]
                .concat(arrchange)
                .concat(matrix[2])
                .concat(lastarr);
            arrchange = matrix[1].reverse();
            lastarr = matrix[3].reverse();
        }
    }
    for (let b = 0; b < arr2.length; b++) {
        arr3.push(arr2[b]);
    }
    return arr3;
};
