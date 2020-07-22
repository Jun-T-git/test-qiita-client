import React from 'react';
import { Text } from '~/components/atoms/text';

export default {
  title: 'atoms/Copyright',
  component: Text,
};

export const copyright = () => {
  return (
    <Text
      content={"©︎Twitter"}
    />
  );
};
