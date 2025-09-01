import { Button, Result } from "antd";

const ErrorPage = () => {
    return(
        <Result
            status="404"
            title={<span style={{color: "white"}}>404</span>}
            subTitle={<span style={{ color: "white" }}>Sorry, the page you visited does not exist.</span>}
            extra={<Button type="primary"><a href="/">Back Home</a></Button>}
        />
    )
}

export default ErrorPage;