import React,{ Component } from 'react'
import '../css/lendmodal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import route from '../api'

class LendModal extends Component {

    state = {
        loaner: ''
    }

    _onChange(e){
        this.setState({loaner : e.target.value})
    }

    async lendAsset(){
        if(this.state.loaner !== ''){
            await axios.put(route+"assets/"+this.props.id,{
                name: this.props.name,
                os: this.props.os,
                brand: this.props.brand,
                ram: this.props.ram,
                harddisk: this.props.harddisk,
                processor: this.props.processor,
                serial: this.props.serial,
                mac_wifi: this.props.mac_wifi,
                mac_lan: this.props.mac_lan,
                warranty: this.props.warranty,
                status: "On Loan",
                loaner: this.state.loaner
            }).catch(error => console.log(error))
        }
        location.reload()
    }

    render() {
        return(
            <div className="lend-modal-container">
                <div className="lend-modal-header-wrapper">
                    <FontAwesomeIcon icon="handshake" className="lend-modal-icon"/>
                    <div className="lend-modal-header">Lend Asset</div>
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="laptop" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text"> Asset Name : {this.props.name}</div>
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
                    <div className="view-modal-topic-text" style={{marginLeft: '12px'}}> Hard Disk : {this.props.harddisk}</div>
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
                    <FontAwesomeIcon icon="folder" className="view-modal-topic-icon" style={{marginLeft: '10px'}}/>
                    <div className="view-modal-topic-text" style={{marginLeft: '15px'}}> Programs : </div>
                </div>
                <div className="lend-modal-topic-wrapper">
                    <FontAwesomeIcon icon="user-alt" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text" style={{marginLeft: '16px'}}> Loaner Name </div>
                </div>
                <input type="text" 
                    className="lend-modal-input"
                    value={this.state.loaner}
                    onChange={e => this._onChange(e)}/>
                <button className="lend-modal-submit-button" onClick={() => this.lendAsset()}>Submit</button>
            </div>
        )
    }
}

export default LendModal