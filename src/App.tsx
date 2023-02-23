import React from 'react';

import './scss/App.scss';

import sidebar from './assets/images/bg-sidebar-desktop.svg';
import { Info } from './components/Info';
import { Plan } from './components/Plan';
import { AddOns } from './components/AddOns.tsx';
import { FinishUp } from './components/FinishUp';
import { Thank } from './components/Thank';

function App() {
  React.useEffect(() => {
    ibg();
  }, []);

  const ibg = React.useCallback(() => {
    let ibg = document.querySelectorAll<HTMLElement>('.ibg');
    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector<HTMLElement>('img')) {
        ibg[i].style.backgroundImage =
          'url(' + ibg[i].querySelector<HTMLElement>('img')?.getAttribute('src') + ')';
      }
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <main className="content">
          <aside className="content-sidebar">
            <div className="content-sidebar__body">
              <div className="content-sidebar__item">
                <div className="content-sidebar__step">
                  <span>1</span>
                </div>
                <div className="content-sidebar__info">
                  <h5 className="content-sidebar__head">Step 1</h5>
                  <p className="content-sidebar__title">Your info</p>
                </div>
              </div>
              <div className="content-sidebar__item">
                <div className="content-sidebar__step sidebar_active">
                  <span>2</span>
                </div>
                <div className="content-sidebar__info">
                  <h5 className="content-sidebar__head">Step 2</h5>
                  <p className="content-sidebar__title">Select Plan</p>
                </div>
              </div>
              <div className="content-sidebar__item">
                <div className="content-sidebar__step">
                  <span>3</span>
                </div>
                <div className="content-sidebar__info">
                  <h5 className="content-sidebar__head">Step 3</h5>
                  <p className="content-sidebar__title">Add-ons</p>
                </div>
              </div>
              <div className="content-sidebar__item">
                <div className="content-sidebar__step">
                  <span>4</span>
                </div>
                <div className="content-sidebar__info">
                  <h5 className="content-sidebar__head">Step 4</h5>
                  <p className="content-sidebar__title">Summary</p>
                </div>
              </div>
            </div>
            <div className="content-sidebar__img ibg">
              <img src={sidebar} alt="" />
            </div>
          </aside>
          <div className="content-body">
            {/* <Info /> */}
            {/* <Plan /> */}
            {/* <AddOns /> */}
            {/* <FinishUp /> */}
            <Thank />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
