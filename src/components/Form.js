import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
	state = {
		info: "",
		random: "",
	};

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({
			[name]: value,
		});
	};

	handleSubmitContents = (e) => {
		e.preventDefault();

		if(this.state.info === "") {
			alert('입력 창에 추첨자를 입력해주세요');
		} else {
			this.props.onInsert(this.state.info);
			this.setState({
				info: "",
			});
		}
	};

	handleSubmitRandom = (e) => {
		e.preventDefault();

		if(this.state.random === "") {
			alert('입력 창에 추첨 인원를 입력해주세요');
		} else {
			this.props.onSet(this.state.random);
			this.setState({
				random: "",
			});
		}
	};

	render() {
		return (
			<div className="Form">
				<form className="form_container">
					<div className="form_item">
						<strong>추첨자 추가</strong>
						<input type="text" value={ithis.state.nfo} name="info" onChange={this.handleChange} />
						<button type="button" onClick={this.handleSubmitContents}>추가</button>
					</div>
					<div className="form_item">
						<strong>총 추첨할 인원 수</strong>
						<input type="number" value={this.state.random} name="random" onChange={this.handleChange} />
						<button type="button" onClick={this.handleSubmitRandom}>추가</button>
					</div>
					<button type="button" className="form_play_btn" onClick={this.props.onPlay}>추첨하기</button>
				</form>
			</div>
		);
	}
}

export default Form;
