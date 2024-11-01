import { Button } from '../../components/Button';
import { InputLogin } from '../../components/InputLogin';
import { Container, Card, Tittle1, Header, LogoTop, Tittle2, Span, Span1,} from './style';
import logoTop from '../../assets/americanas.png';
import logoLogin from '../../assets/login.png'
export const Login = () => {

    const handleLogin = () => {
        alert("Bem vindo");
    };

           
    return (
        <Container>
            <Header>
                 <LogoTop src={logoTop} alt="Logo americanas"></LogoTop> 
                </Header>
                        
            <Card>
                <logoLogin src={logoLogin} alt="Logo Login"></logoLogin>
                <Tittle1>login do cliente</Tittle1> 
                <Span>Veja seus pedidos de forma fácil, compre mais rápido
                    e tenha uma experiência personalizada</Span>   

                    <InputLogin label="*e-mail" placeholder="" type="email" />
                    <InputLogin label="*senha" placeholder="" type="password" />

                <Button title="continuar" handleFunction={handleLogin}/>

                <Tittle2>Não tem cadastro? cadastre-se</Tittle2> 
                <Span1>Ao continuar com o acesso, você concorda com a
                    nossa política de privacidade</Span1> 
                     
            </Card>
        </Container>
    );
};
