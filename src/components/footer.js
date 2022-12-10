import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row className='flex'>
          <Col lg={1}></Col>
          <Col lg={5} className='text-start'>
            <h5 className='text-light text-start add'>Address</h5>
            <p className='text-light'>
              79, 11th Cross Rd, Binnamangala <br />
              Indiranagar, Bengaluru <br /> Karnataka 560038,India
            </p>
            <p className='text-light mt-5'>
              <span className='me-2'>
                <i className='fa-solid fa-phone' />
              </span>
              (+91) 8881197198
              <br />
              <span className='me-2 mt-2'>
                <i className='fa-solid fa-envelope' />
              </span>
              support@boltiot.com
            </p>
          </Col>
          <Col lg={5} className='text-start text-light'>
            <h5 className='ref'>Refund Policy</h5>
            <p className='mb-4'>Refund within 10 days of delivery</p>
            <h5>Important links:</h5>
            <text>About us</text> <br />
            <text>Privacy Policy </text> <br />
            <text>Terms of service</text> <br />
            <text>Career </text> <br />
            <text>Bolt Cloud </text> <br />
            <text>Resources for Students</text>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
