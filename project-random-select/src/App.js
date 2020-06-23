import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

class App extends Component {
	id = 1;

	state = {
		infos: [], // 추첨자 오브젝트
		randomResult: [], // 추첨자 배열 복사
		random: null, // 추첨할 인원 수
		isResultShow: false, // 노출 유무
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
		const { infos } = this.state;
		if (number < infos.length) {
			this.setState({
				random: number,
			});
		}
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
			isResultShow: true,
		});

		console.log(randomResult.length);
		console.log(isResultShow);
	};

	handlePopupClose = (e) => {
		e.preventDefault();

		const { randomResult } = this.state;

		if (randomResult.length > 0) {
			this.setState({
				randomResult: [],
				isResultShow: false,
			});
		}
	};

	render() {
		return (
			<div className='App'>
				<h3>Random 추첨기</h3>
				<Form random={this.state.random} onInsert={this.handleInfoInsert} onSet={this.handleRandomInsert} onPlay={this.handlePlayLottery} />
				<div className={`Random-result-popup ${this.state.isResultShow && "show"}`}>
					<div className='Random-result-inner'>
						<strong>당첨 결과</strong>
						<ul>
							{this.state.randomResult.map((item, index) => {
								return <li key={index}>{item.text}</li>;
							})}
						</ul>
						<button type='button' className='Random-result-close' onClick={this.handlePopupClose}>
							<span className='blind'>팝업 닫기</span>
						</button>
					</div>
				</div>
				<List infos={this.state.infos} onDelete={this.handleDelte} />
			</div>
		);
	}
}

export default App;
