import {Container} from './style';
import {Button} from '../../Components/Button';

export function Details(){

  return(
    <Container>
      <h1>Hello user</h1>
      <span>gabriel</span>
      <Button title="Entrar" loading/>
      <Button title="Cadastrar"/>
      <Button title="Voltar"/>
    </Container>
  )
}