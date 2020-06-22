import React, { Component } from "react";
import "./List.css";
import Item from "./Item";

class List extends Component {
	render() {
		const { infos, onDelete } = this.props;

		return (
			<div className="List">
				{infos.map((info) => {
					return <Item key={info.id} info={info} onDelete={onDelete} />;
				})}
			</div>
		);
	}
}

export default List;
