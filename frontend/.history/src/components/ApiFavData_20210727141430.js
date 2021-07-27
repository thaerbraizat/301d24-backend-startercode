import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
export class ApiFavData extends Component {
    constructor(props){
        super()
        this.setState={
            show:false,
            item:this.props.favData
        }
    }
    render() {
        return (
            <>
                
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.state.item.image_url} />
                        <Card.Body>
                            <Card.Title>{this.state.item.title}</Card.Title>
                            <Card.Text>
                                {this.state.item.ingredients}
                            </Card.Text>
                            <Button variant="primary" onClick={e =>{this.delete(item)}}>delete</Button>
                        </Card.Body>
                    </Card>
            </>
        )
    }
}

export default ApiFavData
