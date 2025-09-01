import {Container} from "react-bootstrap";
import Introduction from "components/sections/introduction/introduction";
import Experience from "components/sections/skill/experience";
import Project from "components/sections/project/project";

const HomePage = () => {
    return (
        <div>
            <section>
                <Container>
                    <Introduction />
                </Container>
            </section>
            <section>
                <Container>
                    <Experience />
                </Container>
            </section>
            <section>
                <Container>
                    <Project />
                </Container>
            </section>
        </div>
    )
}

export default HomePage;