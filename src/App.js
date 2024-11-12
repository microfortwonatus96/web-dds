import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Why from './components/why/Why';
import How from './components/how/how';
import Contact from './components/contact/contact';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
      <Home />
      <About />
      <Why />
      <How />
      <Contact />
    </main>

    {/* <ScrollTop /> */}
    </>
  );
}

export default App;