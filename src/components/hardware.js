import { Container, Card, Row, Col } from 'react-bootstrap'

function Hardware() {
  return (
    <div className='product'>
      <Container>
        <h2>TRAININGS WITH HARDWARE KIT:</h2>
        <Row>
          <Col lg={4} className='flex'>
            <Card className='card text-center'>
              <Card.Img
                className='image'
                src='https://ik.imagekit.io/2e35v6mja/iot.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670695332670'
                alt='IoTandML'
                rounded
              />
              <Card.Title>
                <h5>Internet of Things and Machine Learning</h5>
                <h4>
                  Rs. 2,750.00{' '}
                  <small>
                    <s className='text-danger'>Rs. 9,600.00</s>
                  </small>
                </h4>
              </Card.Title>
            </Card>
          </Col>
          <Col lg={4} className='flex'>
            <Card className='card card2 text-center'>
              <Card.Img
                className='image'
                src='https://ik.imagekit.io/2e35v6mja/robo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670695331392'
                alt='ROBOandARDU'
                rounded
              />
              <Card.Title>
                <h5>Robotics and Arduino Training</h5>
                <h4>
                  Rs. 7,500.00{' '}
                  <small>
                    <s className='text-danger'>Rs. 9,600.00</s>
                  </small>
                </h4>
              </Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hardware
