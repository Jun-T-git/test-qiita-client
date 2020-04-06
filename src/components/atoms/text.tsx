import React from 'react';

type Props = {
    content: string;
};

const Text = ({ content }: Props) => {
    return (
        <div className="text-lg text-gray-700 font-medium">{content}</div>
    );
};

export default Text;
