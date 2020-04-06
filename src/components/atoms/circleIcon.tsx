import React from 'react';
import { PostViewModel } from '~/interface/presenter/postPresenter';

type Props = {
  content: string;
};

const CircleIcon = ({ content }: Props) => {
  return (
    <img
      src={content}
      className="w-8 h-8 object-cover rounded-full"
      alt="avatar"
    />
  );
};

export default CircleIcon;
