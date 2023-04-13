const gameBoard = document.querySelector('.gameboard');
const informationDisplay = document.querySelector('.informationDisplay');
const emptyCells = ["", "", "", "", "", "", "", "", ""];

let go = 'circle';
informationDisplay.textContent = "now it's circle turn";

// Now creating the gameBoard.......

function gameboard() {
	emptyCells.forEach((cells, index) => {
		let cellElement = document.createElement('div');
		cellElement.classList.add("square");
		cellElement.id = index;
		gameBoard.append(cellElement);

		// creating the circles and squares
		cellElement.addEventListener('click', addGo);
	})
}
gameboard();

function addGo(e) {
	const goDisplay = document.createElement('div');
	goDisplay.classList.add(go);
	e.target.append(goDisplay);
	go = go === 'circle' ? 'cross' : 'circle';
	informationDisplay.textContent = `now it's ${go} turn`;
	e.target.removeEventListener('click', addGo);
	checkScore();
}

function checkScore() {
	const allSquares = document.querySelectorAll('.square');
	// console.log(allSquares);
	const winningCombos = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
	]
	winningCombos.forEach(array => {
		let circleWins = array.every(cell =>
			allSquares[cell].firstChild?.classList.contains('circle'))
		if (circleWins) {
			informationDisplay.textContent = 'circle wins !';
			allSquares.forEach(square => {
				square.replaceWith(square.cloneNode(true));
				return;
			})
		}
	})


	winningCombos.forEach(array => {
		let circleWins = array.every(cell =>
			allSquares[cell].firstChild?.classList.contains('cross'))
		if (circleWins) {
			informationDisplay.textContent = 'cross wins !';
			allSquares.forEach(square => {
				square.replaceWith(square.cloneNode(true));
				return;
			})
		}
	})

}