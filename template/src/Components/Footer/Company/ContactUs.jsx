import { Header } from "../../Header/Header"
import { Footer } from "../Footer"
import { Container, HeaderBackground, Text } from "./CompanyStyled"

export const ContactUs = () => {

    return (
        <>
        <Header headerColor="dark"/>
        <HeaderBackground></HeaderBackground>
        <Container >
            <h4>Company</h4>
            <di>
                <h4>Contact us</h4>
                <Text>
                    <h5>Contact us</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit debitis possimus accusantium repellat expedita amet accusamus sed pariatur natus recusandae quo aliquam, ullam labore rerum, cumque velit doloremque harum numquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit debitis possimus accusantium repellat expedita amet accusamus sed pariatur natus recusandae quo aliquam, ullam labore rerum, cumque velit doloremque harum numquam.</p>
                    <div></div>
                </Text>
            </di>
        </Container>
        <Footer/>
        </>
    )
}