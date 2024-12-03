import PropTypes from "prop-types"
import React from "react"
import rigoBaby from "../../img/rigo-baby.jpg"

export const Card = (props) => {
    return (
        <div className="card" style={{width: "18rem"}}>
          <img src={props.imageUrl} className="card-img-top" alt={`${props.imageAlt} profile pic`} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href={props.buttonUrl} className="btn btn-primary">{props.buttonText}</a>
          </div>
        </div>
    )
}

Card.PropTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    imageAlt: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string
}

Card.defaultProps = {
    title: "Custom title",
    imageUrl: rigoBaby,
    imageAlt: "Rigo baby",
    text: "This is a custom text",
    buttonText: "Go to google",
    buttonUrl: "https://www.google.es"
}