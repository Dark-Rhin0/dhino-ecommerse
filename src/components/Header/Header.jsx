import BoxIcon from '@components/Header/BoxIcon/boxIcon.jsx';
import {dataBoxIcon, dataMenu} from './constants';
import styles from './styles.module.scss';
import Menu from '@components/Header/Menu/Menu.jsx';
import Logo from '@icons/images/GG_Logo.jpg';
import reloadIcon from '@icons/svgs/rotate_icon.svg';
import heart from '@icons/svgs/heart_icon.svg';
import cart from '@icons/svgs/cart_icon.svg';

function MyHeader() {
    const {containerBoxIcon, containerMenu, containerHeader, containerBox, container} = styles;
    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {
                            dataBoxIcon.map((item) => {
                                return <BoxIcon key={item.type} type={item.type} href={item.href} />;
                            })
                        }
                    </div>
                    <div className={containerMenu}>
                        {
                            dataMenu.slice(0, 3).map((item) => {
                                return <Menu key={item.content} content={item.content} href={item.href} />;
                            })
                        }
                    </div>
                </div>
                <div>
                    <img src={Logo} alt="GG Logo" style={{ width: '153px', height: '153px' }} />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {
                            dataMenu.slice(3, dataMenu.length).map((item) => {
                                return <Menu key={item.content} content={item.content} href={item.href} />;
                            })
                        }
                    </div>
                    <div className={containerBoxIcon}>
                        <img width={26}  height={26} src={reloadIcon} alt="Reload" />
                        <img width={26}  height={26} src={heart} alt="Heart" />
                        <img width={26}  height={26} src={cart} alt="Cart" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;