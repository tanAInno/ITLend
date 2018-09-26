import React, {Component} from 'react'
import Banner from '../component/banner'
import Card from '../component/card'
import '../css/app.css'
import Table from '../containers/Table'
import SearchBox from '../containers/SearchBox'
import FilterBox from '../containers/FilterBox'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faEye, faEdit, faTrashAlt, faLaptop, faAppleAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch,faEye,faEdit,faTrashAlt,faLaptop,faAppleAlt,faUserAlt)

class App extends Component {
    render () {
        return (
            <div className="app-container">
                <Banner className="app-banner"/>
                <div className="app-detail-container">
                    <div className="table-container">
                        <Table/>
                    </div>
                    <div className="side-tab-container">
                        <div className="search-box-container">
                            <SearchBox/>
                        </div>
                        <div className="filter-box-container">
                            <FilterBox/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;