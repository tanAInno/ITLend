import React, {Component} from 'react'
import '../css/app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SearchBox extends Component {
    render(){
        return(
            <div className="search-box-wrapper">
                <div className="search-header-wrapper">
                    <FontAwesomeIcon icon="search" className="search-icon"/>
                    <div className="search-header"> Search</div>
                </div>
                <div className="search-input-wrapper">
                    <FontAwesomeIcon icon="laptop" className="search-topic-icon"/>
                    <div className="search-topic-header"> Asset Name</div>
                </div>
                <input type="text" className="search-input"/>
                <div className="search-input-wrapper">
                    <FontAwesomeIcon icon="apple-alt" style={{fontSize: '24px'}}className="search-topic-icon"/>
                    <div className="search-topic-header" style={{marginTop: '5px'}}> OS</div>
                </div>
                <input type="text" className="search-input"/>
                <div className="search-input-wrapper">
                    <FontAwesomeIcon icon="user-alt" className="search-topic-icon"/>
                    <div className="search-topic-header"> Loaner</div>
                </div>
                <input type="text" className="search-input"/>
            </div>
        )
    }
}

export default SearchBox