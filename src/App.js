import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Calculator from './Calculator';
import { useEffect } from 'react';
function App() {

  useEffect(() => {
    AOS.init({once: true});
  },[]);

  useEffect(() => {
    const handleRightClick = (e) => {
      e.preventDefault();
    }

    document.addEventListener('contextmenu', handleRightClick);
    
    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
    }
  }, []);

  return (
    <div className="App">
      <Calculator/>
    </div>
  );
}

export default App;
