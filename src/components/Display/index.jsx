//React & Libs
import PropTypes from "prop-types"

//Components
import { Title } from "../Title"

export const Display = ({ value, className }) => {
    return(
        <div className={className}>
            <Title value={value} size={"h1"} className="title"/>
        </div>
    )
}

Display.defaultProps = {
    value: "0",
}

Display.prototype = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
}