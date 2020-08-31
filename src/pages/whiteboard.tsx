import React from 'react';
import { CircleIcon, SelectboxSize } from '~/components/atoms/circleIcon';
import { SearchInput } from '~/components/atoms/search';
import ButtonIcon from '~/components/atoms/button';
import Text from '~/components/atoms/text';


export default function Index() {
  return (
    <>
      {/*大きさはアイコンによって違うから変更が効くようにここで書く*/}
      <CircleIcon content={'/images/icon/test.jpg'} size={SelectboxSize.M}/>
      <ButtonIcon
        content={'ログイン'}
      />
      <Text content={'©︎Twitter'}/>
      <ButtonIcon
        content={'さらに読み込み'}
      />
      <Text content={'オススメのアカウント'} sizeColor={'text-2xl font-bold '}/>
      <ButtonIcon
        content={'新規登録'}
      />
      <SearchInput content={'検索内容'}/>
      <CircleIcon content={'/images/icon/searchIcon.jpg'} size={SelectboxSize.S}/>

    </>);
}
