import styled from "styled-components"
import logo from "../Imagens/image.png"


export default function Login () {
    return (
        <Container>
                <Logo src={logo}/>
            <form>
                <div>
                <input type="text" name="email" required placeholder="email"/>
                <input type="text" name="senha" required placeholder="senha"/>
                <button type="submit">Entrar</button>
                </div>
            </form>
            <h1>Não tem uma conta? Cadastre-se!</h1>
        </Container>
    )
}

const Logo = styled.img`
height: 190px;
width: 190px;
padding-top: 50px;
`
const Container = styled.div`
height: 100vh;
display:flex;
align-items: center;
flex-direction: column;


input,button {
    height: 45px;
    width: 90%;
    border-radius: 10px;
    margin-top: 10px;
    font-size: 20px;
}

h1 {
    padding-top: 15px;
    font-size: 15px;
}
`
