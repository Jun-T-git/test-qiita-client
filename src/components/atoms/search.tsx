import React from 'react';
//import { PostViewModel } from '~/interface/presenter/postPresenter';

type Props = {
  content: string;
};

export const SearchInput = ({ content }: Props) => {
  return (
    <input className={'h-10 w-full border-solid border-2'} type="search" placeholder={content} />
  );
};

export default SearchInput;
