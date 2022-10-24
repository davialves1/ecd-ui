import React, { useEffect } from 'react';
import ColorScheme from './ColorScheme';
import Header from '../../shared/Header';
import Language from './Language';
import Implemented from './Implemented';

const Hello = () => {
  useEffect(() => {
    document.title = 'ECD: Emission Compliance Database';
  }, []);

  return (
    <>
      <Header />
      <div
        style={{
          width: '100%',
          height: '50vh',
          display: 'flex',
          marginTop: 50,
          justifyContent: 'center',
        }}
      >
        <main>
          <Implemented />
          <Language />
          <ColorScheme />
        </main>
      </div>
    </>
  );
};

export default Hello;
