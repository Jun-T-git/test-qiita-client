import { Post } from "~/clean/entity/post";
import PostRepository from "~/clean/interface/repository/postRepository";
import PostUseCaseImpl from "~/clean/useCase/postUseCase";

const postRepository: PostRepository = {
    findAll: (): Promise<Post[]> => {
        throw "not implemented";
    }
};

describe("#fetchPosts", () => {
    test("domain posts are returned", async () => {
        const post1 = { id: 1 } as Post;
        const post2 = { id: 2 } as Post;
        const findAllSpy = jest
            .spyOn(postRepository, "findAll")
            .mockReturnValue(new Promise(resolve => resolve([post1, post2])));
        const postUseCase = new PostUseCaseImpl(postRepository);

        expect(await postUseCase.fetchPosts()).toEqual([post1, post2]);
        expect(findAllSpy).toHaveBeenCalledTimes(1);
        findAllSpy.mockClear();
        findAllSpy.mockReset();
    });
});