import './App.css';
import Header from './components/header/Header';
// import Home from './components/home/Home';
import About from './components/about/About';
// import Why from './components/why/Why';
// import How from './components/how/how';
import Contact from './components/contact/contact';
import Contact_us from './components/contact-us/contact_us';
import Portofolio from './components/portofolio/portofolio';
import PortofolioDetail from './components/portofolio/portofolioDetail';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

function App() {

  const Layout = () => {
    return(
      <>
      <Header />
      <Outlet />
      <Contact />
      </>
    )
  }
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Portofolio />}/>
              <Route path='/portofolio/:id' element={<PortofolioDetail />}/>                
              <Route path='/about' element={<About />} />
              <Route path='/contact_us' element={<Contact_us />} />

            </Route>
          </Routes>
      </BrowserRouter>
    {/* <ScrollTop /> */}
    </>
  );
}

export default App;
