import React from 'react';
import ShortText from '~/components/atoms/shortText';

export type MetaInfoProps = {
  retweet: number;
  favorite: number;
  createdAt: string;
};

const MetaInfo = ({ retweet, favorite, createdAt }: MetaInfoProps) => {
  return (
    <>
      <div className="flex items-center">
        <span
          className="tracking-wider text-white bg-green-500 px-3 py-1 text-xs rounded leading-loose mx-2 font-semibold"
          title=""
        >
          <i className="fas fa-retweet" aria-hidden="true" />{' '}
          {retweet}
        </span>

        <span
          className="tracking-wider text-white bg-red-500 px-3 py-1 text-xs rounded leading-loose mx-2 font-semibold"
          title=""
        >
          <i className="fas fa-heart" aria-hidden="true" /> {favorite}
        </span>
      </div>

      <div className="flex justify-end">
          <ShortText at={""} content={createdAt} />
      </div>
    </>
  );
};

export default MetaInfo;
