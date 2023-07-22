import {FiArrowLeft, FiUser, FiLock, FiMail, FiCamera} from 'react-icons/fi'
import { Link } from 'react-router-dom';

import {Container, Form, Avatar} from './style';
import {Input} from "../../Components/Input";
import {Button} from "../../Components/Button";

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                    src="https://github.com/gabriel-lima258.png" 
                    alt="Foto do usuário"
                    />

                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input 
                        id='avatar'
                        type="file" 
                        />
                    </label>
                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />
                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />
                <Button title="Salvar"/>
            </Form>

        </Container>
    );
}