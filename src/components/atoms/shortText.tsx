import React from 'react';

type Props = {
  at: string;
  content: string;
};

const ShortText = ({ at, content }: Props) => {
  return (
      <div className="text-gray-700 text-sm mx-3">{at}{content}</div>
  );
};

export default ShortText;
