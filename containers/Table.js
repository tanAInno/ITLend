import React, {Component} from 'react'
import Card from '../component/card'
import '../css/app.css'
import { Tabs,TabLink,TabContent } from 'react-tabs-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal'
import AddModal from '../component/addModal'
import { setAddModal } from '../actions/modalAction'
import { connect } from 'react-redux'
import route from '../api'
import axios from 'axios'
import { setAssetList,setAvailableAssetList,setOnLoanAssetList,setPermaAssetList } from '../actions/assetAction'

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

class Table extends Component {

    constructor(){
        super()

        this.openAddModal = this.openAddModal.bind(this);
        this.afterOpenAddModal = this.afterOpenAddModal.bind(this);
        this.closeAddModal = this.closeAddModal.bind(this);
    }

    componentDidMount(){
        this.getAssets()
    }

    async getAssets() {
        await axios.get(route+"assets/")
        .then(response => {
            console.log(response.data.data)
            const asset_list = response.data.data.map(c => {
                return({
                    id: c._id,
                    name: c.name,
                    os: c.os,
                    status: c.status,
                    loaner: c.loaner,
                    brand: c.brand,
                    ram: c.ram,
                    harddisk: c.harddisk,
                    programs: c.programs,
                })
            })
            this.props.dispatch(setPermaAssetList(asset_list))
            this.props.dispatch(setAssetList(asset_list))
            this.setOptionList(asset_list)
        }).catch(error => console.log(error))
    }

    setOptionList(asset_list){
        const avai_list = []
        const loan_list = []
            for(let i=0; i < asset_list.length;i++){
                console.log(i)
                if(asset_list[i].status == "Available")
                    avai_list.push(asset_list[i])
                else if(asset_list[i].status == "On Loan")
                    loan_list.push(asset_list[i])
            }
        this.props.dispatch(setAvailableAssetList(avai_list))
        this.props.dispatch(setOnLoanAssetList(loan_list))
        console.log(this.props.assetReducer.avai_list)
        console.log(this.props.assetReducer.loan_list)
    }

    openAddModal() {
        this.props.dispatch(setAddModal(true))
    }

    afterOpenAddModal() {
    }

    closeAddModal() {
        this.props.dispatch(setAddModal(false))
    }

    render(){
        console.log(this.props.assetReducer)
        return(
            <Tabs className="table-box-wrapper"
                activeLinkStyle={{backgroundColor: '#249abd'}}>
                <div className="tab-box-container" >
                    <TabLink className="tab-container" to="all">
                        All  
                    </TabLink>
                    <TabLink className="tab-container" to="avai">
                        Available
                    </TabLink>
                    <TabLink className="tab-container" to="loan">
                        On Loan
                    </TabLink>
                    <div className="tab-menu-bar"></div>
                    <button className="add-button" onClick={this.openAddModal}>
                        <FontAwesomeIcon icon="plus" className="add-icon"/>
                    </button>
                    <Modal
                    isOpen={this.props.modalReducer.addModalOpen}
                    onAfterOpen={this.afterOpenAddModal}
                    onRequestClose={this.closeAddModal}
                    style={customStyles}
                    contentLabel="Add Asset"
                    >
                        <AddModal/>
                    </Modal>
                </div>
                <div className="table-header-container">
                    <FontAwesomeIcon icon="desktop" className="table-header-icon"/>
                    <div className="table-header-name">Name</div>
                    <div className="table-header-status">Status</div>
                    <div className="table-header-os">OS</div>
                    <div className="table-header-loaner">Loaner</div>
                </div>
                <TabContent for="all">
                    {this.props.assetReducer.asset_list.map((data,index) => {
                        return(
                            <Card
                                id={data.id}
                                name={data.name}
                                status={data.status}
                                os={data.os}
                                loaner={data.loaner}
                                ram={data.ram}
                                brand={data.brand}
                                harddisk={data.harddisk}
                            />
                        )
                    })}
                </TabContent>
                <TabContent for="avai">
                    {this.props.assetReducer.avai_list.map((data,index) => {
                        return(
                            <Card
                                id={data._id}
                                name={data.name}
                                status={data.status}
                                os={data.os}
                                loaner={data.loaner}
                                ram={data.ram}
                                brand={data.brand}
                                harddisk={data.harddisk}
                            />
                        )
                    })}
                </TabContent>
                <TabContent for="loan" >
                    {this.props.assetReducer.loan_list.map((data,index) => {
                        return(
                            <Card
                                id={data._id}
                                name={data.name}
                                status={data.status}
                                os={data.os}
                                loaner={data.loaner}
                                ram={data.ram}
                                brand={data.brand}
                                harddisk={data.harddisk}
                            />
                        )
                    })}
                </TabContent>
            </Tabs>
        )
    }
}

export default connect(state => state)(Table);