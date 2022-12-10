import { Nav, Navbar, Offcanvas } from 'react-bootstrap'

function Sidenav() {
  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar
          className='fixed-top pt-0'
          id='sidebar-wrapper'
          key={expand}
          bg='transparent'
          expand={expand}
          role='navigation'
        >
          <div className='ms-auto bg-light bar'>
            <Navbar.Toggle
              style={{ border: '1px solid white', boxShadow: 'none' }}
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
          </div>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement='end'
          >
            <Offcanvas.Header className='ms-auto' closeButton />
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link className='text-uppercase' href='#action0'>
                  Home
                </Nav.Link>
                <Nav.Link className='text-uppercase' href='#action1'>
                  Internet of Things and Machine Learning
                </Nav.Link>
                <Nav.Link className='text-uppercase' href='#action2'>
                  Robotics and Arduino Training
                </Nav.Link>
                <Nav.Link className='text-uppercase' href='#action3'>
                  Web Development Training
                </Nav.Link>
                <Nav.Link className='text-uppercase' href='#action4'>
                  Voice Assistant App Training
                </Nav.Link>
                <Nav.Link className='text-uppercase' href='#action5'>
                  Augumented Reality Training
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      ))}
    </>
  )
}

export default Sidenav
