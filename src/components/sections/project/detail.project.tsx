import { Drawer } from "antd"

interface IProps{
    setIsOpDrawer: (value: boolean) => void;
    isOpenDrawer: boolean;
    setIsActive: (value: boolean) => void;
}

const DetailProject = (props: IProps) => {

    const {isOpenDrawer, setIsOpDrawer, setIsActive} = props;

    return(
        <Drawer
            title="Detail project"
            closable={{ 'aria-label': 'Close Button' }}
            onClose={() => {
                setIsOpDrawer(false);
                setIsActive(false)
            }}
            open={isOpenDrawer}
            width={500}
            placement="right"
        >   
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa odit, quam praesentium sint perspiciatis deleniti pariatur ullam in aperiam velit tempora id illum maxime, maiores at temporibus excepturi eligendi dolore.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa odit, quam praesentium sint perspiciatis deleniti pariatur ullam in aperiam velit tempora id illum maxime, maiores at temporibus excepturi eligendi dolore.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa odit, quam praesentium sint perspiciatis deleniti pariatur ullam in aperiam velit tempora id illum maxime, maiores at temporibus excepturi eligendi dolore.</p>
        </Drawer>
    )
}

export default DetailProject;