import React from 'react';
import { CircleIcon, SelectboxSize } from '~/components/atoms/circleIcon';

export default {
  title: 'atoms/CircleIcon',
  component: CircleIcon,
};

export const circleIcon = () => {
  return (
    <CircleIcon
       content={'https://webtan.impress.co.jp/sites/default/files/styles/amp_metadata_content_image_min_1600px_wide/public/images/article2015/twitter_business/twitter_logo200.png?itok=pRrtIRqM'} size={SelectboxSize.M}
    />
  );
};
