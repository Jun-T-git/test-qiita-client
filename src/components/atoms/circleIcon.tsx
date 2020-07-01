import React from 'react';

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
