import { User } from '~/domain/user';

export class Post {
  readonly id: number;
  readonly user: User;
  readonly text: string;
  readonly favorite: number;
  readonly retweet: number;
  readonly createdAt: Date;

  constructor(
    id: number,
    user: User,
    text: string,
    favorite: number,
    retweet: number,
    createdAt: Date
  ) {
    this.id = id;
    this.user = user;
    this.text = text;
    this.favorite = favorite;
    this.retweet = retweet;
    this.createdAt = createdAt;
  }
  get userId(): number {
    return this.user.id;
  }
  get userScreenName(): string {
    return this.user.screenName;
  }
  get userName(): string {
    return this.user.name;
  }
  get userIconUrl(): string {
    return this.user.iconUrl;
  }
}
