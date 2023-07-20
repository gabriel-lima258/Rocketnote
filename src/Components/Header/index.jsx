
import {RiShutDownLine} from 'react-icons/ri'
import {Container, Profile, Logout} from './style';

export function Header(){
    return(
        <Container>
            <Profile>
                <img 
                    src="https://github.com/gabriel-lima258.png" 
                    alt="foto de Gabriel Lima" 
                />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Gabriel Lima da Silva</strong>
                </div>
            </Profile>
            
            <Logout>
                <RiShutDownLine/>
            </Logout>     
        </Container>
    );
}