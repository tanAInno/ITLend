import React,{ Component } from 'react'
import '../css/editmodal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import route from '../api'

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
        warranty : this.props.warranty
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
    }

    async editAsset(){
        console.log(this.props.id)
        await axios.put(route+"assets/"+this.props.id,{
            name: this.state.name,
            os: this.state.os,
            brand: this.state.brand,
            ram: this.state.ram,
            harddisk: this.state.harddisk,
            status: this.props.status,
            loaner: this.props.loaner,
            processor: this.props.processor,
            serial: this.props.serial,
            mac_wifi: this.props.mac_wifi,
            mac_lan: this.props.mac_lan,
            warranty: this.props.warranty
        }).catch(error => console.log(error))
        location.reload()
    }

    render() {
        return(
            <div className="edit-modal-container">
                <div className="edit-modal-header-wrapper">
                    <FontAwesomeIcon icon="edit" className="edit-modal-icon"/>
                    <div className="edit-modal-header">Edit Asset</div>
                </div>
                <div className="edit-modal-input-group">
                    <div className="edit-modal-input-wrapper">
                        <div className="edit-modal-topic-wrapper">
                            <FontAwesomeIcon icon="laptop" className="edit-modal-topic-icon"/>
                            <div className="edit-modal-topic-text"> Asset Name</div>
                        </div>
                        <input type="text" 
                            className="edit-modal-input-half"
                            value={this.state.name}
                            onChange={e => this.handleChangeWithKey("name",e)}/>
                    </div>
                    <div className="edit-modal-input-wrapper" style={{marginLeft: '3%'}}>
                        <div className="edit-modal-topic-wrapper">
                            <FontAwesomeIcon icon="apple-alt" className="edit-modal-topic-icon"/>
                            <div className="edit-modal-topic-text"> OS</div>
                        </div>
                        <input type="text" 
                            className="edit-modal-input-half"
                            value={this.state.os}
                            onChange={e => this.handleChangeWithKey("os",e)}/>
                    </div>
                </div>
                <div className="edit-modal-input-group">
                    <div className="edit-modal-input-wrapper">
                        <div className="edit-modal-topic-wrapper">
                            <FontAwesomeIcon icon="tags" className="edit-modal-topic-icon"/>
                            <div className="edit-modal-topic-text"> Brand</div>
                        </div>
                        <input type="text" 
                            className="edit-modal-input-half"
                            value={this.state.brand}
                            onChange={e => this.handleChangeWithKey("brand",e)}/>
                    </div>
                    <div className="edit-modal-input-wrapper" style={{marginLeft: '3%'}}>
                        <div className="edit-modal-topic-wrapper">
                            <FontAwesomeIcon icon="microchip" className="edit-modal-topic-icon"/>
                            <div className="edit-modal-topic-text"> Processor</div>
                        </div>
                        <input type="text" 
                            className="edit-modal-input-half"
                            value={this.state.processor}
                            onChange={e => this.handleChangeWithKey("processor",e)}/>
                    </div>
                </div>
                <div className="edit-modal-input-group">
                    <div className="edit-modal-input-wrapper">
                        <div className="edit-modal-topic-wrapper">
                            <FontAwesomeIcon icon="memory" className="edit-modal-topic-icon"/>
                            <div className="edit-modal-topic-text"> Ram</div>
                        </div>
                        <input type="text" 
                            className="edit-modal-input-half"
                            value={this.state.ram}
                            onChange={e => this.handleChangeWithKey("ram",e)}/>
                    </div>
                    <div className="edit-modal-input-wrapper" style={{marginLeft: '3%'}}>
                        <div className="edit-modal-topic-wrapper">
                            <FontAwesomeIcon icon="hdd" className="edit-modal-topic-icon"/>
                            <div className="edit-modal-topic-text"> Harddisk</div>
                        </div>
                        <input type="text" 
                            className="edit-modal-input-half"
                            value={this.state.harddisk}
                            onChange={e => this.handleChangeWithKey("harddisk",e)}/>
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
                            <FontAwesomeIcon icon="shield-alt" className="edit-modal-topic-icon"/>
                            <div className="edit-modal-topic-text"> Warranty</div>
                        </div>
                        <input type="text" 
                            className="edit-modal-input-half"
                            value={this.state.warranty}
                            onChange={e => this.handleChangeWithKey("warranty",e)}/>
                    </div>
                </div>
                <div className="edit-modal-filter-box-wrapper">
                    <div className="edit-modal-filter-box-set">
                        <div className="filter-box-group">
                            <div className="filter-box">
                                <label><input type="checkbox"/>  Acrobat</label>
                            </div>
                            <div className="filter-box">
                                <label><input type="checkbox"/>  Office365</label>
                            </div>
                        </div>
                        <div className="filter-box-group">
                            <div className="filter-box">
                                <label><input type="checkbox"/>  Autocad</label>
                            </div>
                            <div className="filter-box">
                                <label><input type="checkbox"/>  Nod32</label>
                            </div>
                        </div>
                        <div className="filter-box-group">
                            <div className="filter-box">
                                <label><input type="checkbox"/>  PDF Creator</label>
                            </div>
                            <div className="filter-box">
                                <label><input type="checkbox"/>  Win Zip</label>
                            </div>
                        </div>
                        <div className="filter-box-group">
                            <div className="filter-box">
                                <label><input type="checkbox"/>  Printer Driver</label>
                            </div>
                            <div className="filter-box">
                                <label><input type="checkbox"/>  Photoshop</label>
                            </div>
                        </div>
                        <div className="filter-box-group">
                            <div className="filter-box">
                                <label><input type="checkbox"/>  Team Viewer</label>
                            </div>
                            <div className="filter-box">
                                <label><input type="checkbox"/>  iCloud</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="edit-modal-submit-button" onClick={() => this.editAsset()}>Submit</button>
            </div>
        )
    }

}

export default EditModal
