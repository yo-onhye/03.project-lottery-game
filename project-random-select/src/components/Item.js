import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.info !== nextProps.info) {
			return true;
		} else return false;
	}

	render() {
		const { info, onDelete } = this.props;

		return (
			<div className="Item">
				<div className="text">{info.text}</div>
				<button
					className="remove"
					type="button"
					onClick={(e) => {
						e.stopPropagation();
						onDelete(info.id);
					}}
				>
					REMOVE
				</button>
			</div>
		);
	}
}

export default Item;
