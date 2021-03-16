import React from 'react';

type Props = {
  content: string;
  onClick: () => void;
};

export const ButtonIcon = ({ content, onClick }: Props) => {
  return (
    <button className={'h-15 w-full rounded-sm bg-gray-300'} onClick={onClick}>
      {content}
    </button>
  );
};

export default ButtonIcon;
