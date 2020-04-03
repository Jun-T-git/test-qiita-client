export default interface postDriver {
    findAll(): Promise<PostsJson>;
}

export type PostsJson = {
    posts?: PostJson[];
    errors?: Error;
};

export type PostJson = {
    created_at: string;
    id: number;
    id_str: string;
    text: string;
    truncated: boolean;
    entities: {
        hashtags: Array<Hashtag>;
        symbols: Array<Symbol>;
        user_mentions: Array<UserMention>;
        urls: Array<Url>;
    };
    source: string;
    in_reply_to_status_id: number | null;
    in_reply_to_status_id_str: string | null;
    in_reply_to_user_id: number | null;
    in_reply_to_user_id_str: string | null;
    in_reply_to_screen_name: string | null;
    user: User;
    geo: Geo | null;
    coordinates: CoordinatesJson | null;
    place: Place | null;
    contributors: null;
    is_quote_status: boolean;
    retweet_count: number;
    favorite_count: number;
    favorited: boolean;
    retweeted: boolean;
    possibly_sensitive: boolean;
    lang: string;
};

export type Hashtag = {
    indices: Array<number>;
    text: string;
};

export type Symbol = {
    indices: Array<number>;
    text: string;
};

export type UserMention = {
    name: string | null;
    indices: Array<number> | null;
    screen_name: string | null;
    id: number | null;
    id_str: string | null;
};

export type Url = {
    indices: Array<number>;
    url: string;
    display_url: string;
    expanded_url: string;
};

export type User = {
    id: number;
    id_str: string;
    name: string;
    screen_name: string;
    location: string | null;
    // profile_location: string | null;
    description: string | null;
    url: string | null;
    entities: {
        url: {
            urls: Array<Url>;
        };
        description: {
            urls: Array<Url>;
        };
    };
    protected: boolean;
    followers_count: number;
    friends_count: number;
    listed_count: number;
    created_at: string;
    favourites_count: number;
    utc_offset: string | null;
    time_zone: string | null;
    geo_enabled: boolean;
    verified: boolean;
    statuses_count: number;
    lang: string | null;
    contributors_enabled: boolean;
    is_translator: boolean;
    is_translation_enabled: boolean;
    profile_background_color: string | null;
    profile_background_image_url: string | null;
    profile_background_image_url_https: string | null;
    profile_background_tile: string | null | boolean;
    profile_image_url: string;
    profile_image_url_https: string | null;
    profile_banner_url: string | null;
    profile_link_color: string | null;
    profile_sidebar_border_color: string | null;
    profile_sidebar_fill_color: string | null;
    profile_text_color: string | null;
    profile_use_background_image: string | null | boolean;
    has_extended_profile: string | null | boolean;
    default_profile: boolean;
    default_profile_image: boolean;
    following: boolean | null;
    follow_request_sent: boolean | null;
    notifications: boolean | null;
    translator_type: string | boolean;
};

export type Geo = {
    type: string;
    coordinates: Array<number>;
};

export type CoordinatesJson = {
    type: string;
    coordinates: Array<number>;
};

export type Place = {
    id: string;
    url: string;
    place_type: string;
    name: string;
    full_name: string;
    country_code: string;
    country: string;
    bounding_box: {
        type: string;
        coordinates: Array<Array<Array<number>>>;
    };
    attributes: {};
};
