import { Container, Image, Row, Col, Button } from 'react-bootstrap'

function Award() {
  return (
    <div className='award'>
      <Container>
        <Row className='mt-5 flex'>
          <Col lg={5}>
            <Image
              src='https://ik.imagekit.io/2e35v6mja/micro.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670697644072'
              alt='micro'
              className='micro'
              fluid
            />
          </Col>
          <Col lg={6}>
            <h3>Learn from Award Winning Industry Experts</h3>
            <p className='para-head mt-3'>
              All our trainings are taught by engineers and software developers
              with more than 10 years of industry experience.
            </p>
            <h5>Awards and Recognition</h5>
            <p>
              <b>1. </b>We were amongst the startups that{' '}
              <b> accompanied Prime Minister Narendra Modi </b> to the Silicon
              Valley and were showcased at the first Indo-U.S. Startup Konnect
              in September 2015.
            </p>
            <p>
              <b>2. Winner</b> of the DST Lockheed Martin India Innovation
              Growth program 2016
            </p>
            <p>
              <b>3. Winner</b> of the Economic Times Power of Ideas 2016
            </p>
            <p>
              The Bolt IoT and ML Platform was featured by Raspberry Pi as the
              best maker hardware in 2018.
            </p>
            <Button className='p-2 px-3 btn-secondary'>KNOW MORE</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Award
