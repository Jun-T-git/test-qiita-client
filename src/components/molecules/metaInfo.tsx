import React from 'react';
import ShortText from '~/components/atoms/shortText';

export type MetaInfoProps = {
  tagList: string[];
  likesCount: number;
  createdAt: string;
};

const MetaInfo = ({ tagList, likesCount, createdAt }: MetaInfoProps) => {
  return (
    <>
      <div className="flex items-center">
        <span
          className="tracking-wider text-white bg-green-500 px-3 py-1 text-xs rounded leading-loose mx-2 font-semibold"
          title=""
        >
          {/*<i className="fas fa-heart" aria-hidden="true" /> */}
          LGTM {likesCount}
        </span>

        <ul className="flex">
          {tagList.map((tag) => (
            <li
              key={tag}
              className={
                'tracking-wider text-gray-700 px-3 py-1 text-xs rounded leading-loose mx-2 font-semibold bg-gray-300'
              }
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end">
        <ShortText content={createdAt} />
      </div>
    </>
  );
};

export default MetaInfo;
