import styles from './styles.module.scss';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import classNames from 'classnames';
import { TfiClose } from "react-icons/tfi";
import Login from '@components/ContentsideBar/Login/Login';
import Compare from '@components/ContentsideBar/Compare/Compare';


function SideBar() {
    const { container, overlay, sideBar, sliderSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen, type } = useContext(SideBarContext);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const hadleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />;

            case 'compare':
                return <Compare />;

            case 'wishlist':
                return 'wishlist';

            case 'cart':
                return 'cart';

            default:
                <login />;
        }
    }

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
                
                {hadleRenderContent()}
            </div>
        </div>
     );
}

export default SideBar;