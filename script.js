// script.js
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function handleClick(event) {
    const index = event.target.getAttribute('data-index');
    if (gameBoard[index] === '' && !checkWinner()) {
        gameBoard[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        if (checkWinner()) {
            setTimeout(() => alert(`${currentPlayer} wins!`), 10);
        } else if (!gameBoard.includes('')) {
            setTimeout(() => alert('It\'s a draw!'), 10);
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];
    
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);
