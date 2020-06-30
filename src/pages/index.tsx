import React, { useEffect, useState } from 'react';
import Posts from '~/components/organisms/posts';
import { PostViewModel } from '~/clean/interface/presenter/postPresenter';
import { postPresenter } from '~/clean/utility/instance/logic';

export default function Index() {
    const [posts, setPosts] = useState<PostViewModel[]>([]);

    useEffect(() => {
        getViewModel();
    }, []);

    const getViewModel = async () => {
        setPosts(await postPresenter.getViewModelList());
    };
    return (
        <div>
            <Posts posts={posts} />
        </div>
    );
}