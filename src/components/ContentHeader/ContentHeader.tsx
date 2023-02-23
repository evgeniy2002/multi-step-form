import React from 'react';

type Props = {
  title: string;
  subtitle: string;
};

export const ContentHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <header className="fresh-header">
      <h1 className="fresh-header__title">{title}</h1>
      <p className="fresh-header__subtitle">{subtitle}</p>
    </header>
  );
};
