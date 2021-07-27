import React, { Component } from 'react'

export class ApiFavData extends Component {
    constructor(){
        super()
        this.setState={
            show:false,
            item:this.props.favData
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ApiFavData
