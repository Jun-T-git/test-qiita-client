import { Post } from '~/domain/post';
import { PostUseCase } from '~/interface/useCase/postUseCase';
import PostRepository from '~/interface/repository/postRepository';

export default class PostUseCaseImpl implements PostUseCase {
  readonly postRepository: PostRepository;

  constructor(repository: PostRepository) {
    this.postRepository = repository;
  }

  async fetchPosts(): Promise<Post[]> {
    return await this.postRepository.findAll();
  }
}
