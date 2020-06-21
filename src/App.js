import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import List from "./components/List";

class App extends Component {
	id = 1;

	state = {
		infos: [],
		randomInfo: [],
		randomIndex: [],
		random: null,
	};

	handleInfoInsert = (text) => {
		this.setState({
			infos: this.state.infos.concat({
				text,
				id: this.id,
			}),
		});
		this.id++;
	};

	handleRandomInsert = (number) => {
		this.setState({
			random: number,
		});
	};

	handleDelte = (id) => {
		this.setState({
			infos: this.state.infos.filter((info) => info.id !== id),
		});
	};

	render() {
		return (
			<div className='App'>
				<h3>Random 추첨기</h3>
				<Form random={this.state.random} onInsert={this.handleInfoInsert} onSet={this.handleRandomInsert} onPlay={this.handlePlayRandom} />
				<List infos={this.state.infos} onDelete={this.handleDelte} />
			</div>
		);
	}
}

export default App;
