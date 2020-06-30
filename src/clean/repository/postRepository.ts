import PostRepository from '~/clean/interface/repository/postRepository';
import PostDriver from '~/clean/interface/driver/postDriver';
import { Post } from '~/clean/entity/post';
import { User } from '~/clean/entity/user';
import moment from "moment";

export default class PostRepositoryImpl implements PostRepository {
  private readonly postDriver: PostDriver;

  constructor(postDriver: PostDriver) {
    this.postDriver = postDriver;
  }

  async findAll(): Promise<Post[]> {
    const { posts, errors } = await this.postDriver.findAll();
    if (posts && !errors) {
      return posts.map(
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
            postEntity.retweet_count,
            moment(postEntity.created_at).toDate()
          )
      );
    } else if (errors) {
      if (errors[0].code == 215) {
        console.log('No Token')
      }
    }
    return [];
  }
}
