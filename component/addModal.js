import React, {Component} from 'react'
import '../css/addmodal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setAddModal } from '../actions/modalAction'
import { connect } from 'react-redux'
import axios from 'axios'
import route from '../api'

class AddModal extends Component {

    state = {
        name : '',
        os : '',
        brand : '',
        ram : '',
        harddisk : '',
        processor : '',
        serial : '',
        mac_wifi : '',
        mac_lan : '',
        warranty : '',
        service_tag : '',
        email : '',
        loaner : ''
    }

    closeModal(){
        this.props.dispatch(setAddModal(false))
    }

    _onChange(e){
        this.setState({loaner : e.target.value})
    }

    handleChangeWithKey = (key,e) => {
        if(key == "name")
            this.setState({name : e.target.value})
        if(key == "os")
            this.setState({os : e.target.value})
        if(key == "brand")
            this.setState({brand : e.target.value})
        if(key == "ram")
            this.setState({ram : e.target.value})
        if(key == "harddisk")
            this.setState({harddisk : e.target.value})
        if(key == "processor")
            this.setState({processor : e.target.value})
        if(key == "serial")
            this.setState({serial : e.target.value})
        if(key == "mac_wifi")
            this.setState({mac_wifi : e.target.value})
        if(key == "mac_lan")
            this.setState({mac_lan : e.target.value})
        if(key == "warranty")
            this.setState({warranty : e.target.value})
        if(key == "service_tag")
            this.setState({service_tag : e.target.value})
        if(key == "email")
            this.setState({email : e.target.value})

    }

    async addAsset(){
        let assetStatus = ""
        if(this.state.loaner == "")
            assetStatus = "Available"
        else
            assetStatus = "On Loan"
        await axios.post(route+"assets/",{
            name: this.state.name,
            os: this.state.os,
            brand: this.state.brand,
            ram: this.state.ram,
            harddisk: this.state.harddisk,
            processor: this.state.processor,
            serial: this.state.serial,
            mac_wifi: this.state.mac_wifi,
            mac_lan: this.state.mac_lan,
            warranty: this.state.warranty,
            service_tag: this.state.service_tag,
            email: this.state.email,
            status: assetStatus,
            loaner: this.state.loaner
        }).catch(error => console.log(error))
        location.reload()
    }

    render() {
        return(
            <div className="add-modal-container">
                <div className="add-modal-header-wrapper">
                    <FontAwesomeIcon icon="plus-circle" className="add-modal-icon"/>
                    <div className="add-modal-header">Add Asset</div>
                </div>
                <div className="add-modal-input-group">
                    <div className="add-modal-input-wrapper">
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="laptop" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> Asset Name</div>
                        </div>
                        <input type="text" 
                            className="add-modal-input-half"
                            value={this.state.name}
                            onChange={e => this.handleChangeWithKey("name",e)}/>
                    </div>
                    <div className="add-modal-input-wrapper" style={{marginLeft: '3%'}}>
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="apple-alt" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> OS</div>
                        </div>
                        <input type="text" 
                            className="add-modal-input-half"
                            value={this.state.os}
                            onChange={e => this.handleChangeWithKey("os",e)}/>
                    </div>
                </div>
                <div className="add-modal-input-group">
                    <div className="add-modal-input-wrapper">
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="tags" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> Brand</div>
                        </div>
                        <input type="text" 
                            className="add-modal-input-half"
                            value={this.state.brand}
                            onChange={e => this.handleChangeWithKey("brand",e)}/>
                    </div>
                    <div className="add-modal-input-wrapper" style={{marginLeft: '3%'}}>
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="microchip" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> Processor</div>
                        </div>
                        <input type="text" 
                            className="add-modal-input-half"
                            value={this.state.processor}
                            onChange={e => this.handleChangeWithKey("processor",e)}/>
                    </div>
                </div>
                <div className="add-modal-input-group">
                    <div className="add-modal-input-wrapper">
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="memory" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> Ram</div>
                        </div>
                        <input type="text" 
                            className="add-modal-input-half"
                            value={this.state.ram}
                            onChange={e => this.handleChangeWithKey("ram",e)}/>
                    </div>
                    <div className="add-modal-input-wrapper" style={{marginLeft: '3%'}}>
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="hdd" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> Harddisk</div>
                        </div>
                        <input type="text" 
                            className="add-modal-input-half"
                            value={this.state.harddisk}
                            onChange={e => this.handleChangeWithKey("harddisk",e)}/>
                    </div>
                </div>
                <div className="add-modal-input-group">
                    <div className="add-modal-input-wrapper">
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="wifi" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> Wifi-Mac-Address</div>
                        </div>
                        <input type="text" 
                            className="add-modal-input-half"
                            value={this.state.mac_wifi}
                            onChange={e => this.handleChangeWithKey("mac_wifi",e)}/>
                    </div>
                    <div className="add-modal-input-wrapper" style={{marginLeft: '3%'}}>
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="home" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> Lan-Mac-Address</div>
                        </div>
                        <input type="text" 
                            className="add-modal-input-half"
                            value={this.state.mac_lan}
                            onChange={e => this.handleChangeWithKey("mac_lan",e)}/>
                    </div>
                </div>
                <div className="add-modal-input-group">
                    <div className="add-modal-input-wrapper">
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="barcode" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> OS Serial Number</div>
                        </div>
                        <input type="text" 
                            className="add-modal-input-half"
                            value={this.state.serial}
                            onChange={e => this.handleChangeWithKey("serial",e)}/>
                    </div>
                    <div className="add-modal-input-wrapper" style={{marginLeft: '3%'}}>
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="shield-alt" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> Warranty</div>
                        </div>
                        <input type="text" 
                            className="add-modal-input-half"
                            value={this.state.warranty}
                            onChange={e => this.handleChangeWithKey("warranty",e)}/>
                    </div>
                </div>
                <div className="add-modal-input-group">
                    <div className="add-modal-input-wrapper">
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="tags" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> Service Tag</div>
                        </div>
                        <input type="text" 
                            className="add-modal-input-half"
                            value={this.state.service_tag}
                            onChange={e => this.handleChangeWithKey("service_tag",e)}/>
                    </div>
                    <div className="add-modal-input-wrapper" style={{marginLeft: '3%'}}>
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="envelope" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> Email</div>
                        </div>
                        <input type="text" 
                            className="add-modal-input-half"
                            value={this.state.email}
                            onChange={e => this.handleChangeWithKey("email",e)}/>
                    </div>
                </div>
                <div className="lend-modal-topic-wrapper">
                    <FontAwesomeIcon icon="user-alt" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text" style={{marginLeft: '16px'}}> Loaner Name </div>
                </div>
                <input type="text" 
                    className="lend-modal-input"
                    value={this.state.loaner}
                    onChange={e => this._onChange(e)}/>
                <div className="add-modal-button-group">
                    <button className="add-modal-add-button" onClick={() => this.addAsset()}>Add</button>
                    <button className="add-modal-cancel-button" onClick={() => this.closeModal()}>Cancel</button>
                </div>
            </div>
        )
    }

}

export default connect(state => state)(AddModal)