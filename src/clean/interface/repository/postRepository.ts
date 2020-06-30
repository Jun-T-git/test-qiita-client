import { Post } from '~/clean/entity/post';

export default interface PostRepository {
  findAll(): Promise<Post[]>;
}
