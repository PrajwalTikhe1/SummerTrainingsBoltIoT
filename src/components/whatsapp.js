import { Image } from 'react-bootstrap'

function Whatsapp() {
  return (
    <div className='whatsapp' id='theme'>
      <button className='chat'>Chat with us</button>
      <Image
        src='https://ik.imagekit.io/2e35v6mja/whatsapp.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670707763875'
        alt='whatsapp'
      />
    </div>
  )
}

export default Whatsapp
