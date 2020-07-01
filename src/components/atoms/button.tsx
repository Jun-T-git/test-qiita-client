import React from 'react';
import { PostViewModel } from '~/interface/presenter/postPresenter';

type Props = {
  content: string;
};

export const ButtonIcon = ({ content }: Props) => {
  return (
    <button className={"h-2 w-2"}>
      {content}
    </button>
  );
};

export default ButtonIcon;
