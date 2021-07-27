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
            <>
                
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.state.item.image_url} />
                        <Card.Body>
                            <Card.Title>{this.state.item.title}</Card.Title>
                            <Card.Text>
                                {this.state.item.ingredients}
                            </Card.Text>
                            <Button variant="primary" onClick={e =>{this.props.addFaviorate(item)}}>delete</Button>
                        </Card.Body>
                    </Card>
            </>
        )
    }
}

export default ApiFavData
