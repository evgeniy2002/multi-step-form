import React from 'react';
import { ContentFooter } from '../Btn/ContentFooter';
import { ContentHeader } from '../ContentHeader/ContentHeader';

import s from './FinishUp.module.scss';

export const FinishUp: React.FC = () => {
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
              <h3>Arcade (Monthly)</h3>
              <span>Change</span>
            </div>
            <span>&#36;9/mo</span>
          </div>
          <div className={s.finish_body__history}>
            <div className={s.finish_body__history_item}>
              <p>Online service</p>
              <span>+&#36;1/mo</span>
            </div>
            <div className={s.finish_body__history_item}>
              <p>Larger storage</p>
              <span>+&#36;2/mo</span>
            </div>
          </div>
        </div>
        <div className={s.finish_body__total}>
          <p>Total (per month)</p>
          <span>+&#36;12/mo</span>
        </div>
        <ContentFooter />
      </div>
    </div>
  );
};
