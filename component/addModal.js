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
        harddisk : ''
    }

    closeModal(){
        this.props.dispatch(setAddModal(false))
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
    }

    async addAsset(){
        await axios.post(route+"assets/",{
            name: this.state.name,
            os: this.state.os,
            brand: this.state.brand,
            ram: this.state.ram,
            harddisk: this.state.harddisk,
            status: "Available"
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
                <div className="add-modal-topic-wrapper">
                    <FontAwesomeIcon icon="laptop" className="add-modal-topic-icon"/>
                    <div className="add-modal-topic-text"> Asset Name</div>
                </div>
                <input type="text" 
                    className="add-modal-input"
                    value={this.state.name}
                    onChange={e => this.handleChangeWithKey("name",e)}/>
                <div className="add-modal-input-group">
                    <div className="add-modal-input-wrapper">
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="apple-alt" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> OS</div>
                        </div>
                        <input type="text" 
                            className="add-modal-input-half"
                            value={this.state.os}
                            onChange={e => this.handleChangeWithKey("os",e)}/>
                    </div>
                    <div className="add-modal-input-wrapper" style={{marginLeft: '3%'}}>
                        <div className="add-modal-topic-wrapper">
                            <FontAwesomeIcon icon="tags" className="add-modal-topic-icon"/>
                            <div className="add-modal-topic-text"> Brand</div>
                        </div>
                        <input type="text" 
                            className="add-modal-input-half"
                            value={this.state.brand}
                            onChange={e => this.handleChangeWithKey("brand",e)}/>
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
                <div className="add-modal-filter-box-wrapper">
                    <div className="add-modal-filter-box-set">
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
                <div className="add-modal-button-group">
                    <button className="add-modal-add-button" onClick={() => this.addAsset()}>Add</button>
                    <button className="add-modal-cancel-button" onClick={() => this.closeModal()}>Cancel</button>
                </div>
            </div>
        )
    }

}

export default connect(state => state)(AddModal)