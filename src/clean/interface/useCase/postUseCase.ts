import { Post } from '~/clean/entity/post';

export interface PostUseCase {
  fetchPosts(): Promise<Post[]>;
}
