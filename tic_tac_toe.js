
        let currentPlayer = 'X';
        let gameBoard = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        let gameOver = false;

        function makeMove(row, col) {
            if (!gameOver && gameBoard[row][col] === '') {
                gameBoard[row][col] = currentPlayer;
                document.querySelector(`table tr:nth-child(${row + 1}) td:nth-child(${col + 1})`).textContent = currentPlayer;
                
                if (checkWinner(row, col, currentPlayer)) {
                    document.getElementById('winner').textContent = `Player ${currentPlayer} wins!`;
                    gameOver = true;
                } else if (isBoardFull()) {
                    document.getElementById('winner').textContent = "It's a draw!";
                    gameOver = true;
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        }

        function checkWinner(row, col, player) {
            return (
                checkRow(row, player) ||
                checkColumn(col, player) ||
                checkDiagonals(player)
            );
        }

        function checkRow(row, player) {
            return gameBoard[row].every(cell => cell === player);
        }

        function checkColumn(col, player) {
            return gameBoard.every(row => row[col] === player);
        }

        function checkDiagonals(player) {
            return (
                (gameBoard[0][0] === player && gameBoard[1][1] === player && gameBoard[2][2] === player) ||
                (gameBoard[0][2] === player && gameBoard[1][1] === player && gameBoard[2][0] === player)
            );
        }

        function isBoardFull() {
            return gameBoard.every(row => row.every(cell => cell !== ''));
        }

        function restartGame() {
            currentPlayer = 'X';
            gameBoard = [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ];
            gameOver = false;
            document.getElementById('winner').textContent = '';
            document.querySelectorAll('table td').forEach(cell => cell.textContent = '');
        }

       

