import React, {Component} from 'react'
import '../css/app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FilterBox extends Component { 

    render(){
        return(
            <div className="filter-box-wrapper">
                <div className="filter-header-wrapper">
                    <FontAwesomeIcon icon="filter" className="filter-icon"/>
                    <div className="filter-header-text">Filter</div>
                </div>
                    <div className="filter-box-set">
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
                        <div className="filter-button-wrapper">
                            <button className="filter-button">Go!</button>
                        </div>
                    </div>
            </div>
        )
    }

}

export default FilterBox