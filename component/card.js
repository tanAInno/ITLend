import React, {Component} from 'react'
import '../css/card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Card extends Component {
    render() {
        return(
            <div className="card-container">
                <div className="card-detail">
                    <div className="asset-name">
                        {this.props.assetName}
                    </div>
                </div>
                <div className="button-container">
                    <button className="card-button">
                        <FontAwesomeIcon icon="eye" className="view-icon"/>
                    </button>
                    <button className="card-button">
                        <FontAwesomeIcon icon="edit" className="edit-icon"/>
                    </button>
                    <button className="card-button">
                        <FontAwesomeIcon icon="trash-alt" className="delete-icon"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default Card