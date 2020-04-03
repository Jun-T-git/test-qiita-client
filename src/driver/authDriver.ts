import AuthDriver, {AuthJson} from "~/interface/driver/authDriver";
import {Auth} from "~/domain/auth";
import {login} from "~/utility/axios";

export default class AuthDriverImpl implements AuthDriver{

    async fetch(auth: Auth): Promise<AuthJson> {
        try{
            login
        }
    }

}