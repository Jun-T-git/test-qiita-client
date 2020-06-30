import { initAxios } from '~/clean/driver/utility/axios';
import PostDriver, { PostJson, PostsJson } from '~/clean/interface/driver/postDriver';

export default class PostDriverImpl implements PostDriver {
  async findAll(): Promise<PostsJson> {
    try {
      const response = await initAxios().get(
        'user_timeline.json?screen_name=katsuyatakasu'
      );
      const data: PostJson[] = response.data;
      return { posts: data };
    } catch (e) {
      return { errors: e.response.data.errors };
    }
  }
}
