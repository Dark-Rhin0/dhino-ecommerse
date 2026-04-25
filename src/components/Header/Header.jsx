import BoxIcon from '@components/Header/BoxIcon/BoxIcon.jsx';
import {dataBoxIcon, dataMenu} from './constants';
import styles from './styles.module.scss';
import Menu from '@components/Header/Menu/Menu.jsx';
import Logo from '@icons/images/GG_Logo2.png';
import reloadIcon from '@icons/svgs/rotate_icon.svg';
import heart from '@icons/svgs/heart_icon.svg';
import cart from '@icons/svgs/cart_icon.svg';
import useScrollHandling from '@/hooks/useScrollHanding';
import { useEffect, useState } from 'react';
import classNames from 'classnames';


function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        fixedHeader,
        topHeader,
    } = styles;

    const {scrollPosition} = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);


    useEffect(() => {
        setFixedPosition(scrollPosition > 80);
    }, [scrollPosition]);

    return (
        <div className={classNames(container, topHeader, {
                [fixedHeader]: fixedPosition,
        })}>
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
                    <img src={Logo} alt="GG Logo" />
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