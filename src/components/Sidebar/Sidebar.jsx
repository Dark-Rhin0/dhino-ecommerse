import styles from './styles.module.scss';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import classNames from 'classnames';
import { TfiClose } from "react-icons/tfi";
import Login from '@components/ContentsideBar/Login/Login';


function SideBar() {
    const { container, overlay, sideBar, sliderSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen } = useContext(SideBarContext);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return ( 
        <div className={container}>
            <div 
                className={classNames({
                    [overlay]: isOpen
                })}

                onClick={handleToggle}
            />
            <div 
                className={classNames(sideBar, {
                    [sliderSideBar]: isOpen
                })}
            >
                {isOpen && (
                <div className={boxIcon} onClick={handleToggle}>
                    <TfiClose />
                </div>
                )}
                
                <Login />
            </div>
        </div>
     );
}

export default SideBar;