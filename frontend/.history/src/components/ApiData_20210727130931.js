import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'

export class ApiData extends Component {
    render() {
        return (
            this.props.apiData.map(item => {
                return (

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary"></Button>
                        </Card.Body>
                    </Card>
                )
            })
        )
    }
}

export default ApiData