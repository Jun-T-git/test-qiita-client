import React from 'react';
//import { PostViewModel } from '~/interface/presenter/postPresenter';

type Props = {
  content: string;
  sizeColor?: string;
};

export const Text = ({ content, sizeColor }: Props) => {
  return <p className={sizeColor}>{content}</p>;
};

export default Text;
