import axios from 'axios'
import React, { Component } from 'react'

export class FavPage extends Component {
    constructor() {
        super()
        this.state = {
            favData: [],
            showFavData: false
        }
    }
    componentDidMount = () => {

        axios.get("http://localhost:8001/fav-list").then(res => {
            this.setState({
                favData: res.data,
                showFavData: true
            }
            )
        })

    }
    render() {
        return (
            <>
               {this.state.showFavData && this.state.favData.map(item =>{
                   return(
                       
                   )
                   
               })}
            </>
        )
    }
}

export default FavPage