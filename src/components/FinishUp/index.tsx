import React from 'react';
import { decrementStepValue } from '../../redux/app';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ContentFooter } from '../Btn/ContentFooter';
import { ContentHeader } from '../ContentHeader/ContentHeader';

import s from './FinishUp.module.scss';

export const FinishUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const { title, rate, yearly } = useAppSelector((state) => state.plan.planInfo);
  const items = useAppSelector((state) => state.addOns.items);

  const total =
    items
      .filter((el) => el.checked)
      .reduce((acc, el) => (yearly ? el.rateMo * 10 : el.rateMo) + acc, 0) + rate;

  const changePlan = (val: number) => {
    dispatch(decrementStepValue(val));
  };

  return (
    <div className={s.finish + ' ' + 'content-section'}>
      <div className={s.finish_body}>
        <ContentHeader
          title="Finishing Up"
          subtitle="Double-check everything looks OK before to confirm"
        />
        <div className={s.finish_body__main}>
          <div className={s.finish_body__summary}>
            <div className={s.finish_body__summary_head}>
              <h3>
                {title} ({yearly ? 'Yearly' : 'Monthly'})
              </h3>
              <span onClick={() => changePlan(2)}>Change</span>
            </div>
            <span>
              &#36;{rate}
              {yearly ? '/yr' : '/mo'}
            </span>
          </div>
          <div className={s.finish_body__history}>
            {items
              .filter((el) => el.checked)
              .map((el) => (
                <div className={s.finish_body__history_item}>
                  <p>{el.title}</p>
                  <span>+&#36;{yearly ? `${el.rateMo * 10}/yr` : `${el.rateMo}/mo`}</span>
                </div>
              ))}
          </div>
        </div>
        <div className={s.finish_body__total}>
          <p>Total (per {yearly ? 'year' : 'month'})</p>
          <span>+&#36;{yearly ? `${total}/yr` : `${total}/mo`}</span>
        </div>
        <ContentFooter />
      </div>
    </div>
  );
};
