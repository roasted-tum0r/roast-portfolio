import Navbar from './components/layout/Navbar';
import BackgroundCanvas from './components/sections/BackgroundCanvas';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="bg-black min-h-screen relative overflow-x-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundCanvas />
        <div className="absolute top-[10%] left-[15%] w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] animate-pulse transition-all duration-1000"></div>
        <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] animate-pulse transition-all duration-1000"></div>
        <div className="absolute top-[40%] right-[10%] w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[40%] left-[10%] w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
