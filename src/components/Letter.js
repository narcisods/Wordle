import { useContext, useEffect } from 'react';
import { AppContext } from '../App';

const Letter = ({ letterPos, attemptVal }) => {
	const { board, matchWord, currAttempt, answer } = useContext(AppContext);
	const letter = board[attemptVal][letterPos];
	const match = answer[letterPos] === letter;
	const partial = !match && letter !== '' && answer.includes(letter);

	const letterState =
		currAttempt.attempt > attemptVal && match
			? 'match'
			: partial
			? 'partial'
			: 'miss';

	return (
		<div className="letter" id={letterState}>
			{letter}
		</div>
	);
};

export default Letter;
