import React, {Component} from 'react'
import '../css/addmodal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setAddModal } from '../actions/modalAction'
import { connect } from 'react-redux'
import axios from 'axios'
import route from '../api'
import * as constant from '../constants'
import Select from 'react-select'

class AddModal extends Component {

    state = {
        name : '',
        os : '',
        brand : '',
        ram : '',
        harddisk : [],
        processor : '',
        serial : '',
        mac_wifi : '',
        mac_lan : '',
        warranty : '',
        service_tag : '',
        email : '',
        loaner : '',
        department : '',
        programs : [],
        label_programs : null,
        label_harddisk : null
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
        if(key == "serial")
            this.setState({serial : e.target.value})
        if(key == "mac_wifi")
            this.setState({mac_wifi : e.target.value})
        if(key == "mac_lan")
            this.setState({mac_lan : e.target.value})
        if(key == "service_tag")
            this.setState({service_tag : e.target.value})
        if(key == "email")
            this.setState({email : e.target.value})
        if(key == "department")
            this.setState({department : e.target.value})

    }

    handleSelectOs = (selectedOption) => {
        this.setState({os : selectedOption})
    }

    handleSelectProcessor = (selectedOption) => {
        this.setState({processor : selectedOption})
    }

    handleSelectWarranty = (selectedOption) => {
        this.setState({warranty : selectedOption})
    }

    handleSelectRam = (selectedOption) => {
        this.setState({ram : selectedOption})
    }

    handleSelectHarddisk = (selectedOption) => {
        let tempArr = []
        for(let i = 0;i < selectedOption.length; i++){
            tempArr.push(selectedOption[i].value)
        }
        this.setState({label_harddisk: selectedOption})
        this.setState({harddisk: tempArr})
    }

    handleSelectBrand = (selectedOption) => {
        this.setState({brand : selectedOption})
    }

    handleSelectPrograms = (selectedOption) => {
        let tempArr = []
        for(let i = 0;i < selectedOption.length; i++){
            console.log(selectedOption[i].value)
            tempArr.push(selectedOption[i].value)
        }
        this.setState({label_programs: selectedOption})
        this.setState({programs: tempArr})
    }

    selectAll() {
        this.handleSelectPrograms(constant.programoptions)
    }

    clearAll() {
        this.handleSelectPrograms([])
    }

