import { Post } from '../../domain/post';

export interface PostUseCase {
  fetchPosts(): Promise<Post[]>;
}
