function solveNQueens(n) {
    const result = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));


    function isSafe(row, col) {
        // Check if there's a queen in the same column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }

        // Check if there's a queen in the left diagonal
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }

        // Check if there's a queen in the right diagonal
        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }

        return true;
    }

    function backtrack(row) {
        if (row === n) {
            // All queens are placed, add the solution to the result
            result.push(board.map(row => row.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                // Place the queen
                board[row][col] = 'Q';

                // Recur to the next row
                backtrack(row + 1);

                // Backtrack (undo the choice)
                board[row][col] = '.';
            }
        }
    }

    // Start the backtracking from the first row
    backtrack(0);

    return result;
}

// Example usage with N = 4
const N = 4;
const solutions = solveNQueens(N);
// console.log(solutions);
