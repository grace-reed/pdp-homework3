import React from "react";
import PropTypes from "prop-types";

import Sportswear from "./Sportswear.js";

const SportswearList = ({ sportswear, addSportswear }) => {
	return (
		<div className="SportswearList">
			<h2>Sportswear</h2>
			<div>
				{sportswear.map((p, i) => (
					<Sportswear
						key={"sportswear" + i}
						sportswear={p}
						addSportswear={addSportswear}
					></Sportswear>
				))}
			</div>
		</div>
	);
};

SportswearList.propTypes = {
	sportswear: PropTypes.array.isRequired,
	addSportswear: PropTypes.func.isRequired,
};

export default SportswearList;
