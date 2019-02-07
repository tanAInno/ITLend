import React,{ Component } from 'react'
import '../css/editmodal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import route from '../api'
import Select from 'react-select'
import * as constant from '../constants'

class EditModal extends Component {

    state = {
        name : this.props.name,
        os : this.props.os,
        brand : this.props.brand,
        ram : this.props.ram,
        harddisk : this.props.harddisk,
        processor : this.props.processor,
        serial : this.props.serial,
        mac_wifi : this.props.mac_wifi,
        mac_lan : this.props.mac_lan,
        warranty : this.props.warranty,
        service_tag : this.props.service_tag,
        email : this.props.email,
        programs : this.props.programs,
        loaner : this.props.loaner,
        department : this.props.department
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

    async editAsset(){
        let assetStatus = ""
        if(this.state.loaner == "")
            assetStatus = "Available"
        else
            assetStatus = "On Loan"
        console.log(this.props.id)
        await axios.put(route+"assets/"+this.props.id,{
            name: this.state.name,
            os: this.state.os,
            brand: this.state.brand,
            ram: this.state.ram,
            harddisk: this.state.harddisk,
            status: assetStatus,
            loaner: this.state.loaner,
            processor: this.state.processor,
            serial: this.state.serial,
            mac_wifi: this.state.mac_wifi,
            mac_lan: this.state.mac_lan,
            warranty: this.state.warranty,
            service_tag: this.state.service_tag,
            programs: this.state.programs,
            email: this.state.email,
            department: this.state.department
        }).catch(error => console.log(error))
        location.reload()
    }

    _onChange(e){
        this.setState({loaner : e.target.value})
    }

    handleSelectOs = (selectedOption) => {
        this.setState({os : selectedOption.value},() => {console.log(this.state.os)})
    }

    handleSelectProcessor = (selectedOption) => {
        this.setState({processor : selectedOption.value})
    }

    handleSelectWarranty = (selectedOption) => {
        this.setState({warranty : selectedOption.value})
    }

    handleSelectRam = (selectedOption) => {
        this.setState({ram : selectedOption.value})
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
        this.setState({brand : selectedOption.value},() => {console.log(this.state.brand)})
    }

    handleSelectPrograms = (selectedOption) => {
        let tempArr = []
        for(let i = 0;i < selectedOption.length; i++){
            console.log(selectedOption[i].value)
            tempArr.push(selectedOption[i].value)
        }
        this.setState({label_programs: selectedOption})
        this.setState({programs: tempArr},() => {console.log(this.state.programs)})
    }

    setLabelArray = (arr) => {
        let tempArr = []
        for(let i = 0;i < arr.length; i++){
            tempArr.push({value: arr[i],label: arr[i]})
        }
        return tempArr
    }

    render() {
        return(
            <div className="edit-modal-container">
                <div className="edit-modal-header-wrapper">
                    <FontAwesomeIcon icon="edit" className="edit-modal-icon"/>
                    <div className="edit-modal-header">Edit Asset</div>
                </div>
                <div className="edit-modal-input-group-name">
                    <div className="edit-modal-input-wrapper">
                        <div className="edit-modal-topic-wrapper">
                            <FontAwesomeIcon icon="laptop" className="edit-modal-topic-icon"/>
                            <div className="edit-modal-topic-text"> Asset Name</div>
                        </div>
                        <input type="text" 
                            className="edit-modal-input"
                            value={this.state.name}
                            onChange={e => this.handleChangeWithKey("name",e)}/>
                    </div>
                </div>
                <div className="edit-modal-select-group">
                    <div className="edit-modal-input-wrapper">
                        <div className="edit-modal-topic-wrapper">
                            <FontAwesomeIcon icon="tags" className="edit-modal-topic-icon"/>
                            <div className="edit-modal-topic-text"> Brand</div>
                        </div>
                        <Select
                            value={{value:this.state.brand, label:this.state.brand}}
                            onChange={this.handleSelectBrand}
                            options={constant.brandoptions}
                            isSearchable={true}
                            isClearable={true}
                            className="module-select"
                        />
                    </div>
                    <div className="edit-modal-input-wrapper" style={{marginLeft: '3%'}}>
                        <div className="edit-modal-topic-wrapper">
                            <FontAwesomeIcon icon="apple-alt" className="edit-modal-topic-icon"/>
                            <div className="edit-modal-topic-text"> OS</div>
                        </div>
                        <Select
                            value={{value:this.state.os, label:this.state.os}}
                            onChange={this.handleSelectOs}
                            options={constant.osoptions}
                            isSearchable={true}
                            isClearable={true}
                            className="module-select"
                        />
                    </div>
                </div>
                <div className="edit-modal-select-group">
                    <div className="edit-modal-input-wrapper">
                        <div className="edit-modal-topic-wrapper">
                            <FontAwesomeIcon icon="shield-alt" className="edit-modal-topic-icon"/>
                            <div className="edit-modal-topic-text"> Warranty</div>
                        </div>
                        <Select
                            value={{value: this.state.warranty, label: this.state.warranty}}
                            onChange={this.handleSelectWarranty}
                            options={constant.warrantyoptions}
                            isSearchable={true}
                            isClearable={true}
                            className="module-select"
                        />
                    </div>
                    <div className="edit-modal-input-wrapper" style={{marginLeft: '3%'}}>
                        <div className="edit-modal-topic-wrapper">
                            <FontAwesomeIcon icon="microchip" className="edit-modal-topic-icon"/>
                            <div className="edit-modal-topic-text"> Processor</div>
                        </div>
                        <Select
                            value={{value:this.state.processor, label:this.state.processor}}
                            onChange={this.handleSelectProcessor}
                            options={constant.processoroptions}
                            isSearchable={true}
                            isClearable={true}
                            className="module-select-processor"
                        />
                    </div>
                </div>
                <div className="edit-modal-select-group">
                    <div className="edit-modal-input-wrapper" style={{width: '30%'}}>
                        <div className="edit-modal-topic-wrapper">
                            <FontAwesomeIcon icon="memory" className="edit-modal-topic-icon"/>
                            <div className="edit-modal-topic-text"> Ram</div>
                        </div>
                        <Select
                            value={{value: this.state.ram, label: this.state.ram}}
                            onChange={this.handleSelectRam}
                            options={constant.ramoptions}
                            isSearchable={true}
                            isClearable={true}
                            className="module-select"
                        />
                    </div>
                    <div className="edit-modal-input-wrapper" style={{width: '67%', marginLeft: '2%'}}>
                        <div className="edit-modal-topic-wrapper">
                            <FontAwesomeIcon icon="hdd" className="edit-modal-topic-icon"/>
                            <div className="edit-modal-topic-text"> Harddisk</div>
                        </div>
                        <Select
                            value={this.setLabelArray(this.state.harddisk)}
                            onChange={this.handleSelectHarddisk}
                            options={constant.harddiskoptions}
                            isSearchable={true}
                            isClearable={true}
                            isMulti={true}
                            className="module-select-hdd"
                        />
                    </div>
                </div>
                <div className="edit-modal-input-group">
                    <div className="edit-modal-input-wrapper">
                        <div className="edit-modal-topic-wrapper">
                            <FontAwesomeIcon icon="wifi" className="edit-modal-topic-icon"/>
                            <div className="edit-modal-topic-text"> Wifi-Mac-Address</div>
                        </div>
                        <input type="text" 
                            className="edit-modal-input-half"
                            value={this.state.mac_wifi}
                            onChange={e => this.handleChangeWithKey("mac_wifi",e)}/>
                    </div>
                    <div className="edit-modal-input-wrapper" style={{marginLeft: '3%'}}>
                        <div className="edit-modal-topic-wrapper">
                            <FontAwesomeIcon icon="home" className="edit-modal-topic-icon"/>
                            <div className="edit-modal-topic-text"> Lan-Mac-Address</div>
                        </div>
                        <input type="text" 
                            className="edit-modal-input-half"
                            value={this.state.mac_lan}
                            onChange={e => this.handleChangeWithKey("mac_lan",e)}/>
                    </div>
                </div>
                <div className="edit-modal-input-group">
                    <div className="edit-modal-input-wrapper">
                        <div className="edit-modal-topic-wrapper">
                            <FontAwesomeIcon icon="barcode" className="edit-modal-topic-icon"/>
                            <div className="edit-modal-topic-text"> OS Serial Number</div>
                        </div>
                        <input type="text" 
                            className="edit-modal-input-half"
                            value={this.state.serial}
                            onChange={e => this.handleChangeWithKey("serial",e)}/>
                    </div>
                    <div className="edit-modal-input-wrapper" style={{marginLeft: '3%'}}>
                        <div className="edit-modal-topic-wrapper">
                            <FontAwesomeIcon icon="wrench" className="edit-modal-topic-icon"/>
                            <div className="edit-modal-topic-text"> Service Tag</div>
                        </div>
                        <input type="text" 
                            className="edit-modal-input-half"
                            value={this.state.service_tag}
                            onChange={e => this.handleChangeWithKey("service_tag",e)}/>
                    </div>
                </div>
                <div className="center-modal-topic-wrapper">
                    <FontAwesomeIcon icon="folder" className="view-modal-topic-icon"/>
                    <div className="view-modal-topic-text" style={{marginLeft: '16px'}}> Programs </div>
                </div>
                    <Select
                        value={this.setLabelArray(this.state.programs)}
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
                        onChange={e => this.handleChangeWithKey(e,"email")}/>
                    <div className="user-modal-topic-wrapper">
                        <FontAwesomeIcon icon="building" className="view-modal-topic-icon"/>
                        <div className="view-modal-topic-text" style={{marginLeft: '16px'}}> Department </div>
                    </div>
                    <input type="text" 
                        className="user-modal-input"
                        value={this.state.department}
                        onChange={e => this.handleChangeWithKey(e,"department")}/>
                </div>
                <button className="edit-modal-submit-button" onClick={() => this.editAsset()}>Submit</button>
            </div>
        )
    }

}

export default EditModal
