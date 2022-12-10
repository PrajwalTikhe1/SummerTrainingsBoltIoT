import { Container, Image } from 'react-bootstrap'

function Main() {
  return (
    <div className='main'>
      <div className='topbar flex'>
        <Image
          src='https://ik.imagekit.io/2e35v6mja/offer.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670621290778'
          alt='offer'
          fluid
        />
        <h6>Limited time 90% OFF. Register NOW!</h6>
      </div>
      <div className='background'>
        <Container>
          <nav className='navbar flex'>
            <Image
              src='https://ik.imagekit.io/2e35v6mja/bolt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670622076213'
              alt='boltlogo'
              fluid
            />
          </nav>
          <section className='text-center'>
            <h1>SUMMER TRAININGS</h1>
            <h4 className='mt-4'>
              Learn In-demand Skills with Hands-On Projects
            </h4>
            <h4>
              Excellent for Beginners + Earn Certificate + Internship Assistance
            </h4>
          </section>
        </Container>
      </div>
    </div>
  )
}

export default Main
