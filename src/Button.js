import { Component } from "react";

const defaultButtonStyle = {
	padding: '.5rem',
	borderRadius: '.5rem',
	cursor: 'pointer',
	color: 'white',
	backgroundColor: '#6C3483',
};

class Button extends Component {

	constructor(props) {
		super(props);
		this.state = {
			style: defaultButtonStyle,
		};
	}

	handleButtonHover = (isHover) => {
		if (isHover) {
			this.setState(({ style }) => {
				return {
					style: {
						...style,
						color: '#6C3483',
						backgroundColor: 'white',
					},
				};
			});
		} else {
			this.setState({
				style: defaultButtonStyle,
			});
		}
	}

	render() {

		return(
			<button
				onClick={ this.props.onClick }
				style={ this.state.style }
				onMouseOver={ () => this.handleButtonHover(true) }
				onMouseLeave={ () => this.handleButtonHover(false) }
			>
				{ this.props.children }
			</button>
		);
	}

}

export default Button;