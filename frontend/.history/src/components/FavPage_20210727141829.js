import axios from 'axios'
import React, { Component } from 'react'
import ApiFavData from './ApiFavData'

export class FavPage extends Component {
    constructor() {
        super()
        this.state = {
            favData: [],
            showFavData: false,
            hide:false
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
    deleteFav =(id)=>{
        axios.delete(`http://localhost:8001/delete/${id}`).then(res =>{
            this.setState({
                hide:true,
            })
        })

    }
    render() {
        if(this.state.hide){
            re
        }
        return (
            <>
                {this.state.showFavData && this.state.favData.map((item, i) => {
                    return (
                        <ApiFavData
                            key={i}
                            favData={item}
                        />
                    )
                })}
            </>
        )
    }
}

export default FavPage
