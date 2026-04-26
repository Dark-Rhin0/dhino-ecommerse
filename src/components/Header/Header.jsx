import BoxIcon from '@components/Header/BoxIcon/BoxIcon.jsx';
import {dataBoxIcon, dataMenu} from './constants';
import styles from './styles.module.scss';
import Menu from '@components/Header/Menu/Menu.jsx';
import Logo from '@icons/images/GG_Logo2.png';
import { TfiReload } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartThin } from "react-icons/pi";
import useScrollHandling from '@/hooks/useScrollHanding';
import { useEffect, useState, useContext } from 'react';
import classNames from 'classnames'
import { SideBarContext } from '@/contexts/SideBarProvider';


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
    const { setIsOpen, setType } = useContext(SideBarContext);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    }


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
                                return <BoxIcon content={item.type} type={item.type} href={item.href} />;
                            })
                        }
                    </div>
                    <div className={containerMenu}>
                        {
                            dataMenu.slice(0, 3).map((item) => {
                                return <Menu contnent={item.content} content={item.content} href={item.href} setIsOpen={setIsOpen}/>;
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
                                return <Menu contnent={item.content} content={item.content} href={item.href} setIsOpen={setIsOpen}/>;
                            })
                        }
                    </div>
                    <div className={containerBoxIcon}>
                        <TfiReload style={{
                            fontSize: '21px',
                            }}
                            onClick={() => handleOpenSideBar('compare')}
                        />
                        <IoMdHeartEmpty style={{
                            fontSize: '25px',
                            }}
                            onClick={() => handleOpenSideBar('wishlist')}
                        />
                        <PiShoppingCartThin style={{
                            fontSize: '25px',
                            }}
                            onClick={() => handleOpenSideBar('cart')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;