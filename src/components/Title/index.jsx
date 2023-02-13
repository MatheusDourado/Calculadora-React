//Types
import PropTypes from 'prop-types'

export const Title = ({ value, size, className, style }) => {
    const Heading = `${size}`
    return (
        <Heading className={className} style={style}>
            {value}
        </Heading>
    )
}

Title.propTypes = {
    value: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    style: PropTypes.object,
}