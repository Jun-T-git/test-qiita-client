import { Post } from '~/clean/entity/post';

export interface PostUseCaseInterface {
  fetchPosts(): Promise<Post[]>;
}
