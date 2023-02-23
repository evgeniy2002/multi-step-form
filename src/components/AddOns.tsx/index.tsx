import React from 'react';
import { ContentFooter } from '../Btn/ContentFooter';
import { ContentHeader } from '../ContentHeader/ContentHeader';

import s from './AddOns.module.scss';

export const AddOns: React.FC = () => {
  return (
    <div className={s.addons + ' ' + 'content-section'}>
      <div className={s.addons_body}>
        <ContentHeader
          title="Pick add-ons"
          subtitle="Add-once help enhance your gaming experience"
        />
        <div className={s.addons_body__row}>
          <div className={s.addons_body__columns + ' ' + s.active}>
            <div className={s.addons_body__item}>
              <div className={s.addons_body__checkbox}>
                <input
                  type="checkbox"
                  className={s.custom_checkbox}
                  id="rate1"
                  name="rate1"
                  value="yes"
                />
                <label htmlFor="rate1"></label>
              </div>
              <div className={s.addons_body__info}>
                <p>Online service</p>
                <span>Access to multiplayer games</span>
              </div>
              <div className={s.addons_body__rate}>
                <span>+&#36;1/mo</span>
              </div>
            </div>
          </div>
          <div className={s.addons_body__columns}>
            <div className={s.addons_body__item}>
              <div className={s.addons_body__checkbox}>
                <input
                  type="checkbox"
                  className={s.custom_checkbox}
                  id="rate2"
                  name="rate2"
                  value="yes"
                />
                <label htmlFor="rate2"></label>
              </div>
              <div className={s.addons_body__info}>
                <p>Online service</p>
                <span>Access to multiplayer games</span>
              </div>
              <div className={s.addons_body__rate}>
                <span>+&#36;1/mo</span>
              </div>
            </div>
          </div>
          <div className={s.addons_body__columns}>
            <div className={s.addons_body__item}>
              <div className={s.addons_body__checkbox}>
                <input
                  type="checkbox"
                  className={s.custom_checkbox}
                  id="rate3"
                  name="rate3"
                  value="yes"
                />
                <label htmlFor="rate3"></label>
              </div>
              <div className={s.addons_body__info}>
                <p>Online service</p>
                <span>Access to multiplayer games</span>
              </div>
              <div className={s.addons_body__rate}>
                <span>+&#36;1/mo</span>
              </div>
            </div>
          </div>
        </div>
        <ContentFooter />
      </div>
    </div>
  );
};
