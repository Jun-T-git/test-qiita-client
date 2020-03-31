import { initAxios } from '../utility/axios';
import PostDriver, { PostsJson } from '~/interface/driver/postDriver';

export default class PostDriverImpl implements PostDriver {
  async findAll(): Promise<PostsJson> {
    try {
      return await initAxios().get(
        'user_timeline.json?screen_name=katsuyatakasu'
      );
    } catch (e) {
      console.log(e)
      return { errors: e.errors };
    }
  }
}
