import styled from "styled-components"
import Bob from "../Imagens/41709a8b318765b6bcf16bca3b9003fa.png"

export default function Habitos() {
    return (
        <Container>
            <NavBar>
                TrackIt
                <img src={Bob} alt="Avatar" />
            </NavBar>

            <Conteudo>
                <header>
                    Meus hábitos
                    <button>+</button>
                </header>

                <CriadorHabito>
                    <input type="text" placeholder="nome do hábito" />
                    <ContainerDias>
                        <button>D</button>
                        <button>S</button>
                        <button>T</button>
                        <button>Q</button>
                        <button>Q</button>
                        <button>S</button>
                        <button>S</button>
                    </ContainerDias>
                    <footer>
                        <span>Cancelar</span>
                        <button>Salvar</button>
                    </footer>
                </CriadorHabito>

                <Habito>
                    <header>Ler 1 capítulo de livro</header>
                    <ContainerHabito>
                        <button>D</button>
                        <button>S</button>
                        <button>T</button>
                        <button>Q</button>
                        <button>Q</button>
                        <button>S</button>
                        <button>S</button>
                    </ContainerHabito>
                </Habito>

                <MensagemVazia>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </MensagemVazia>
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
  display: flex;
  flex-direction: column;
`
const NavBar = styled.div`
  background-color: #126BA5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  color: white;
  font-size: 28px;

  img {
    border-radius: 30px;
    height: 50px;
    width: 50px;
  }
`
const Conteudo = styled.div`
  flex: 1;
  margin: 20px auto 120px;
  width: 90%;
  display: flex;
  flex-direction: column;

  header {
    color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    margin-bottom: 10px;

    button {
      background-color: #52B6FF;
      color: white;
      border: none;
      border-radius: 5px;
      width: 40px;
      height: 35px;
      font-size: 24px;
    }
  }
`
const CriadorHabito = styled.div`
    background-color: #ffffff;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  input {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 18px;
  }

  footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;

    span {
      color: #52B6FF;
      font-size: 16px;
      cursor: pointer;
    }

    button {
      background-color: #52B6FF;
      color: white;
      border: none;
      border-radius: 5px;
      height: 35px;
      width: 80px;
      font-size: 16px;
    }
  }
`
const ContainerDias = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 15px;

  button {
    background-color: #ffffff;
    height: 35px;
    width: 35px;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    font-size: 16px;
  }
`
const Habito = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;

  header {
    font-size: 18px;
    color: #666;
    margin-bottom: 10px;
  }
`
const ContainerHabito = styled.div`
  display: flex;
  gap: 5px;

  button {
    background-color: #ffffff;
    height: 35px;
    width: 35px;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    font-size: 16px;
  }
`
const MensagemVazia = styled.div`
  font-size: 18px;
  color: #666;
  margin-top: 20px;
`
const Footer = styled.div`
  color: #52B6FF;
  background-color: #fff;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;

  div {
    background-color: #52B6FF;
    color: #fff;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    font-size: 16px;
  }
`
