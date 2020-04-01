import Link from 'next/link';
import Posts from '../components/organisms/posts';
import PostUseCaseImpl from '../useCase/postUseCase';
import PostRepositoryImpl from '../repository/postRepository';
import PostDriverImpl from '../driver/postDriver';
import PostPresenterImpl from "../presenter/postPresenter";
import {useEffect, useState} from "react";
import {PostViewModel} from "../interface/presenter/postPresenter";

const repository = new PostRepositoryImpl(new PostDriverImpl());
const useCase = new PostUseCaseImpl(repository);
const presenter = new PostPresenterImpl(useCase);

export default function Index() {
    const [posts, setPosts] = useState<PostViewModel[]>([]);

    useEffect(() => {
        getViewModel();
    }, []);

    const getViewModel = async () => {
        setPosts(await presenter.getViewModelList());
    };
  return (
    <div>
      <h1>Hello Next.js 👋</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Posts posts={posts} />
    </div>
  );
}
