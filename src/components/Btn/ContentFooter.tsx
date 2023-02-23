import React from 'react';

import s from './ContentFooter.module.scss';

export const ContentFooter: React.FC = () => {
  const step = 4;
  return (
    <footer className={s.body_footer}>
      <div className={s.body_footer__row}>
        <span>Go Back</span>
        <button
          type="submit"
          className={step === 4 ? s.body_footer__btn + ' ' + s.confirm : s.body_footer__btn}>
          {step === 4 ? 'Confirm' : 'Next Step'}
        </button>
      </div>
    </footer>
  );
};
