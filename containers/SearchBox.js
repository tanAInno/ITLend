import React, {Component} from 'react'
import '../css/app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setAssetList } from '../actions/assetAction'
import { connect } from 'react-redux'

class SearchBox extends Component {

    state = {
        name: '',
        os: '',
        loaner: ''
    }

    onInputChange(key,e){
        if(key == "name")
            this.setState({name : e.target.value},() => this.onChangeSearch())
        if(key == "os")
            this.setState({os : e.target.value},() => this.onChangeSearch())
        if(key == "loaner")
            this.setState({loaner : e.target.value},() => this.onChangeSearch())
    }

    onChangeSearch(){
        const filter_list = []
        const asset_list = this.props.assetReducer.perm_asset_list;
        for(let i=0; i < asset_list.length; i++){
            if(asset_list[i].name.toLowerCase().match(this.state.name.toLowerCase()) || this.state.name.length <= 0)
            if(asset_list[i].os.toLowerCase().match(this.state.os.toLowerCase()) || this.state.os.length <= 0)
            if(asset_list[i].loaner.toLowerCase().match(this.state.loaner.toLowerCase()) || this.state.loaner.length <= 0)
                filter_list.push(asset_list[i])
        }
        this.props.dispatch(setAssetList(filter_list))
    }

    render(){
        return(
            <div className="search-box-wrapper">
                <div className="search-header-wrapper">
                    <FontAwesomeIcon icon="search" className="search-icon"/>
                    <div className="search-header"> Search</div>
                </div>
                <div className="margin-provider"/>
                <div className="search-input-wrapper">
                    <FontAwesomeIcon icon="laptop" className="search-topic-icon"/>
                    <div className="search-topic-header"> Device Name</div>
                </div>
                <input type="text" 
                    className="search-input"
                    value={this.state.name}
                    onChange={e => this.onInputChange("name",e)}/>
                <div className="search-input-wrapper">
                    <FontAwesomeIcon icon="apple-alt" style={{fontSize: '24px'}}className="search-topic-icon"/>
                    <div className="search-topic-header" style={{marginTop: '5px'}}> OS</div>
                </div>
                <input type="text" 
                    className="search-input"
                    value={this.state.os}
                    onChange={e => this.onInputChange("os",e)}/>
                <div className="search-input-wrapper">
                    <FontAwesomeIcon icon="user-alt" className="search-topic-icon"/>
                    <div className="search-topic-header"> Loaner</div>
                </div>
                <input type="text" 
                    className="search-input"
                    value={this.state.loaner}
                    onChange={e => this.onInputChange("loaner",e)}/>
            </div>
        )
    }
}

export default connect(state => state)(SearchBox)