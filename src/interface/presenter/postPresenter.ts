export default interface PostPresenter {
    getViewModelList(): Promise<PostViewModel[]>;
}

export class PostViewModel {
    readonly id:number;
    readonly userId:number;
    readonly userScreenName:string;
    readonly userName:string;
    readonly userIconUrl:string;
    readonly text:string;
    readonly favoriteCount:number;
    readonly retweetCount:number;
    readonly createdAt:string;

    constructor(
        id:number,
        userId:number,
        userScreenName:string,
        userName:string,
        userIconUrl:string,
        text:string,
        favoriteCount:number,
        retweetCount:number,
        createAt: string
    ) {
        this.id=id;
        this.userId=userId;
        this.userScreenName=userScreenName;
        this.userName=userName;
        this.userIconUrl=userIconUrl;
        this.text=text;
        this.favoriteCount=favoriteCount;
        this.retweetCount=retweetCount;
        this.createdAt=createAt;
    }
}