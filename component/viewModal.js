import React, {Component} from 'react'
import '../css/viewmodal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ViewModal extends Component {

    render() {
        return(
            <div className="view-modal-container">
                <div className="view-modal-header-wrapper">
                    <FontAwesomeIcon icon="eye" className="view-modal-icon"/>
                    <div className="view-modal-header">View Asset</div>
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="laptop" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text"> Asset Name : {this.props.assetName}</div>
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="signature" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text" style={{marginLeft: '15px'}}> Status : </div>
                {this.props.assetStatus == "Available" &&
                    <div className="view-modal-topic-text-avai">{this.props.assetStatus}</div>
                }
                {this.props.assetStatus == "On Loan" &&
                    <div className="view-modal-topic-text-loan">{this.props.assetStatus}</div>
                }
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="user-alt" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text" style={{marginLeft: '16px'}}> Loaner : {this.props.assetLoaner}</div>
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="apple-alt" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text" style={{marginLeft: '17px'}}> OS : {this.props.assetOs}</div>
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="tags" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text"> Brand : {this.props.assetBrand}</div>
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="memory" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text"> Ram : {this.props.assetRam}</div>
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="hdd" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text" style={{marginLeft: '13px'}}> Hard Disk : {this.props.assetHarddisk}</div>
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="folder" className="view-modal-topic-icon" style={{marginLeft: '12px'}}/>
                    <div className="view-modal-topic-text" style={{marginLeft: '15px'}}> Programs : </div>
                </div>
            </div>
        )
    }
}

export default ViewModal