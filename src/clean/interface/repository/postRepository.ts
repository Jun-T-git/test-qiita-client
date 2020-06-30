import { Post } from '~/clean/entity/post';

export default interface PostRepositoryInterface {
  findAll(): Promise<Post[]>;
}
