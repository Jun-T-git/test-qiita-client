import { Post } from '~/clean/entity/post';
import { User } from '~/clean/entity/user';
import PostDriver, { PostsJson } from '~/clean/interface/driver/postDriver';
import PostRepositoryImpl from '~/clean/repository/postRepository';

const postDriver: PostDriver = {
  findAll: (): Promise<PostsJson> => {
    throw 'not implemented';
  },
};

describe('#findAll', () => {
  test('domain posts are returned', async () => {
    const posts: PostsJson = {
      posts: [
        {
          created_at: 'Tue Mar 31 01:39:50 +0000 2020',
          id: 1244801547067731968,
          id_str: '1244801547067731968',
          text:
            '米首都圏に自宅待機命令、違反者に罰金・禁錮刑も https://t.co/RRgCsbr3Kr @Sankei_newsから',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'Sankei_news',
                name: '産経ニュース',
                id: 562773398,
                id_str: '562773398',
                indices: [48, 60],
              },
            ],
            urls: [
              {
                url: 'https://t.co/RRgCsbr3Kr',
                expanded_url:
                  'https://www.sankei.com/world/news/200331/wor2003310019-n1.html',
                display_url: 'sankei.com/world/news/200…',
                indices: [24, 47],
              },
            ],
          },
          source:
            '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 362401254,
            id_str: '362401254',
            name: '高須克弥',
            screen_name: 'katsuyatakasu',
            location: '',
            description:
              '篤志家、教育者、売れないものかき。チャレンジャー。僧侶。フリーメイソン。ナショナリスト。ギャンブラー。全身癌。ついはい。ちょい役専門役者、医者もできる。',
            url: 'https://t.co/daibwZxJAr',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/daibwZxJAr',
                    expanded_url: 'https://www.takasu.co.jp/',
                    display_url: 'takasu.co.jp',
                    indices: [0, 23],
                  },
                ],
              },
              description: {
                urls: [],
              },
            },
            protected: false,
            followers_count: 670824,
            friends_count: 336,
            listed_count: 4024,
            created_at: 'Fri Aug 26 10:14:42 +0000 2011',
            favourites_count: 953,
            utc_offset: null,
            time_zone: null,
            geo_enabled: true,
            verified: true,
            statuses_count: 106540,
            lang: null,
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'C0DEED',
            profile_background_image_url:
              'http://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_image_url_https:
              'https://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_tile: false,
            profile_image_url:
              'http://pbs.twimg.com/profile_images/1110426165670363136/2ZyuJzHc_normal.jpg',
            profile_image_url_https:
              'https://pbs.twimg.com/profile_images/1110426165670363136/2ZyuJzHc_normal.jpg',
            profile_banner_url:
              'https://pbs.twimg.com/profile_banners/362401254/1553733471',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: true,
            default_profile_image: false,
            following: null,
            follow_request_sent: null,
            notifications: null,
            translator_type: 'none',
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 243,
          favorite_count: 884,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'ja',
        },
      ],
    };
    const findAllSpy = jest
      .spyOn(postDriver, 'findAll')
      .mockReturnValue(new Promise((resolve) => resolve(posts)));
    const postRepository = new PostRepositoryImpl(postDriver);

    expect(await postRepository.findAll()).toEqual([
      new Post(
        1244801547067731968,
        new User(
          362401254,
          'katsuyatakasu',
          '高須克弥',
          'http://pbs.twimg.com/profile_images/1110426165670363136/2ZyuJzHc_normal.jpg'
        ),
        '米首都圏に自宅待機命令、違反者に罰金・禁錮刑も https://t.co/RRgCsbr3Kr @Sankei_newsから',
        884,
        243,
          new Date('Tue MAR 31 01:39:50 +0000 2020')
      ),
    ]);
    expect(findAllSpy).toHaveBeenCalledTimes(1);
    findAllSpy.mockClear();
    findAllSpy.mockReset();
  });
});