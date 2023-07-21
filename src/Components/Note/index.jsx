import {Container} from "./style";
import {Tag} from "../Tags"

export function Note({data, ...rest}){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            {
                data.tags && // caso exista tag, cria um footer
                <footer> 
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />) 
                        // usa um map para percorrer todas tags
                        // uso tag name para identificar
                    }
                </footer>
            }
        </Container>
    );
}