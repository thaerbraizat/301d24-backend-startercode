import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'

export class ApiData extends Component {
    render() {
        return (
            this.props.apiData.map(item => {
                console.log(item);
                return (

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image_url} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.ingredients}
                            </Card.Text>
                            <Button variant="primary" onClick={}>faviorate</Button>
                        </Card.Body>
                    </Card>
                )
            })
        )
    }
}

export default ApiData
