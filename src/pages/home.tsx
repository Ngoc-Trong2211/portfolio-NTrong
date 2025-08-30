import {Container} from "react-bootstrap";
import Introduction from "@/components/sections/introduction/introduction";

const HomePage = () => {
    return (
        <div>
            <section>
                <Container>
                    <Introduction />
                </Container>
            </section>
        </div>
    )
}

export default HomePage;