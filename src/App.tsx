import React from 'react';

import './scss/App.scss';

import sidebar from './assets/images/bg-sidebar-desktop.svg';
import { Info } from './components/Info';
import { Plan } from './components/Plan';
import { AddOns } from './components/AddOns';
import { FinishUp } from './components/FinishUp';
import { Thank } from './components/Thank';
import { useAppSelector } from './redux/hooks';

function App() {
  const [stateSteps, setStateStap] = React.useState([
    {
      id: 1,
      title: 'Your info',
    },
    {
      id: 2,
      title: 'Select Plan',
    },
    {
      id: 3,
      title: 'Add-ons',
    },
    {
      id: 4,
      title: 'Summary',
    },
  ]);

  const step = useAppSelector((state) => state.step.step);
  const confirm = useAppSelector((state) => state.step.confirm);

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
              {stateSteps.map((item, idx) => (
                <div className="content-sidebar__item" key={item.id}>
                  <div
                    className={
                      step === idx + 1
                        ? 'content-sidebar__step sidebar_active'
                        : 'content-sidebar__step'
                    }>
                    <span>{item.id}</span>
                  </div>
                  <div className="content-sidebar__info">
                    <h5 className="content-sidebar__head">Step {item.id}</h5>
                    <p className="content-sidebar__title">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="content-sidebar__img ibg">
              <img src={sidebar} alt="" />
            </div>
          </aside>
          <div className="content-body">
            {step === 1 && <Info />}
            {step === 2 && <Plan />}
            {step === 3 && <AddOns />}
            {step === 4 && !confirm && <FinishUp />}
            {confirm && <Thank />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
