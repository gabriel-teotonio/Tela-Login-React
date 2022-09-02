import { FormLogin } from "../Form-login"
import { CardLogin, NotAccount } from "./style"




export const Card = () => {
    return (
        <CardLogin>
        <h1>Login</h1>
        <FormLogin />

        <NotAccount>Não tem uma conta? <a href="#">Criar conta</a></NotAccount>
        </CardLogin>
    )
}