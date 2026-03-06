import { Drawer, Divider, Tag, Button } from "antd"

export interface IProjectDetail {
    id: string;
    title: string;
    overview: string;
    techStack: {
        frontend: string[];
        backend: string[];
        tools: string[];
    };
    keyFeatures: string[];
    sourceCode: {
        frontendUrl: string;
        backendUrl: string;
    };
}

interface IProps{
    setIsOpDrawer: (value: boolean) => void;
    isOpenDrawer: boolean;
    setIsActive: (value: boolean) => void;
    project: IProjectDetail | null;
}

const DetailProject = (props: IProps) => {

    const {isOpenDrawer, setIsOpDrawer, setIsActive, project} = props;

    return(
        <Drawer
            title={project?.title ?? "Project Details"}
            onClose={() => {
                setIsOpDrawer(false);
                setIsActive(false)
            }}
            open={isOpenDrawer}
            width={520}
            placement="right"
        >   
            {!project ? null : (
                <>
                    <h3>Project Overview</h3>
                    <p style={{lineHeight: "1.6"}}>
                        {project.overview}
                    </p>

                    <Divider />

                    <h3>Tech Stack</h3>

                    <h4>Frontend</h4>
                    <div style={{marginBottom: 12}}>
                        {project.techStack.frontend.map((t) => (
                            <Tag color="blue" key={t}>{t}</Tag>
                        ))}
                    </div>

                    <h4>Backend</h4>
                    <div style={{marginBottom: 12}}>
                        {project.techStack.backend.map((t) => (
                            <Tag color="volcano" key={t}>{t}</Tag>
                        ))}
                    </div>

                    <h4>Supporting Tools</h4>
                    <div>
                        {project.techStack.tools.map((t) => (
                            <Tag key={t}>{t}</Tag>
                        ))}
                    </div>

                    <Divider />

                    <h3>Key Features</h3>
                    <ul style={{paddingLeft: 18, lineHeight: "1.8"}}>
                        {project.keyFeatures.map((f) => (
                            <li key={f}>{f}</li>
                        ))}
                    </ul>

                    <Divider />

                    <h3>Source Code</h3>

                    <div style={{display: "flex", gap: "10px", flexWrap: "wrap"}}>
                        <Button
                            type="primary"
                            href={project.sourceCode.backendUrl}
                            target="_blank"
                        >
                            Backend GitHub
                        </Button>

                        <Button
                            type="default"
                            href={project.sourceCode.frontendUrl}
                            target="_blank"
                        >
                            Frontend GitHub
                        </Button>
                    </div>
                </>
            )}

        </Drawer>
    )
}

export default DetailProject