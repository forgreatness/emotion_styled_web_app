import React from 'react';

import Navbar from './components/Navbar';
import News from './pages/News';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <News />
      </main>
    </div>
  );
}

export default App;
