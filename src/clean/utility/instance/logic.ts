import PostRepository from '~/clean/repository/postRepository';
import PostDriver from '~/clean/driver/postDriver';
import PostUseCase from '~/clean/useCase/postUseCase';
import PostPresenter from '~/clean/presenter/postPresenter';
import AuthDriver from '~/clean/driver/authDriver';
import AuthRepository from '~/clean/repository/authRepository';
import AuthUseCase from '~/clean/useCase/authUseCase';
import AuthController from '~/clean/controller/authController';

const postRepository = new PostRepository(new PostDriver());
const postUseCase = new PostUseCase(postRepository);
export const postPresenter = new PostPresenter(postUseCase);

const authRepository = new AuthRepository(new AuthDriver());
const authUseCase = new AuthUseCase(authRepository);
export const authController = new AuthController(authUseCase);
