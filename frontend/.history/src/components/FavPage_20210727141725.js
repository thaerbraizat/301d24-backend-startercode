import axios from 'axios'
import React, { Component } from 'react'
import ApiFavData from './ApiFavData'

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
    deleteFav =(id)=>{
        axios.delete(`http://localhost:8001/delete/${id}`).then(res =>{
            this.import React from 'react'
            import renderer from 'react-test-renderer'
            
            import { FavPage } from '../FavPage'
            
            describe('<FavPage />', () => {
                const defaultProps = {}
                const wrapper = renderer.create(<FavPage {...defaultProps} />)
            
                test('render', () => {
                    expect(wrapper).toMatchSnapshot()
                })
            })
            
        })

    }
    render() {
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
