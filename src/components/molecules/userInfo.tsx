import React from 'react';
import CircleIcon, { SelectboxSize } from '~/components/atoms/circleIcon';
import ShortText from '~/components/atoms/shortText';

export type UserInfoProps = {
  userIconUrl: string;
  userName: string;
  userScreenName: string;
};

const UserInfo = ({ userIconUrl, userName,userScreenName }: UserInfoProps) => {
  return (
    <div className="flex items-center">
      <CircleIcon content={userIconUrl} size={SelectboxSize.S}/>
      <ShortText content={userName} />
      <ShortText content={`@${userScreenName}`} />
    </div>
  );
};

export default UserInfo;
