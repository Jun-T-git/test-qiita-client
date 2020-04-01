import PostPresenter, {
  PostViewModel,
} from '../interface/presenter/postPresenter';
import { PostUseCase } from '~/interface/useCase/postUseCase';

export default class PostPresenterImpl implements PostPresenter {
  private readonly useCase: PostUseCase;

  constructor(useCase: PostUseCase) {
    this.useCase = useCase;
  }
  async getViewModelList(): Promise<PostViewModel[]> {
    const posts = await this.useCase.fetchPosts();
    if (posts) {
      return posts.map(
        (post) =>
          new PostViewModel(
            post.id,
            post.user.id,
            post.user.screenName,
            post.user.name,
            post.user.iconUrl,
            post.text,
            post.favorite,
            post.retweet,
            String(post.createdAt.getFullYear()) +
              '/' +
              String(post.createdAt.getMonth()) +
              '/' +
              String(post.createdAt.getDate()) +
              ' ' +
              String(post.createdAt.getHours()) +
              ':' +
              String(post.createdAt.getMinutes())
          )
      );
    }
    return [];
  }
}
