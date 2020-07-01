import PostPresenterInterface, {
  PostViewModel,
} from '~/clean/interface/presenter/postPresenter';
import { PostUseCaseInterface } from '~/clean/interface/useCase/postUseCase';
import moment from 'moment';

export default class PostPresenter implements PostPresenterInterface {
  private readonly useCase: PostUseCaseInterface;

  constructor(useCase: PostUseCaseInterface) {
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
            moment(post.createdAt).fromNow()
          )
      );
    }
    return [];
  }
}
