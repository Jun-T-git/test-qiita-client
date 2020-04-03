import { Post } from "../domain/post";
import { User } from "../domain/user";
import PostDriver, { PostsJson } from "../interface/driver/postDriver";
import PostRepositoryImpl from '../repository/postRepository';

const postDriver: PostDriver = {
    findAll: (): Promise<PostsJson> => {
        throw "not implemented";
    }
};

describe("#findAll", () => {
    test("domain posts are returned", async () => {
        const posts: PostsJson = {
            posts: [
                {
                    created_at: "Tue Mar 31 01:39:50 +0000 2020",
                    id: 1244801547067731968,
                    id_str: "1244801547067731968",
                    text: "米首都圏に自宅待機命令、違反者に罰金・禁錮刑も https://t.co/RRgCsbr3Kr @Sankei_newsから",
                    truncated: false,
                    entities:{
                        hashtags:[],
                        symbols:[],
                    user_mentions:[
                        {"screen_name": "Sankei_news",
                            "name": "産経ニュース",
                            "id": 562773398,
                            "id_str": "562773398",
                            "indices":[48, 60]}
                        ],
                        urls:[
                            {
                                "url": "https://t.co/RRgCsbr3Kr",
                                "expanded_url": "https://www.sankei.com/world/news/200331/wor2003310019-n1.html",
                                "display_url": "sankei.com/world/news/200…",
                                "indices":[24, 47]
                            }
                        ]},
        source: "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user:{id: 362401254, id_str: "362401254", name: "高須克弥", screen_name: "katsuyatakasu",…},
        "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 243,
            "favorite_count": 884,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "ja"
                }
            ]
        };
        const findAllSpy = jest
            .spyOn(postDriver, "findAll")
            .mockReturnValue(new Promise(resolve => resolve(posts)));
        const postRepository = new PostRepositoryImpl(postDriver);

        expect(await postRepository.findAll()).toEqual([
            new Post(
                1,
                new User(2, "","", ""),
                "postName",
                1,
                1
            )
        ]);
        expect(findAllSpy).toHaveBeenCalledTimes(1);
        findAllSpy.mockClear();
        findAllSpy.mockReset();
    });
});