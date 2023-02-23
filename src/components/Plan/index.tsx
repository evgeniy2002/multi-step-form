import React from 'react';
import { ContentHeader } from '../ContentHeader/ContentHeader';

import arcade from '../../assets/images/icon-arcade.svg';
import advanced from '../../assets/images/icon-advanced.svg';
import pro from '../../assets/images/icon-pro.svg';

import s from './Plan.module.scss';
import { ContentFooter } from '../Btn/ContentFooter';

export const Plan: React.FC = () => {
  const [activeMark, setActiveMark] = React.useState<boolean>(false);

  const handleCheckMark = () => {
    setActiveMark(!activeMark);
  };

  return (
    <section className={s.plan + ' ' + 'content-section'}>
      <div className={s.plan_body}>
        <ContentHeader
          title="Select your plan"
          subtitle="You have the option of monthly or yearly billing"
        />
        <div className={s.plan_body__row}>
          <div className={s.plan_body__columns}>
            <div className={s.plan_body__item + ' ' + s.active}>
              <div className={s.plan_body__img}>
                <img src={arcade} alt="" />
              </div>
              <div className={s.plan_body__content}>
                <p>Arcade</p>
                <span>&#36;9/mo</span>
                {activeMark ? <span>2 months free</span> : null}
              </div>
            </div>
          </div>
          <div className={s.plan_body__columns}>
            <div className={s.plan_body__item}>
              <div className={s.plan_body__img}>
                <img src={advanced} alt="" />
              </div>
              <div className={s.plan_body__content}>
                <p>Arcade</p>
                <span>&#36;9/mo</span>
                {activeMark ? <span>2 months free</span> : null}
              </div>
            </div>
          </div>
          <div className={s.plan_body__columns}>
            <div className={s.plan_body__item}>
              <div className={s.plan_body__img}>
                <img src={pro} alt="" />
              </div>
              <div className={s.plan_body__content}>
                <p>Arcade</p>
                <span>&#36;9/mo</span>
                {activeMark ? <span>2 months free</span> : null}
              </div>
            </div>
          </div>
        </div>
        <div className={s.plan_checkbox}>
          {/* <label className={s.plan_checkbox__switch}>
            <input type={s.plan_checkbox__input} />
            <span className={s.plan_checkbox__slider + ' ' + s.plan_checkbox__round}></span>
          </label> */}

          {/* <label htmlFor="monthly">Monthly</label> */}
          <span className={!activeMark ? 'checkbox-before active' : 'checkbox-before'}>
            Monthly
          </span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" onClick={handleCheckMark}></span>
          </label>
          <span className={activeMark ? 'checkbox-after active' : 'checkbox-after'}>Yearly</span>
          {/* <label htmlFor="">Yearly</label> */}
        </div>
        <ContentFooter />
      </div>
    </section>
  );
};
