import React, {Component} from 'react'
import Card from '../component/card'
import '../css/app.css'
import { Tabs,TabLink,TabContent } from 'react-tabs-redux'

class Table extends Component {
    render(){
        return(
            <Tabs className="table-box-wrapper"
                activeLinkStyle={{backgroundColor: '#70709c'}}>
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
                </div>
                <TabContent for="all">
                    <Card assetName="PC1"/>
                    <Card assetName="PC2"/>
                    <Card assetName="PC3"/>
                </TabContent>
                <TabContent for="avai">
                    <Card assetName="PC1"/>
                    <Card assetName="PC2"/>
                </TabContent>
                <TabContent for="loan" >
                    <Card assetName="PC3"/>
                </TabContent>
            </Tabs>
        )
    }
}

export default Table