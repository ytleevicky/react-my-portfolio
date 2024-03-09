import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';

import { useState, useEffect } from 'react';
import GridLoader from 'react-spinners/GridLoader';
import './index.scss';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div id='spinner'>
          <GridLoader
            className=''
            color={'var(--cyan)'}
            loading={loading}
            size={30}
            speedMultiplier={1}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        </div>
      ) : (
        <div>
          <NavBar />
          <Home />
          {/* <About /> */}
          <Portfolio />
          <Experience />
          <Contact />

          <SocialLinks />
        </div>
      )}
    </div>
  );
}

export default App;
