import React from 'react';
import { ContentHeader } from '../ContentHeader/ContentHeader';

import arcade from '../../assets/images/icon-arcade.svg';
import advanced from '../../assets/images/icon-advanced.svg';
import pro from '../../assets/images/icon-pro.svg';

import s from './Plan.module.scss';
import { ContentFooter } from '../Btn/ContentFooter';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { choosePlan } from '../../redux/app';
import { addPlanInfo } from '../../redux/plan/slice';

type StateType = {
  id: number;
  img: string;
  title: string;
  rateMo: number;
};

export const Plan: React.FC = () => {
  const activePlan = useAppSelector((state) => state.step.activePlan);
  const yearly = useAppSelector((state) => state.plan.planInfo.yearly);
  const dispatch = useAppDispatch();

  const [activeMark, setActiveMark] = React.useState<boolean>(false);

  const [plans, setPlans] = React.useState<StateType[]>([
    {
      id: 1,
      img: arcade,
      title: 'Arcade',
      rateMo: 9,
    },
    {
      id: 2,
      img: advanced,
      title: 'Advanced',
      rateMo: 12,
    },
    {
      id: 3,
      img: pro,
      title: 'Pro',
      rateMo: 15,
    },
  ]);

  React.useEffect(() => {
    setActiveMark(yearly);
  }, [yearly]);

  const handleCheckMark = () => {
    setActiveMark(!activeMark);
  };
  const handlePlan = (id: number) => {
    dispatch(choosePlan(id));
  };
  const dispatchPlan = () => {
    const dispatchPlanItem = plans.filter((item) => item.id === activePlan);

    dispatch(
      addPlanInfo({
        title: dispatchPlanItem[0].title,
        rate: activeMark ? dispatchPlanItem[0].rateMo * 10 : dispatchPlanItem[0].rateMo,
        yearly: activeMark,
      }),
    );
  };
  return (
    <section className={s.plan + ' ' + 'content-section'}>
      <div className={s.plan_body}>
        <ContentHeader
          title="Select your plan"
          subtitle="You have the option of monthly or yearly billing"
        />
        <div className={s.plan_body__row}>
          {plans.map((el) => (
            <div className={s.plan_body__columns} key={el.id} onClick={() => handlePlan(el.id)}>
              <div
                className={
                  el.id === activePlan ? s.plan_body__item + ' ' + s.active : s.plan_body__item
                }>
                <div className={s.plan_body__img}>
                  <img src={el.img} alt="" />
                </div>
                <div className={s.plan_body__content}>
                  <p>{el.title}</p>

                  <span>&#36;{activeMark ? el.rateMo * 10 : el.rateMo} /mo</span>

                  {activeMark ? <span>2 months free</span> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={s.plan_checkbox}>
          <span className={!activeMark ? 'checkbox-before active' : 'checkbox-before'}>
            Monthly
          </span>
          <label className="switch">
            <input type="checkbox" checked={activeMark} />
            <span className={'slider round '} onClick={handleCheckMark}></span>
          </label>
          <span className={activeMark ? 'checkbox-after active' : 'checkbox-after'}>Yearly</span>
        </div>
        <ContentFooter dispatchPlan={dispatchPlan} />
      </div>
    </section>
  );
};
