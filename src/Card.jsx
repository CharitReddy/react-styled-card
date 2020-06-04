import React from 'react'
import './Card.css'
import PropTypes from 'prop-types'

const Card = ({ className, cardTitle, children, cardTitleStyle }) => {
    return (
        <div className={className}>
            <div className={cardTitleStyle}>{cardTitle}</div>
            <div>{children}</div>
        </div>
    )
}
export default Card

Card.propTypes = {
    className: PropTypes.string.isRequired,
    cardTitleStyle: PropTypes.string.isRequired,
    cardTitle: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}