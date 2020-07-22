import React from 'react';

// enum用に追加
export enum SelectboxSize {
  M,
  S,
}

/**
 * 円形のアイコン
 * @param size: サイズのタイプ
 */

type Props = {
  content: string;
  size: SelectboxSize;
};

export const CircleIcon = ({ content, size }: Props) => {
  // セレクトボックスから引用
  let Classname: string = '';
  switch (size) {
    case SelectboxSize.S:
      Classname = 'w-10 h-10';
      break;
    case SelectboxSize.M:
      Classname = 'w-20 h-20';
  }

  return (

    <img
      src={content}
      className={`${Classname} object-cover rounded-full`}
      alt="avatar"
    />
  )
    ;
};

export default CircleIcon;
