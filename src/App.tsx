import React from 'react';
import logo from './logo.svg';
import './App.scss';

import HeaderComponent from './HeaderComponent';
import SectionComponent from './SectionComponent';
import AsideComponent from './AsideComponent';
import FooterComponent from './FooterComponent';

function App() {
  return (
    <>
      <div id="wrap" style={{width: '900px', margin: '0 auto' }}>
        <HeaderComponent />
        <div className="content cf">
          <SectionComponent />
          <AsideComponent />
        </div>
        <FooterComponent />
      </div>
      
      </>
  );
}

export default App;
