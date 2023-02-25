import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { confirmAll, decrementStep, incrementStep } from '../../redux/app';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import s from './ContentFooter.module.scss';

type Props = {
  dispatchPlan?: () => void;
};

export const ContentFooter: React.FC<Props> = ({ dispatchPlan }) => {
  const step = useAppSelector((state) => state.step.step);
  const dispatch = useAppDispatch();

  const goNextStep = () => {
    if (step === 4) {
      dispatch(confirmAll());
    } else {
      dispatch(incrementStep());
      dispatchPlan && dispatchPlan();
      // if (dispatchPlan) {
      //   dispatchPlan();
      // }
    }
  };

  const goBackStep = () => {
    dispatch(decrementStep());
  };

  return (
    <footer className={s.body_footer}>
      <div className={s.body_footer__row}>
        <span onClick={goBackStep}>Go Back</span>
        <button
          onClick={goNextStep}
          // disabled={activePlan === null ? true : false}
          className={!(step < 4) ? s.body_footer__btn + ' ' + s.confirm : s.body_footer__btn}>
          {!(step < 4) ? 'Confirm' : 'Next Step'}
        </button>
      </div>
    </footer>
  );
};
