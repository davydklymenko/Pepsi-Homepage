import React from 'react';

import AppHeader from '../components/appHeader/appHeader';

import HeroVideoPepsi from '../components/heroVideoPepsi/heroVideoPepsi';
import PresCans from '../components/presentationCans/presentationCans';
import GetWildWithCherry from '../components/getWildWithCherry/getWildWithCherry';
import FooterVideo from '../components/footerVideoPepsi/footerVideoPepsi';

import AppFooter from '../components/appFooter/appFooter';

import './App.css';

function App() {
  return (
    <div className="App">
        <AppHeader/>
        <main>
            <div className="whapper_main">
                <HeroVideoPepsi/>
                <PresCans/>
                <GetWildWithCherry/>
                <FooterVideo/>
            </div>
        </main>

        <AppFooter/>
    </div>
  );
}

export default App;
