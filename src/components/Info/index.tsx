import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ContentFooter } from '../Btn/ContentFooter';
import { ContentHeader } from '../ContentHeader/ContentHeader';

import s from './Info.module.scss';

type Inputs = {
  name: string;
  email: string;
  phone: string;
};

export const Info: React.FC = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <section className={s.info + ' ' + 'content-section'}>
      <div className={s.info_body}>
        <ContentHeader
          title="Personal info"
          subtitle="Please provide your name, email address, and phone number"
        />
        {/* <header className={s.info_body__header}>
          <h1 className={s.info_body__title}>Personal info</h1>
          <p className={s.info_body__subtitle}>
            Please provide your name, email address, and phone number
          </p>
        </header> */}
        <div className={s.info_body__form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.info_body__field}>
              <div className={s.info_body__label}>
                <label>Name</label>
                {errors.name && <p>This field is required</p>}
              </div>
              <input
                defaultValue=""
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
                defaultValue=""
                placeholder="e.g. stephenking@lorem.com"
                {...register('email', { required: true })}
                className={errors.email && `${s.input_active}`}
              />
            </div>
            <div className={s.info_body__field}>
              <div className={s.info_body__label}>
                <label>Phone Number</label>
                {errors.phone && <p>This field is required</p>}
              </div>
              <input
                defaultValue=""
                placeholder={'e.g. + 1 234 567 890'}
                {...register('phone', { required: true })}
                className={errors.phone && `${s.input_active}`}
              />
            </div>
            <ContentFooter />
            {/* <button type="submit" className={s.info_body__btn}>
              Next Step
            </button> */}
          </form>
        </div>
      </div>
    </section>
  );
};
