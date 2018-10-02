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
                    <div className="view-modal-topic-text"> Asset Name : {this.props.name}</div>
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="signature" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text" style={{marginLeft: '15px'}}> Status : </div>
                {this.props.status == "Available" &&
                    <div className="view-modal-topic-text-avai">{this.props.status}</div>
                }
                {this.props.status == "On Loan" &&
                    <div className="view-modal-topic-text-loan">{this.props.status}</div>
                }
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="user-alt" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text" style={{marginLeft: '16px'}}> Loaner : {this.props.loaner}</div>
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="apple-alt" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text" style={{marginLeft: '17px'}}> OS : {this.props.os} ({this.props.serial})</div>
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="tags" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text"> Brand : {this.props.brand}</div>
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="memory" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text"> Ram : {this.props.ram}</div>
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="hdd" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text" style={{marginLeft: '13px'}}> Hard Disk : {this.props.harddisk}</div>
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="microchip" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text" style={{marginLeft: '13px'}}> Processor : {this.props.processor}</div>
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="wifi" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text" style={{marginLeft: '13px'}}> Wifi Mac-Address : {this.props.mac_wifi}</div>
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="home" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text" style={{marginLeft: '13px'}}> Lan Mac-Address : {this.props.mac_lan}</div>
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="shield-alt" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text" style={{marginLeft: '13px'}}> Warranty : {this.props.warranty}</div>
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