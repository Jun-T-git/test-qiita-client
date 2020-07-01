import React from 'react';
import { ButtonIcon } from '~/components/atoms/button';

export default {
  title: 'atoms/ButtonIcon',
  component: ButtonIcon,
};

export const buttonIcon = () => {
  return (
    <ButtonIcon
      content={"ログイン"}
    />
  );
};
