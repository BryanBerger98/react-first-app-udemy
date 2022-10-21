import { useEffect, useState } from "react";

let timerId;

function Clock() {

	const [clock, setClock] = useState(new Date());
	const [test, setTest] = useState(0);

	// S'exécute chaque fois que le composant est monté/initialisé
	useEffect(() => {
		timerId = setInterval(() => {
			setClock(new Date());
		}, 1000);

		// Le 'return' (componentWillUnmount) => S'exécute au moment où le composant s'apprête à être détruit
		return () => {
			clearInterval(timerId);
		}
	}, [ ]); // Tableau des dépendances => Observer le changement de valeurs dans le state (componentDidUpdate)

	return (
		<>
			<p>It is { clock.toLocaleTimeString() }</p>
			<button onClick={() => setTest(test + 1)}>TEST</button>
		</>
	);
}

export default Clock;

// import { Component } from "react";

// class Clock extends Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			date: new Date(),
// 		};
// 	}

	// componentDidMount() {
	// 	this.timerId = setInterval(() => {
	// 		this.setState((state, props) => {
	// 			return {
	// 				date: new Date(),
	// 			};
	// 		});
	// 	}, 1000);
	// }

// 	componentDidUpdate() {
// 		// console.log('Component updated');
// 	}

// 	componentWillUnmount() {
// 		clearInterval(this.timerId);
// 	}

// 	render() {

// 		return (
// 			<p>It is { this.state.date.toLocaleTimeString() }</p>
// 		);
// 	}
// }

// export default Clock;