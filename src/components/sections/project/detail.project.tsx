import { Drawer, Divider, Tag, Button } from "antd"
import { useLanguage } from "../../../context/LanguageContext";

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
    const { lang } = useLanguage();

    return(
        <Drawer
            title={project?.title ?? (lang === "en" ? "Project Details" : "Chi tiết dự án")}
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
                    <h3>{lang === "en" ? "Project Overview" : "Tổng quan dự án"}</h3>
                    <p style={{lineHeight: "1.6"}}>
                        {project.overview}
                    </p>

                    <Divider />

                    <h3>{lang === "en" ? "Tech Stack" : "Công nghệ sử dụng"}</h3>

                    {project.techStack.frontend.length > 0 && (
                        <>
                            <h4>{lang === "en" ? "Frontend" : "Frontend"}</h4>
                            <div style={{marginBottom: 12}}>
                                {project.techStack.frontend.map((t) => (
                                    <Tag style={{marginTop: 5}} color="blue" key={t}>{t}</Tag>
                                ))}
                            </div>
                        </>
                    )}

                    <h4>Backend</h4>
                    <div style={{marginBottom: 12}}>
                        {project.techStack.backend.map((t) => (
                            <Tag style={{marginTop: 5}} color="volcano" key={t}>{t}</Tag>
                        ))}
                    </div>

                    <h4>{lang === "en" ? "Supporting Tools" : "Công cụ hỗ trợ"}</h4>
                    <div style={{marginBottom: 12, marginTop: 5}}>
                        {project.techStack.tools.map((t) => (
                            <Tag key={t}>{t}</Tag>
                        ))}
                    </div>

                    <Divider />

                    <h3>{lang === "en" ? "Key Features" : "Tính năng chính"}</h3>
                    <ul style={{paddingLeft: 18, lineHeight: "1.8"}}>
                        {project.keyFeatures.map((f) => (
                            <li key={f}>{f}</li>
                        ))}
                    </ul>

                    <Divider />

                    <h3>{lang === "en" ? "Source Code" : "Mã nguồn"}</h3>

                    <div
                        style={{
                            display: "flex",
                            gap: "12px",
                            flexWrap: "wrap",
                            marginTop: "10px"
                        }}
                    >
                        {project.sourceCode.backendUrl && (
                            <Button
                                type="primary"
                                href={project.sourceCode.backendUrl}
                                target="_blank"
                            >
                                {lang === "en" ? "Backend GitHub" : "GitHub Backend"}
                            </Button>
                        )}

                        {project.sourceCode.frontendUrl && (
                            <Button
                                href={project.sourceCode.frontendUrl}
                                target="_blank"
                            >
                                {lang === "en" ? "Frontend GitHub" : "GitHub Frontend"}
                            </Button>
                        )}
                    </div>
                </>
            )}

        </Drawer>
    )
}

export default DetailProject