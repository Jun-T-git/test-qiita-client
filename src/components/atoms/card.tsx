import React from 'react';

type Props = {
  children: JSX.Element;
  className?: string;
};

/**
 * カード
 * @param children: 内容のコンポーネント
 * @param className: クラス
 */
export const Card: React.FC<Props> = ({ children, className }: Props) => (
  <div className={`${className} rounded-lg shadow-lg overflow-hidden my-4`}>
    {children}
  </div>
);
