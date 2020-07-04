import React, { Component, createRef } from "react";
import "./Form.css";

class Form extends Component {
	state = {
		info: "",
		random: "",
	};

	infoInput = createRef();
	randomInput = createRef();

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({
			[name]: value,
		});
	};

	handleSubmitContents = (e) => {
		e.preventDefault();

		if(this.state.info === "") {
			alert('입력 창에 추첨 아이템을 입력해주세요');
		} else {
			this.props.onInsert(this.state.info);
			this.setState({
				info: "",
			});
		}
		this.infoInput.current.focus();
	};

	handleSubmitRandom = (e) => {
		e.preventDefault();
		if(this.state.random === "") {
			alert('입력 창에 추첨 개수를 입력해주세요');
		} else if (this.state.random === "0") {
			alert('0보다 큰 숫자를 입력해주세요');
		} else {
			this.props.onSet(this.state.random);
			this.setState({
				random: "",
			});
		}
		this.randomInput.current.focus();
	};

	render() {
		return (
			<div className="Form">
				<form className="form_container">
					<div className="form_item">
						<strong>추첨 아이템 추가</strong>
						<input type="text" value={this.state.info} name="info" onChange={this.handleChange} ref={this.infoInput} />
						<button type="button" onClick={this.handleSubmitContents}>추가</button>
					</div>
					<div className="form_item">
						<strong>총 추첨 개수</strong>
						<input type="number" value={this.state.random} name="random" onChange={this.handleChange} ref={this.randomInput} />
						<button type="button" onClick={this.handleSubmitRandom}>추가</button>
					</div>
					<button type="button" className="form_play_btn" onClick={this.props.onPlay}>추첨하기</button>
				</form>
			</div>
		);
	}
}

export default Form;
