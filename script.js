function multiplyMatrices() {
    const rowsA = parseInt(document.getElementById("rowsA").value);
    const colsA = parseInt(document.getElementById("colsA").value);
    const rowsB = parseInt(document.getElementById("rowsB").value);
    const colsB = parseInt(document.getElementById("colsB").value);

    if (isNaN(rowsA) || isNaN(colsA) || isNaN(rowsB) || isNaN(colsB)) {
        document.getElementById("result").innerText = "Please enter valid matrix dimensions!";
        return;
    }

    let matrixA = parseMatrix(document.getElementById("matrixA").value, rowsA, colsA);
    let matrixB = parseMatrix(document.getElementById("matrixB").value, rowsB, colsB);

    if (!isValidMatrix(matrixA) || !isValidMatrix(matrixB)) {
        document.getElementById("result").innerText = "Invalid input matrices!";
        return;
    }

    if (colsA !== rowsB) {
        document.getElementById("result").innerText = "Number of columns in matrix A must match number of rows in matrix B!";
        return;
    }

    let resultMatrix = [];

    for (let i = 0; i < rowsA; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            resultMatrix[i][j] = sum;
        }
    }

    displayResult(resultMatrix);
}

function parseMatrix(matrixString, rows, cols) {
    const elements = matrixString.trim().split(/\s+/).map(Number);
    let matrix = [];
    let index = 0;
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = elements[index++];
        }
    }
    return matrix;
}

function isValidMatrix(matrix) {
    if (matrix.length === 0) return false;
    const numCols = matrix[0].length;
    return matrix.every(row => row.length === numCols);
}

function displayResult(matrix) {
    let resultString = "Result Matrix:<br>";
    matrix.forEach(row => {
        resultString += row.join(' ') + "<br>";
    });
    document.getElementById("result").innerHTML = resultString;
}
