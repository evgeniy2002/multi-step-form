import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ContentHeader } from '../ContentHeader/ContentHeader';

import s from './Info.module.scss';
import style from '../../components/Btn/ContentFooter.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addFormInfo } from '../../redux/info/slice';
import { Form } from '../../redux/info/types';
import { incrementStep } from '../../redux/app';

const isValidEmail = (email: string) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );

const isValidPhone = (phone: any) => {
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/.test(phone);
};
export const Info: React.FC = () => {
  const { name, email, phone } = useAppSelector((state) => state.info.formInfo);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Form>();
  const onSubmit: SubmitHandler<Form> = (data) => {
    dispatch(addFormInfo(data));
    dispatch(incrementStep());
  };
  const handleEmailValidation = (email: string) => {
    const isValid = isValidEmail(email);

    // const validityChanged = (errors.email && isValid) || (!errors.email && !isValid);

    return isValid;
  };
  const handlePhoneValidation = (phone: any) => {
    const isValid = isValidPhone(phone);

    return isValid;
  };
  return (
    <section className={s.info + ' ' + 'content-section'}>
      <div className={s.info_body}>
        <ContentHeader
          title="Personal info"
          subtitle="Please provide your name, email address, and phone number"
        />

        <div className={s.info_body__form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.info_body__field}>
              <div className={s.info_body__label}>
                <label>Name</label>
                {errors.name && <p>This field is required</p>}
              </div>
              <input
                defaultValue={name}
                placeholder="e.g. Stephen King"
                {...register('name', { required: true })}
                className={errors.name && `${s.input_active}`}
              />
            </div>
            <div className={s.info_body__field}>
              <div className={s.info_body__label}>
                <label>Email Address</label>
                {errors.email && <p>This field is required</p>}
              </div>
              <input
                defaultValue={email}
                placeholder="e.g. stephenking@lorem.com"
                {...register('email', { required: true, validate: handleEmailValidation })}
                className={errors.email && `${s.input_active}`}
              />
            </div>
            <div className={s.info_body__field}>
              <div className={s.info_body__label}>
                <label>Phone Number</label>
                {errors.phone && <p>This field is required</p>}
              </div>
              <input
                defaultValue={phone}
                placeholder={'e.g. + 1 234 567 890'}
                {...register('phone', {
                  required: true,
                  pattern: /\+?[0-9]/,
                })}
                autoComplete={'false'}
                className={errors.phone && `${s.input_active}`}
              />
            </div>
            {/* <ContentFooter /> */}
            <button type="submit" className={style.body_footer__btn + ' ' + s.info_body__btn}>
              Next Step
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
