import { Link } from 'react-router-dom';

import {Container, Form} from './style';

import {Header} from '../../Components/Header';
import {Input} from '../../Components/Input';
import {TextArea} from '../../Components/TextArea';
import {NoteItem} from '../../Components/NoteItem';
import {Section} from '../../Components/Section';
import {Button} from '../../Components/Button';

export function New(){
    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>
                    <Input placeholder="Título" type="text"/>
                    <TextArea placeholder="Observações"/>

                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com.br"/>
                        <NoteItem $isnew placeholder="Novo link"/>
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                        <NoteItem value="React"/>
                        <NoteItem $isnew placeholder="Novo marcador"/>
                        </div>
                    </Section>

                    <Button title="Salvar"/>

                </Form>
            </main>
        </Container>
    );
}