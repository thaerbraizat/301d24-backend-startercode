import axios from 'axios'
import React, { Component } from 'react'

export class FavPage extends Component {
    constructor() {
        super()
        this.state = {
            favData=[],
            showFav
        }
    }
    componentDidMount = () => {

        axios.get("http://localhost:8001/fav-list").then(res => {
            this.setState({

            }
            )
        })

    }
    render() {
        return (
            <>
            </>
        )
    }
}

export default FavPage
