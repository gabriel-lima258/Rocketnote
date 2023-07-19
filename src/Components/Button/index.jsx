import { Container } from './styles';

export function Button({title, loading = false, ...rest}) {
    return (
        <Container 
        type="button"
        disabled={loading} // propriedade de carregamento caso seja verdadeiro, uso falso como padrão caso eu não especifique no seu uso
        {...rest} // ...rest é usado quando não quero especificar todas prorpriedades do botão
        >
            {loading ? 'Carregando' : title} 
        </Container>
    );
}