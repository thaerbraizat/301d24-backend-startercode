import axios from 'axios'
import React, { Component } from 'react'

export class Home extends Component {
    constructor() {
        super()
        this.state = {
            apiData=[]
        }
    
}

componentDidMount = async ()=>{
    const url = "http://localhost:8000/retreive"
    const responsData = await axios(url);
    this.setState({
        apiData:responsData.data
    })
}


render() {
    console.log(this.state.apiData);
    return (
        <>
            <h1> Home</h1>
        </>
    )
}
}

export default Home
