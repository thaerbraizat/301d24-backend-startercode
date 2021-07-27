import axios from 'axios'
import React, { Component } from 'react'
import ApiData from './ApiData'

export class Home extends Component {
    constructor() {
        super()
        this.state = {
            apiData:[],
            showData:false,
            ma
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

addFaviorate =async(item)=>{
    const saveToDb =await axios("http://localhost:8000/create");
    this.setState({

    })
}

render() {
    console.log(this.state.apiData);
    return (
        <>
           {this.state.showData &&
           <ApiData
           apiData={this.state.apiData}
           />}
        </>
    )
}
}

export default Home
