import styled from "styled-components"
import logo from "../Imagens/image.png"

export default function Cadastro () {
    return (
        <>
        <Container>
                <Logo src={logo}/>
            <Form>
                <FormWrapper>
                <input type="email" name="email" required placeholder="email"/>
                <input type="password" name="senha" required placeholder="senha"/>
                <input type="text" name="nome" required placeholder="nome"/>
                <input type="url" name="foto" required placeholder="foto"/>
                <button type="submit">Entrar</button>
                </FormWrapper>
            </Form>
            <h1>Não tem uma conta? Cadastre-se!</h1>
        </Container>
        </>
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
    width: 100%;
    border-radius: 10px;
    margin-top: 10px;
    font-size: 20px;
}

h1 {
    padding-top: 15px;
    font-size: 15px;
}
`

const Form = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%; /* ou um valor fixo, como 300px */
    max-width: 400px;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
`

// alt shift A


        

