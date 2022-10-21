import { Component, Fragment } from "react";
import Button from "./Button";
import Clock from "./Clock";
import Title from "./Title";
import style from './App.module.css';
import profilePicture from './profile.jpg';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isClockVisible: false,
			users: [
				{
				  id: 0,
				  name: 'John',
				  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
				},
				{
				  id: 1,
				  name: 'Jimmy',
				  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
				},
				{
				  id: 2,
				  name: 'James',
				  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
				},
				{
				  id: 3,
				  name: 'Carl',
				  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
				},
				{
				  id: 4,
				  name: 'Rick',
				  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
				},
				{
				  id: 5,
				  name: 'Mack',
				  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
				}
			  ]
		};
	}

	handleDisplayClock = () => {
		this.setState((state) => {
			return {
				isClockVisible: !state.isClockVisible,
			};
		});
	}
	
	render() {

		return (
			<div style={{ margin: '3rem' }}>
				<Title>
					Hello world!
				</Title>
				<h2 className={style.title}>Clock</h2>
				{ this.state.isClockVisible && <Clock /> }
				<Button onClick={ this.handleDisplayClock }>Display clock!</Button>
				<h2 className={`${ style.title }`}>Users</h2>
				<dl style={{ marginBottom: 20, border: 1, borderColor: 'black', borderStyle: 'solid', padding: 20 }}>
					{
						this.state.users.map(user => {
							return (
								<Fragment key={ user.id }>
									<dt style={{ color: '#21618C', fontWeight: 'bold' }}>{ user.name }</dt>
									<dd>{ user.description }</dd>
								</Fragment>
							);
						})
					}
				</dl>
				<h2 className={style.title}>My Profile</h2>
				<img src={ profilePicture } alt="Mon profil" height={150} width={150} style={{ borderRadius: '100%' }} />
			</div>
		);
	}

}

export default App;