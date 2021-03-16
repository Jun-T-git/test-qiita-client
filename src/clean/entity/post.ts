import { User } from '~/clean/entity/user';

export class Post {
  readonly id: number;
  readonly user: User;
  readonly title: string;
  readonly body: string;
  readonly tags: string[];
  readonly likes: number;
  readonly createdAt: Date;

  constructor(
    id: number,
    user: User,
    title: string,
    body: string,
    tags: string[],
    likes: number,
    createdAt: Date
  ) {
    this.id = id;
    this.user = user;
    this.title = title;
    this.body = body;
    this.tags = tags;
    this.likes = likes;
    this.createdAt = createdAt;
  }
}
