import styled from "styled-components";
import Logo from './cta-logo-one.svg';


const Login = (props) =>{
    return(
        <Container>
            <Content>
                <CTA>
                    <CTAlogoOne src={Logo} />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>Disney+ Hotstar is an online video streaming platform owned by Novi Digital Entertainment Private Limited, a wholly owned subsidiary of Star India Private Limited.</Description>
                    <CTAlogoTwo src="/images/cta-logo-two.png"/>
                </CTA>
                <BgImage/>
            </Content>
        </Container>
    );
};

const Container = styled.section`
    overflow: hidden;
    display:flex;
    flex-direction: column;
    text-align: center;
    height:100vh;
`;
const Content = styled.div`
    margiin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex:direction: column;
    padding: 80px 40px;
    height: 100%;
`;
const BgImage = styled.div`
    background-image: url("/images/login-background.jpg");
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index:-1;
`;
const CTA = styled.div`
    
    max-width: 650px;
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

`;

const CTAlogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;
const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsl(0, 0, 95.3%, 1);
    font-size: 12px;
    margin: 0 0 24px;
    line-height: 1.5em;
    letter-spacing: 1px;
`;

const CTAlogoTwo = styled.img`
    max-width: 650px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;


export default Login;