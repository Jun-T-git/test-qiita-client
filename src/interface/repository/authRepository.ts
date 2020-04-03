import { Auth } from '~/domain/auth';
import {Token} from "~/interface/useCase/authUseCase";

export default interface AuthRepository {
    fetch(auth:Auth): Promise<Token>;
}
