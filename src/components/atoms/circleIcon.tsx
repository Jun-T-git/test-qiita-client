import React from 'react';
import { PostViewModel } from '~/interface/presenter/postPresenter';

type Props = {
  content: string;
};

export const CircleIcon = ({ content }: Props) => {
  return (
    <img
      src={content}
      className="w-4 h-4 object-cover rounded-full"
      alt="avatar"
    />
  );
};

export default CircleIcon;
