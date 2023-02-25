import React from 'react';
import { changeAddOns } from '../../redux/addons/slice';
import { targetCheked } from '../../redux/addons/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ContentFooter } from '../Btn/ContentFooter';
import { ContentHeader } from '../ContentHeader/ContentHeader';

import s from './AddOns.module.scss';

export const AddOns: React.FC = () => {
  const yearly = useAppSelector((state) => state.plan.planInfo.yearly);
  const items = useAppSelector((state) => state.addOns.items);

  const dispatch = useAppDispatch();

  const onToggle = ({ id, nextSeen }: targetCheked) => {
    dispatch(changeAddOns({ id, nextSeen }));
  };

  return (
    <div className={s.addons + ' ' + 'content-section'}>
      <div className={s.addons_body}>
        <ContentHeader
          title="Pick add-ons"
          subtitle="Add-once help enhance your gaming experience"
        />
        <div className={s.addons_body__row}>
          {items.map((item) => (
            <div
              className={
                item.checked === true
                  ? s.addons_body__columns + ' ' + s.active
                  : s.addons_body__columns
              }
              key={item.id}>
              <div className={s.addons_body__item}>
                <div className={s.addons_body__checkbox}>
                  <input
                    type="checkbox"
                    className={s.custom_checkbox}
                    id={`rate${item.id}`}
                    name="rate1"
                    value="yes"
                    checked={item.checked}
                    onChange={(e) => onToggle({ id: item.id, nextSeen: e.target.checked })}
                  />
                  <label htmlFor={`rate${item.id}`}></label>
                </div>
                <div className={s.addons_body__info}>
                  <p>{item.title}</p>
                  <span>{item.subtitle}</span>
                </div>
                <div className={s.addons_body__rate}>
                  <span>+&#36;{yearly ? `${item.rateMo * 10}/yr` : `${item.rateMo}/mo`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ContentFooter />
      </div>
    </div>
  );
};
