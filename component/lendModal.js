import React,{ Component } from 'react'
import '../css/lendmodal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import route from '../api'
import ProgramTable from '../containers/ProgramTable'

class LendModal extends Component {

    state = {
        loaner: '',
        email: '',
        department: ''
    }

    _onChangeLoaner(e){
        this.setState({loaner : e.target.value})
    }

    _onChangeEmail(e){
        this.setState({email : e.target.value})
    }

    _onChangeDepartment(e){
        this.setState({department : e.target.value})
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
                loaner: this.state.loaner,
                service_tag: this.props.service_tag,
                email: this.state.email,
                department: this.state.department,
                programs: this.props.programs
            }).catch(error => console.log(error))
        }
        location.reload()
    }

    render() {
        return(
            <div className="lend-modal-container">
                <div className="lend-modal-header-wrapper">
                    <FontAwesomeIcon icon="handshake" className="lend-modal-icon"/>
                    <div className="lend-modal-header">Lend Device</div>
                </div>
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="laptop" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text"> Device Name : {this.props.name}</div>
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
                <div className="view-modal-topic-wrapper">
                    <FontAwesomeIcon icon="wrench" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text" style={{marginLeft: '11px'}}> Service Tag : {this.props.service_tag}</div>
                </div>
                <div className="view-modal-program-wrapper">
                    <div className="view-modal-program-header">
                        <FontAwesomeIcon icon="folder" className="view-modal-program-icon"/>
                        <div className="view-modal-program-header-text" style={{marginLeft: '13px'}}> Programs</div>
                    </div>
                    <ProgramTable
                        programs={this.props.programs}
                    />
                </div>  
                <div className="user-modal-wrapper" style={{marginTop: '5px'}}>
                    <div className="user-header">
                        <FontAwesomeIcon icon="user-alt" className="user-modal-icon"/>
                        <div className="user-modal-header">Holder Detail</div>
                    </div>
                    <div className="user-modal-topic-wrapper">
                        <FontAwesomeIcon icon="user-alt" className="view-modal-topic-icon"/>
                        <div className="view-modal-topic-text" style={{marginLeft: '16px'}}> Holder Name </div>
                    </div>
                    <input type="text" 
                        className="user-modal-input"
                        value={this.state.loaner}
                        onChange={e => this._onChangeLoaner(e)}/>
                    <div className="user-modal-topic-wrapper">
                        <FontAwesomeIcon icon="envelope" className="view-modal-topic-icon"/>
                        <div className="view-modal-topic-text" style={{marginLeft: '16px'}}> Email </div>
                    </div>
                    <input type="text" 
                        className="user-modal-input"
                        value={this.state.email}
                        onChange={e => this._onChangeEmail(e)}/>
                    <div className="user-modal-topic-wrapper">
                        <FontAwesomeIcon icon="building" className="view-modal-topic-icon"/>
                        <div className="view-modal-topic-text" style={{marginLeft: '16px'}}> Department </div>
                    </div>
                    <input type="text" 
                        className="user-modal-input"
                        value={this.state.department}
                        onChange={e => this._onChangeDepartment(e)}/>
                </div>
                <button className="lend-modal-submit-button" onClick={() => this.lendAsset()}>Submit</button>
            </div>
        )
    }
}

export default LendModal