import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const GridBs = () => {
  return (
   <Container fluid='md'>
    <Row>
    
    <Col md={6} xl={6} sm={3}>
        <div className='bg-primary'>
            Grid1
        </div>
    </Col>
    <Col>
        <div className='bg-warning'>
            Grid2
        </div>
    </Col> <Col>
        <div className='bg-secandry'>
            Grid3
        </div>
    </Col> <Col>
        <div className='bg-danger'>
            Grid4
        </div>
    </Col>
    </Row>

    <Row className='mt-4'>
    
    <Col>
        <div className='bg-primary'>
            Grid1
        </div>
    </Col>
    <Col>
        <div className='bg-warning'>
            Grid2
        </div>
    </Col> <Col>
        <div className='bg-secandry'>
            Grid3
        </div>
    </Col> <Col>
        <div className='bg-danger'>
            Grid4
        </div>
    </Col>
    </Row>
   </Container>
  )
}

export default GridBs