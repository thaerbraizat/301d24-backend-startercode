import axios from 'axios'
import React, { Component } from 'react'

export class Home extends Component {
    constructor() {
        super()
        this.state = {
            apiData:[],
            showData:false,
        }
    
}

componentDidMount = async ()=>{
    const url = "http://localhost:8000/retreive"
    const responsData = await axios(url);
    this.setState({
        apiData:responsData.data,
        showData:true,
    })
}


render() {
    console.log(this.state.apiData);
    return (
        <>
           {this.state.showData}
        </>
    )
}
}

export default Home
