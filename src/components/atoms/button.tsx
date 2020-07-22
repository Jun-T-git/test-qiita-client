import React from 'react';

type Props = {
  content: string;
};

export const ButtonIcon = ({ content }: Props) => {
  return (
    <button className={'h-15 w-full rounded-sm bg-gray-300'}>
      {content}
    </button>
  );
};

export default ButtonIcon;
