import { Post } from '~/clean/entity/post';
import { PostUseCaseInterface } from '~/clean/interface/useCase/postUseCase';
import PostRepositoryInterface from '~/clean/interface/repository/postRepository';

export default class PostUseCase implements PostUseCaseInterface {
  readonly postRepository: PostRepositoryInterface;

  constructor(repository: PostRepositoryInterface) {
    this.postRepository = repository;
  }

  async fetchPosts(): Promise<Post[]> {
    return await this.postRepository.findAll();
  }
}
