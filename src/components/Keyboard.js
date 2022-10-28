import { useContext, useState } from 'react';
import { AppContext } from '../App';

const Keyboard = ({ letter }) => {
	const { board, setBoard, currAttempt, setCurrAttempt, answer } =
		useContext(AppContext);

	const selectLetter = () => {
		if (letter === 'Enter') {
			if (currAttempt.letterPos !== 5) return;
			let currWord = '';
			console.log(currWord);
			for (let i = 0; i < 5; i++) {
				currWord += board[currAttempt.attempt][i];
			}

			if (currWord === answer) {
				alert('You got the word! Congratulations!');
				return;
			}
			if (currAttempt.attempt === 5) {
				alert(`All attempts used. Game Over. Correct word was ${answer}`);
				return;
			}
			setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
		} else if (letter === 'Del') {
			if (currAttempt.letterPos === 0) return;
			const newBoard = [...board];
			newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = '';
			setBoard(newBoard);
			setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
		} else {
			if (currAttempt.letterPos > 4) return;
			const newBoard = [...board];
			newBoard[currAttempt.attempt][currAttempt.letterPos] = letter;
			setBoard(newBoard);
			setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
		}
	};

	return (
		<div className="keys" onClick={selectLetter}>
			{letter}
		</div>
	);
};

export default Keyboard;
