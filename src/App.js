import './App.css';
import { useState, createContext } from 'react';
import Header from './components/Header';
import Keyboard from './components/Keyboard';
import Board from './components/Board';
import { boardDefault } from './components/Words';

export const AppContext = createContext();

const answer = 'TACOS';

function App() {
	const [board, setBoard] = useState(boardDefault);
	const [currAttempt, setCurrAttempt] = useState({
		attempt: 0,
		letterPos: 0,
	});

	return (
		<div className="App">
			<Header />
			<AppContext.Provider
				value={{ board, setBoard, currAttempt, setCurrAttempt, answer }}
			>
				<div className="container">
					<Board />
					<div className="keyboard">
						<div className="lineone">
							<Keyboard letter="Q" />
							<Keyboard letter="W" />
							<Keyboard letter="E" />
							<Keyboard letter="R" />
							<Keyboard letter="T" />
							<Keyboard letter="Y" />
							<Keyboard letter="U" />
							<Keyboard letter="I" />
							<Keyboard letter="O" />
							<Keyboard letter="P" />
						</div>
						<div className="linetwo">
							<Keyboard letter="A" />
							<Keyboard letter="S" />
							<Keyboard letter="D" />
							<Keyboard letter="F" />
							<Keyboard letter="G" />
							<Keyboard letter="H" />
							<Keyboard letter="J" />
							<Keyboard letter="K" />
							<Keyboard letter="L" />
						</div>
						<div className="linethree">
							<Keyboard letter="Del" />
							<Keyboard letter="Z" />
							<Keyboard letter="X" />
							<Keyboard letter="C" />
							<Keyboard letter="V" />
							<Keyboard letter="B" />
							<Keyboard letter="N" />
							<Keyboard letter="M" />
							<Keyboard letter="Enter" />
						</div>
					</div>
				</div>
			</AppContext.Provider>
		</div>
	);
}

export default App;
