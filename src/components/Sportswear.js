import React from "react";
import PropTypes from "prop-types";

const Sportswear = ({ sportswear, addSportswear }) => {
	return (
		<div className="Sportswear">
			<output>{sportswear.name}</output>
			<output>(${sportswear.price})</output>

			<button onClick={() => addSportswear("sportswear")}></button>
		</div>
	);
};

Sportswear.PropTypes = {
	sportswear: PropTypes.object.isRequired,
	addSportswear: PropTypes.func.isRequired,
};

export default Sportswear;
