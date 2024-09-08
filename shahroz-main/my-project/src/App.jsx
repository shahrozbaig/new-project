import IndexPage from './pages'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import './css/index.css'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'
function App() {
  return (
    <>
    <Navbar/>
<IndexPage/>
<Projects/>
<ContactMe/>
<Footer/>
    </>
  )
}
export default App
