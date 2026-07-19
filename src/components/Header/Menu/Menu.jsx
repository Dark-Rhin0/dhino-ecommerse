import { SideBarContext } from '@/contexts/SideBarProvider';
import styles from '../styles.module.scss';
import { useContext, useState } from 'react';
import { StoreContext } from '@/contexts/storeProvider';
import Cookies from 'js-cookie';

function Menu({content, href}) {
    const { menu, subMenu } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);
    const { userInfo, handleLogOut } = useContext(StoreContext);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);

    const handleClickShowLogin = () => {
        if (content === 'Sign in' && !userInfo) {
            setIsOpen(true);
            setType('login');
        }
    };

    const handleRenderText = () => {
        if (content === 'Sign in' && userInfo) {
            return `hello: ${userInfo?.username}`;
        }else {
            return content;
        }
    };

    const handleHover = () => {
        console.log(content);

        if(content === 'Sign in' && userInfo) {
            setIsShowSubMenu(true);
        }
    };

    return ( 
        <div 
        className={menu} 
        onMouseEnter={handleHover} 
        onClick={handleClickShowLogin}
        >
            {handleRenderText(content)}

            {isShowSubMenu && (
                <div 
                    onMouseLeave={() => setIsShowSubMenu(false)}
                    className={subMenu}
                    onClick={handleLogOut}
                >
                    LOG OUT
                </div>
            )}
        </div>
     );
}

export default Menu;