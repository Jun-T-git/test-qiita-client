import React from 'react';

type Props = {
  content: string;
};

const ShortText = ({ content }: Props) => {
  return <div className="text-gray-700 text-sm mx-3">{content}</div>;
};

export default ShortText;
