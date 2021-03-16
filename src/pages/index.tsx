import React, { useEffect, useState } from 'react';
import Posts from '~/components/organisms/posts';
import { PostViewModel } from '~/clean/interface/presenter/postPresenter';
import moment from 'moment';
import axios from 'axios';

const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export default function Index({ hasToken: hasToken }) {
  const [posts, setPosts] = useState<PostViewModel[]>([]);

  useEffect(() => {
    if (hasToken) {
      getViewModel();
    }
  }, [hasToken]);

  const fetchPosts = async () => {
    const res = await axios.get(
      'https://qiita.com/api/v2/authenticated_user/items',
      {
        headers: {
          Authorization: 'Bearer ' + API_TOKEN,
        },
      }
    );
    return res.data;
  };

  const translate = (posts_data) => {
    const posts_view_data = posts_data.map(
      (post) =>
        new PostViewModel(
          post.id,
          post.user.id,
          post.user.name,
          post.user.profile_image_url,
          post.url,
          post.title,
          post.body,
          post.tags.map((tag) => tag.name),
          post.likes_count,
          moment(post.created_at).fromNow()
        )
    );
    return posts_view_data;
  };

  const getViewModel = async () => {
    const posts_data = await fetchPosts();
    const posts_view_data = await translate(posts_data);
    setPosts(posts_view_data);
  };

  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}