    async addAsset(){
        let assetStatus = ""
        if(this.state.loaner == "")
            assetStatus = "Available"
        else
            assetStatus = "On Loan"
        await axios.post(route+"assets/",{
            name: this.state.name,
            os: this.state.os.value,
            brand: this.state.brand.value,
            ram: this.state.ram,
            harddisk: this.state.harddisk,
            processor: this.state.processor.value,
            serial: this.state.serial,
            mac_wifi: this.state.mac_wifi,
            mac_lan: this.state.mac_lan,
            warranty: this.state.warranty,
            service_tag: this.state.service_tag,
            email: this.state.email,
            department: this.state.department,
            status: assetStatus,
            loaner: this.state.loaner,
            programs: this.state.programs
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
                <div className="add-modal-input-group-name">
                    <div className="add-modal-input-wrapper">
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="laptop" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> Asset Name</div>
                        </div>
                        <input type="text" 
                            className="add-modal-input"
                            value={this.state.name}
                            onChange={e => this.handleChangeWithKey("name",e)}/>
                    </div>
                </div>
                <div className="add-modal-select-group">
                    <div className="add-modal-input-wrapper">
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="tags" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> Brand</div>
                        </div>
                        <Select
                            value={this.state.brand}
                            onChange={this.handleSelectBrand}
                            options={constant.brandoptions}
                            isSearchable={true}
                            isClearable={true}
                            className="module-select"
                        />
                    </div>
                    <div className="add-modal-input-wrapper" style={{marginLeft: '3%'}}>
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="apple-alt" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> OS</div>
                        </div>
                        <Select
                            value={this.state.os}
                            onChange={this.handleSelectOs}
                            options={constant.osoptions}
                            isSearchable={true}
                            isClearable={true}
                            className="module-select"
                        />
                    </div>
                </div>
                <div className="add-modal-select-group">
                    <div className="add-modal-input-wrapper">
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="shield-alt" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> Warranty</div>
                        </div>
                        <Select
                            value={this.state.warranty}
                            onChange={this.handleSelectWarranty}
                            options={constant.warrantyoptions}
                            isSearchable={true}
                            isClearable={true}
                            className="module-select"
                        />
                    </div>
                    <div className="add-modal-input-wrapper" style={{marginLeft: '3%'}}>
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="microchip" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> Processor</div>
                        </div>
                        <Select
                            value={this.state.processor}
                            onChange={this.handleSelectProcessor}
                            options={constant.processoroptions}
                            isSearchable={true}
                            isClearable={true}
                            className="module-select-processor"
                        />
                    </div>
                </div>
                <div className="add-modal-select-group">
                    <div className="add-modal-input-wrapper" style={{width: '30%'}}>
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="memory" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> Ram</div>
                        </div>
                        <Select
                            value={this.state.ram}
                            onChange={this.handleSelectRam}
                            options={constant.ramoptions}
                            isSearchable={true}
                            isClearable={true}
                            className="module-select"
                        />
                    </div>
                    <div className="add-modal-input-wrapper" style={{width: '67%', marginLeft: '2%'}}>
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="hdd" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> Harddisk</div>
                        </div>
                        <Select
                            value={this.state.label_harddisk}
                            onChange={this.handleSelectHarddisk}
                            options={constant.harddiskoptions}
                            isSearchable={true}
                            isClearable={true}
                            isMulti={true}
                            className="module-select-hdd"
                        />
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
                            <FontAwesomeIcon icon="wrench" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> Service Tag</div>
                        </div>
                        <input type="text" 
                            className="add-modal-input-half"
                            value={this.state.service_tag}
                            onChange={e => this.handleChangeWithKey("service_tag",e)}/>
                    </div>
                </div>
                <div className="center-modal-topic-wrapper">
                    <FontAwesomeIcon icon="folder" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text" style={{marginLeft: '16px'}}> Programs </div>
                </div>
                    <Select
                        value={this.state.label_programs}
                        onChange={this.handleSelectPrograms}
                        options={constant.programoptions}
                        isSearchable={true}
                        isClearable={true}
                        isMulti={true}
                        className="module-select-center"
                        />
                    <div className="select-button-group">
                        <button className="all-button" onClick={() => this.selectAll()}>Select All</button>
                        <button className="clear-button" onClick={() => this.clearAll()}>Clear All</button>
                    </div>
                <div className="user-modal-wrapper">
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
                        onChange={e => this._onChange(e)}/>
                    <div className="user-modal-topic-wrapper">
                        <FontAwesomeIcon icon="envelope" className="view-modal-topic-icon"/>
                        <div className="view-modal-topic-text" style={{marginLeft: '16px'}}> Email </div>
                    </div>
                    <input type="text" 
                        className="user-modal-input"
                        value={this.state.email}
                        onChange={e => this.handleChangeWithKey("email",e)}/>
                    <div className="user-modal-topic-wrapper">
                        <FontAwesomeIcon icon="building" className="view-modal-topic-icon"/>
                        <div className="view-modal-topic-text" style={{marginLeft: '16px'}}> Department </div>
                    </div>
                    <input type="text" 
                        className="user-modal-input"
                        value={this.state.department}
                        onChange={e => this.handleChangeWithKey("department",e)}/>
                </div>
                <div className="add-modal-button-group">
                    <button className="add-modal-add-button" onClick={() => this.addAsset()}>Add</button>
                    <button className="add-modal-cancel-button" onClick={() => this.closeModal()}>Cancel</button>
                </div>
            </div>
        )
    }

}

export default connect(state => state)(AddModal)