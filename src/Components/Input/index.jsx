import { Container } from "./style";

export function Input({icon: Icon, ...rest}){ // icon: usado para transformar para Icon
    return (
        <Container>
            {Icon && <Icon size={20}/>}
            <input {...rest}/>
        </Container>
    );
}

// {Icon && <Icon size={20}/>} condição se o icone existir com &&