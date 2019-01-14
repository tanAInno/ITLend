import React, {Component} from 'react'
import '../css/card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal'
import ViewModal from '../component/viewModal'
import EditModal from '../component/editModal'
import LendModal from '../component/lendModal'
import modalAction, { setViewModal } from '../actions/modalAction'
import { connect } from 'react-redux'
import axios from 'axios'
import route from '../api'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

Modal.setAppElement('body')

class Card extends Component {

    constructor(){
        super()

        this.state = {
            viewModalOpen : false,
            editModalOpen : false,
            deleteModalOpen : false,
            lendModalOpen : false,
            returnModalOpen : false
        }

        this.openViewModal = this.openViewModal.bind(this);
        this.afterOpenViewModal = this.afterOpenViewModal.bind(this);
        this.closeViewModal = this.closeViewModal.bind(this);
        this.openEditModal = this.openEditModal.bind(this);
        this.afterOpenEditModal = this.afterOpenEditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
        this.openDeleteModal = this.openDeleteModal.bind(this);
        this.afterOpenDeleteModal = this.afterOpenDeleteModal.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);
        this.openLendModal = this.openLendModal.bind(this);
        this.afterOpenLendModal = this.afterOpenLendModal.bind(this);
        this.closeLendModal = this.closeLendModal.bind(this);
        this.openReturnModal = this.openReturnModal.bind(this);
        this.afterOpenReturnModal = this.afterOpenReturnModal.bind(this);
        this.closeReturnModal = this.closeReturnModal.bind(this);
    }

    openViewModal() {
        this.setState({viewModalOpen : true})
    }

    afterOpenViewModal() {
    }

    closeViewModal() {
        this.setState({viewModalOpen : false})
    }

    openEditModal() {
        console.log(this.props.id)
        this.setState({editModalOpen : true})
    }

    afterOpenEditModal() {
    }

    closeEditModal() {
        this.setState({editModalOpen : false})
    }

    openDeleteModal() {
        this.setState({deleteModalOpen : true})
    }

    afterOpenDeleteModal() {
    }

    closeDeleteModal() {
        this.setState({deleteModalOpen : false})
    }

    openLendModal() {
        this.setState({lendModalOpen : true})
    }

    afterOpenLendModal() {
    }

    closeLendModal() {
        this.setState({lendModalOpen : false})
    }

    openReturnModal() {
        this.setState({returnModalOpen : true})
    }

    afterOpenReturnModal() {
    }

    closeReturnModal() {
        this.setState({returnModalOpen : false})
    }

    async deleteAsset(){
        await axios.delete(route+"assets/"+this.props.id)
        location.reload()
    }

    async returnAsset(){
        await axios.put(route+"assets/"+this.props.id,{
            name: this.props.name,
            os: this.props.os,
            brand: this.props.brand,
            ram: this.props.ram,
            harddisk: this.props.harddisk,
            status: "Available",
            loaner: "",
            processor: this.props.processor,
            serial: this.props.serial,
            mac_wifi: this.props.mac_wifi,
            mac_lan: this.props.mac_lan,
            warranty: this.props.warranty,
            service_tag: this.props.service_tag,
            email: this.props.email
        }).catch(error => console.log(error))
        location.reload()
    }

    render() {
        return(
            <div className="card-container">
                <div className="card-detail">
                    <div className="card-detail-wrapper">
                        <FontAwesomeIcon icon="laptop" className="asset-icon"/>
                        <div className="asset-name">
                            {this.props.name}
                        </div>
                        {this.props.status == "Available" &&
                            <div className="asset-status-avai">
                                {this.props.status}
                            </div>
                        }
                        {this.props.status == "On Loan" &&
                            <div className="asset-status-loan">
                                {this.props.status}
                            </div>
                        }
                        <div className="asset-os">
                            {this.props.os}
                        </div>
                        <div className="asset-loaner">
                        {this.props.loaner.length <= 0 &&
                            <button className="lend-button" onClick={this.openLendModal}>
                                Lend
                            </button>
                        }
                        {this.props.loaner.length > 0 &&
                            <div className="loaner-wrapper">
                                <div className="loaner-text">
                                    {this.props.loaner}
                                </div>
                                <button className="return-button" onClick={this.openReturnModal}>Return</button>
                            </div>
                        }
                        <Modal
                            isOpen={this.state.lendModalOpen}
                            onAfterOpen={this.afterOpenLendModal}
                            onRequestClose={this.closeLendModal}
                            style={customStyles}
                            contentLabel="Lend Asset"
                            >
                                <LendModal
                                    id={this.props.id}
                                    name={this.props.name}
                                    os={this.props.os}
                                    status={this.props.status}
                                    loaner={this.props.loaner}
                                    ram={this.props.ram}
                                    brand={this.props.brand}
                                    harddisk={this.props.harddisk}
                                    processor={this.props.processor}
                                    serial={this.props.serial}
                                    mac_wifi={this.props.mac_wifi}
                                    mac_lan={this.props.mac_lan}
                                    warranty={this.props.warranty}
                                    service_tag={this.props.service_tag}
                                    email={this.props.email}
                                />
                        </Modal>
                        <Modal
                            isOpen={this.state.returnModalOpen}
                            onAfterOpen={this.afterOpenReturnModal}
                            onRequestClose={this.closeReturnModal}
                            style={customStyles}
                            contentLabel="Return Asset"
                            >
                            <h2 ref={subtitle => this.subtitle = subtitle} className="modal-sub-title">Return Asset</h2>
                                <div className="modal-detail">Are you sure you want to return this asset?</div>
                                <div className="modal-button-wrapper">
                                    <button className="modal-confirm-button" onClick={() => this.returnAsset()}>Confirm</button>
                                    <button onClick={this.closeReturnModal} className="modal-cancel-button">Cancel</button>
                                </div>
                        </Modal>
                        </div>
                    </div>
                </div>
                <div className="button-container">
                    <button className="card-button" title="View this asset" onClick={this.openViewModal}>
                        <FontAwesomeIcon icon="eye" className="view-icon"/>
                    </button>
                    <Modal
                    isOpen={this.state.viewModalOpen}
                    onAfterOpen={this.afterOpenViewModal}
                    onRequestClose={this.closeViewModal}
                    style={customStyles}
                    contentLabel="View Asset"
                    >
                        <ViewModal
                            name={this.props.name}
                            os={this.props.os}
                            status={this.props.status}
                            loaner={this.props.loaner}
                            ram={this.props.ram}
                            brand={this.props.brand}
                            harddisk={this.props.harddisk}
                            processor={this.props.processor}
                            serial={this.props.serial}
                            mac_wifi={this.props.mac_wifi}
                            mac_lan={this.props.mac_lan}
                            warranty={this.props.warranty}
                            service_tag={this.props.service_tag}
                            email={this.props.email}
                        />
                    </Modal>
                    <button className="card-button" title="Edit this asset" onClick={this.openEditModal}>
                        <FontAwesomeIcon icon="edit" className="edit-icon"/>
                    </button>
                    <Modal
                    isOpen={this.state.editModalOpen}
                    onAfterOpen={this.afterOpenEditModal}
                    onRequestClose={this.closeEditModal}
                    style={customStyles}
                    contentLabel="Edit Asset"
                    >
                        <EditModal
                            name={this.props.name}
                            os={this.props.os}
                            ram={this.props.ram}
                            brand={this.props.brand}
                            harddisk={this.props.harddisk}
                            processor={this.props.processor}
                            serial={this.props.serial}
                            mac_wifi={this.props.mac_wifi}
                            mac_lan={this.props.mac_lan}
                            warranty={this.props.warranty}
                            service_tag={this.props.service_tag}
                            email={this.props.email}
                        />
                    </Modal>
                    <button className="card-button" title="Delete this asset" onClick={this.openDeleteModal}>
                        <FontAwesomeIcon icon="trash-alt" className="delete-icon"/>
                    </button>
                    <Modal
                        isOpen={this.state.deleteModalOpen}
                        onAfterOpen={this.afterDeleteOpenModal}
                        onRequestClose={this.closeDeleteModal}
                        style={customStyles}
                        contentLabel="Confirm Deletion"
                    >
                        <h2 ref={subtitle => this.subtitle = subtitle} className="modal-sub-title">Confirm Delete</h2>
                        <div className="modal-detail">Are you sure you want to delete this asset?</div>
                        <div className="modal-button-wrapper">
                            <button className="modal-confirm-button" onClick={() => this.deleteAsset()}>Confirm</button>
                            <button onClick={this.closeDeleteModal} className="modal-cancel-button">Cancel</button>
                        </div>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default connect(state => state)(Card)