import { Post } from '~/domain/post';

export default interface PostRepository {
  findAll(): Promise<Post[]>;
}
