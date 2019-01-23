import React, {Component} from 'react'
import * as constant from '../constants'

class ProgramTable extends Component {

    state = {
        program : [],
        allProgram : [],
        avaiProgram : []
    }

    setProgramArr(){
        let tempArr = []
        for(let i = 0;i < this.state.allProgram.length;i++){
            if(this.state.avaiProgram.includes(this.state.allProgram[i]))
                tempArr.push({value: this.state.allProgram[i],avai: true})
            else
                tempArr.push({value: this.state.allProgram[i],avai: false})
        }
        this.setState({program : tempArr},() => console.log(this.state.program))
    }

    setAllProgram(){
        let tempArr = []
        for(let i = 0;i < constant.programoptions.length;i++){
            console.log(constant.programoptions[i])
            tempArr.push(constant.programoptions[i].value)
        }
        this.setState({allProgram : tempArr},() => this.setProgramArr())
    }

    setAvaiProgram(){
         this.setState({avaiProgram : this.props.programs},() => this.setProgramArr())
    }

    componentDidMount(){
        this.setAllProgram()
        this.setAvaiProgram()
    }

    renderAvaiBox(avai){
        if(avai)
            return <div className="program-card-avai-green"/>
        else
            return <div className="program-card-avai-red"/>
    }

    render() {
        return(
            <div className="program-card-container">
                { this.state.program.map((data,index) => {
                    return(
                        <div className="program-card-wrapper">
                            <div className="program-card-text">{data.value}</div>
                            {this.renderAvaiBox(data.avai)}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ProgramTable