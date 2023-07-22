import {FiPlus, FiSearch} from 'react-icons/fi'

import {Container, Brand, Menu, Search, Content, NewNote} from './style';
import { Header } from "../../Components/Header";
import { ButtonText } from "../../Components/ButtonText";
import { Input } from "../../Components/Input"
import { Section } from "../../Components/Section"
import { Note } from "../../Components/Note"

export function Home() {
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>
            
            <Menu>
                <li><ButtonText title="Todos" isActive /></li>
                <li><ButtonText title="Frontend"/></li>
                <li><ButtonText title="Node"/></li>
                <li><ButtonText title="React"/></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: "React Modal", 
                        tags: [
                            {id: '1', name: 'React'}
                        ]
                        }}/>
                    <Note data={{
                        title: "Exemplo de Middleware", 
                        tags: [
                            {id: '1', name: 'Express'},
                            {id: '2', name: 'NodeJs'}
                        ]
                    }}/>
                </Section>
            </Content>

            <NewNote to="/new"> 
                <FiPlus/>
                Criar nota
            </NewNote>

        </Container>

    );
}