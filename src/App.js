import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

class App extends Component {
	id = 1;

	state = {
		infos: [],
		randomResult: [],
		random: null,
		isResultShow: false,
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

	handlePlayLottery = () => {
		const { infos, random, randomResult, isResultShow } = this.state;

		function randomPickItem(arr) {
			return arr[Math.floor(Math.random() * arr.length)];
		}

		for (var i = 0; i < random; i++) {
			var temp = 0;

			do temp = randomPickItem(infos);
			while (randomResult.indexOf(temp) !== -1);
			randomResult.push(temp);
		}

		this.setState({
			isResultShow: !isResultShow,
		});
	};

	render() {
		return (
			<div className='App'>
				<h3>Random 추첨기</h3>
				<Form random={this.state.random} onInsert={this.handleInfoInsert} onSet={this.handleRandomInsert} onPlay={this.handlePlayLottery} />
				{this.state.isResultShow && (
					<div className='Random-result'>
						<strong>당첨 결과</strong>
						<ul>
							{this.state.randomResult.map((item, index) => {
								return <li key={index}>{item.text}</li>;
							})}
						</ul>
					</div>
				)}
				<List infos={this.state.infos} onDelete={this.handleDelte} />
			</div>
		);
	}
}

export default App;
