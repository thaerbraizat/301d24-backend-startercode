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
                        <Card.Img variant="top" src={this.state.itemimage_url} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.ingredients}
                            </Card.Text>
                            <Button variant="primary" onClick={e =>{this.props.addFaviorate(item)}}>faviorate</Button>
                        </Card.Body>
                    </Card>
            </>
        )
    }
}

export default ApiFavData
