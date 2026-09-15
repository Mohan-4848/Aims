import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import TopBar from './layout/Topbar'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'
import AboutHosipital from './pages/AboutHosipital'
import ScrollToTop from './hooks/ScrollToTop'
import AboutCollegep from './pages/AboutCollege'
import Founder from './pages/Founder'
import ManagementPage from './pages/ManagementPage'
import GovtApprovalsPage from './pages/GovtApprovalsPage'
import CitizenCharterPage from './pages/CitizenCharterPage'
import AdmissionCriteriaPage from './pages/AdmissionCriteriaPage'
import SeatMatrixPage from './pages/SeatMatrixPage'
import Admissions from './pages/Admissions'
function App() {
  useScrollReveal();
  
  return (
    <>
    <ScrollToTop/>
    <TopBar/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/About-the-Hospital' element ={<AboutHosipital/>}/>
      <Route path='/About-the-college' element ={<AboutCollegep/>}/>
      <Route path='/founder' element ={<Founder/>}/>
      <Route path='/management' element ={<ManagementPage/>}/>
      <Route path='/govt-approvals' element ={<GovtApprovalsPage/>}/>
      <Route path='/Citizen-charter' element ={<CitizenCharterPage/>}/>
      <Route path='/admission-criteria' element ={<AdmissionCriteriaPage/>}/>
      <Route path='/seat-matric' element ={<SeatMatrixPage/>}/>
      <Route path='/admissions' element ={<Admissions/>}/>
      
    </Routes>
    <Footer/>
    </>
  )
}

export default App
