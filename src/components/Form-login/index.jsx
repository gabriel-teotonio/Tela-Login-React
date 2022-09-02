import * as C from "./style"




export const FormLogin = () => {
    return (
        <C.Form>
            <C.BoxInput>
                <C.Label htmlFor="">Usuário</C.Label>
                <C.Input placeholder="seu nome de usuário" type="text" />
            </C.BoxInput>
            <C.BoxInput>
                <C.Label htmlFor="">Senha</C.Label>
                <C.Input placeholder="sua senha" type="password"/>
            </C.BoxInput>
            <C.ButtonLogin type="submit">Entrar</C.ButtonLogin>
        </C.Form>
    )
}