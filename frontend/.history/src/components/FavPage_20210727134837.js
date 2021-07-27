import axios from 'axios'
import React, { Component } from 'react'

export class FavPage extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    componentDidMount=()=>{

       axios.get("http://localhost:8001/fav-list").then()

    }
    render() {
        return (
            <>
            </>
        )
    }
}

export default FavPage
