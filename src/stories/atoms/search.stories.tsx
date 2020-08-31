import React from 'react';
import { SearchInput } from '~/components/atoms/search';

export default {
  title: 'atoms/ButtonIcon',
  component: SearchInput,
};

export const searchInput = () => {
  return (
    <SearchInput content={'検索内容'}/>
  );
};
