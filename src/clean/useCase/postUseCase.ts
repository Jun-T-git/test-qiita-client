import { Post } from '~/clean/entity/post';
import { PostUseCase } from '~/clean/interface/useCase/postUseCase';
import PostRepository from '~/clean/interface/repository/postRepository';

export default class PostUseCaseImpl implements PostUseCase {
  readonly postRepository: PostRepository;

  constructor(repository: PostRepository) {
    this.postRepository = repository;
  }

  async fetchPosts(): Promise<Post[]> {
    return await this.postRepository.findAll();
  }
}
