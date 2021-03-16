export default interface PostPresenterInterface {
  getViewModelList(): Promise<PostViewModel[]>;
}

export class PostViewModel {
  readonly id: number;
  readonly userId: string;
  readonly userName: string;
  readonly userIconUrl: string;
  readonly url: string;
  readonly title: string;
  readonly body: string;
  readonly tagList: string[];
  readonly likesCount: number;
  readonly createdAt: string;

  constructor(
    id: number,
    userId: string,
    userName: string,
    userIconUrl: string,
    url: string,
    title: string,
    body: string,
    tagList: string[],
    likesCount: number,
    createAt: string
  ) {
    this.id = id;
    this.userId = userId;
    this.userName = userName;
    this.userIconUrl = userIconUrl;
    this.url = url;
    this.title = title;
    this.body = body;
    this.tagList = tagList;
    this.likesCount = likesCount;
    this.createdAt = createAt;
  }
}
