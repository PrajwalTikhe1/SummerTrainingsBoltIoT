import { Container, Card, Row, Col } from 'react-bootstrap'

function Software() {
  return (
    <div className='product software bg-light'>
      <Container>
        <h2 className='soft-head'>SOFTWARE TRAININGS WE OFFER:</h2>
        <Row>
          <Col lg={4} className='flex'>
            <Card className='card3 bg-light text-center'>
              <Card.Img
                className='image'
                src='https://ik.imagekit.io/2e35v6mja/web.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670696270498'
                alt='WebDev'
                rounded
              />
              <Card.Title>
                <h5>Web Development Training</h5>
                <h4>
                  Rs. 1,750.00{' '}
                  <small>
                    <s className='text-danger'>Rs. 9,000.00</s>
                  </small>
                </h4>
              </Card.Title>
            </Card>
          </Col>
          <Col lg={4} className='flex'>
            <Card className='card3 bg-light text-center'>
              <Card.Img
                className='image'
                src='https://ik.imagekit.io/2e35v6mja/voice.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670696835244'
                alt='VoiceApp'
                rounded
              />
              <Card.Title>
                <h5>Voice Assistant App Training</h5>
                <h4>
                  Rs. 1,750.00{' '}
                  <small>
                    <s className='text-danger'>Rs. 9,000.00</s>
                  </small>
                </h4>
              </Card.Title>
            </Card>
          </Col>
          <Col lg={4} className='flex'>
            <Card className='card3 bg-light text-center'>
              <Card.Img
                className='image'
                src='https://ik.imagekit.io/2e35v6mja/ar.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670696819845'
                alt='AR'
                rounded
              />
              <Card.Title>
                <h5>Augumented Reality Training</h5>
                <h4>
                  Rs. 1,750.00{' '}
                  <small>
                    <s className='text-danger'>Rs. 9,000.00</s>
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

export default Software
