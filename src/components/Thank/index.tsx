import React from 'react';

import s from './Thank.module.scss';

import thank from '../../assets/images/icon-thank-you.svg';

export const Thank: React.FC = () => {
  return (
    <div className={s.thank + ' ' + 'content-section'}>
      <div className={s.thank_body}>
        <div className={s.thank_body__main}>
          <div className={s.thank_body__main_img}>
            <img src={thank} alt="" />
          </div>
          <h2 className={s.thank_body__main_title}>Thank you</h2>
          <div className={s.thank_body__main_text}>
            <p>
              Thanks for confirming your subscription! We hope you have fun using out platfrom. If
              you ever need support, please feel free to email us at support@loremgamin.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
