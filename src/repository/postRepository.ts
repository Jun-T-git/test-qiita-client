import PostRepository from '../interface/repository/postRepository';
import PostDriver from '../interface/driver/postDriver';
import { Post } from '../domain/post';
import { User } from '../domain/user';

export default class PostRepositoryImpl implements PostRepository {
  private readonly postDriver: PostDriver;

  constructor(postDriver: PostDriver) {
    this.postDriver = postDriver;
  }

  async findAll(): Promise<Post[]> {
    const res = await this.postDriver.findAll();
    return res.map(
      (postEntity) =>
        new Post(
          postEntity.id,
          new User(
            postEntity.user.id,
            postEntity.user.screen_name,
            postEntity.user.name,
            postEntity.user.profile_image_url
          ),
          postEntity.text,
          postEntity.favorite_count,
          postEntity.retweet_count
        )
    );
  }
}
