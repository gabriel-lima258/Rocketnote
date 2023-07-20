import { Container, Links, Content } from "./style";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";
import { Header } from "../../Components/Header";
import { Section } from "../../Components/Section";
import { Tag } from "../../Components/Tags";

export function Details() {
  return (
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir nota"/>

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Beatae ea nulla laboriosam odio provident commodi?
             A temporibus perferendis ullam sapiente, magni suscipit odit,
             A temporibus perferendis ullam sapiente, magni suscipit odit,
             consectetur dicta, consequatur nam iusto praesentium sit.
             consectetur dicta, consequatur nam iusto praesentium sit.
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express"/>
            <Tag title="Node"/>
          </Section>

          <Button title="Voltar" />

        </Content>
      </main>
    </Container>
  );
}
