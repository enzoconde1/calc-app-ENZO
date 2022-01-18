import PropTypes from "prop-types";
import React from "react";

const Result = ({value}) => (
    <div className="result">
        {value}
    </div>
)

Result.propTypes = {
    value: PropTypes.string.isRequired
}

export default Result