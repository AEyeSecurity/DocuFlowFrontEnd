import React, { useEffect } from 'react';
import Carrousel from './Carrousel/Carrousel';
import WeAre from './WeAre/WeAre';
import HowItWorks from './HowItWorks/HowItWorks';
import Benefits from './Benefits/Benefits';
import './Content.scss';

function Content() {
  useEffect(() => {
    const fadeInCElements = document.querySelectorAll('.fade-in-c');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.2 }
    );

    fadeInCElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div>
        <Carrousel />
        <div className='fade-in-c' id='home'>
          <WeAre />
        </div>
        <div className='howItWorksDiv' id='howItWorks'>
          <HowItWorks />
        </div>
        <div className='fade-in-c' id='benefits'>
          <Benefits />
        </div>
      </div>
    </>
  );
}

export default Content;