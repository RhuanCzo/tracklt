import styled from "styled-components"
import Bob from "../Imagens/41709a8b318765b6bcf16bca3b9003fa.png"

export default function Habitos() {
    return (
        <Container>
            <NavBar>
                TrackIt
                <img src={Bob} />
            </NavBar>
            <Conteudo>
                <header>
                    Meus hábitos
                    <button>+</button>
                </header>
                <CriadorHabito>
                    <input type="text" placeholder="nome do hábito" />
                    <ContainerDias>
                        <button>T</button>
                        <button>T</button>
                        <button>T</button>
                        <button>T</button>
                        <button>T</button>
                        <button>T</button>
                        <button>T</button>
                    </ContainerDias>
                    <footer>
                        cancelar
                        <button>Salvar</button>
                    </footer>
                </CriadorHabito>
                <Habito>
                    <header>
                    Ler 1 capítulo de livro
                    </header>
                    <ContainerHabito>
                        <button>T</button>
                        <button>T</button>
                        <button>T</button>
                        <button>T</button>
                        <button>T</button>
                        <button>T</button>
                        <button>T</button>
                    </ContainerHabito>
                </Habito>
                <div>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </div>
            </Conteudo>
            <Footer>
                Habitos
                <div>Hoje</div>
                Histórico
            </Footer>
        </Container>
    )
}

const Container = styled.div`
height: 100dvh;
background-color: #CFCFCF;
`
const NavBar = styled.div`
background-color: #126BA5;
display:flex;
align-items: center;
justify-content: space-between;
height: 8%;
width: 100%;
font-size: 30px;
img {
    border-radius: 30px;
    height:50px;
    width: 50px;
}
`
const Conteudo = styled.div`
display: flex;
flex-direction: column;
align-items: center;

header {
    color: #126BA5;
    width: 100%;
    display:flex;
    margin: 10px;
    justify-content: space-around;
    align-items: center;
    font-size: 25px;
}
button{
    background-color: aqua;
    width: 40px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}

div {
    width: 90%;
    padding: 10px;
    font-size: 21px;
    text-align: start;
}
`
const Footer = styled.div`
background-color: aqua;
height: 10%;
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
position: fixed;
bottom: 0;

div {
    background-color: aliceblue;
    height: 90px;
    width: 90px;
    border-radius: 50px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom:50px ;
}
`
const CriadorHabito = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 150px;
border-radius: 15px ;
background-color: #ffffff;
margin-top: 15px;

input {
    width: 90%;
    height: 40px;
    margin-top: 10px;
    border-radius: 10px;
    font-size: 21px ;
}

footer{
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    font-size: 20px;
}

button {
    margin-left: 10px;
    height: 35px;
    width: 25%;
    font-size: 20px;
}

`
const ContainerDias = styled.div`
width: 100%;
display: flex;

button {
    background-color: #ffffff;
    height: 30px;
    width: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
`
const Habito = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 120px;
border-radius: 15px ;
background-color: #ffffff;
margin-top: 15px;

header{

}

`
const ContainerHabito = styled.div`
width: 100%;
display: flex;
background-color: aliceblue;
display: flex;
justify-content: space-around;

button {
    background-color: #ffffff;
    height: 30px;
    width: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
    `
