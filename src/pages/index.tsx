import Link from 'next/link';
import Posts from '../components/organisms/posts';
import PostUseCaseImpl from '../useCase/postUseCase';
import PostRepositoryImpl from '../repository/postRepository';
import PostDriverImpl from '../driver/postDriver';

const repository = new PostRepositoryImpl(new PostDriverImpl());
const useCase = new PostUseCaseImpl(repository);

export default function Index() {

  return (
    <div>
      <h1>Hello Next.js 👋</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Posts useCase={useCase} />
    </div>
  );
}
