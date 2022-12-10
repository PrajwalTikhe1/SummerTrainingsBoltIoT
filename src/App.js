import Sidenav from './components/sidenav'
import Main from './components/main'
import Hardware from './components/hardware'
import Software from './components/software'
import Award from './components/award'
import Footer from './components/footer'
import Whatsapp from './components/whatsapp'

function App() {
  return (
    <div className='App'>
      <Sidenav />
      <Main />
      <Hardware />
      <Software />
      <Award />
      <Footer />
      <Whatsapp />
    </div>
  )
}

export default App
