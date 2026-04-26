import HeaderSideBar from "@components/ContentsideBar/components/HeaderSidebar/HeaderSideBar";
import { IoMdHeartEmpty } from "react-icons/io";
import styles from "./styles.module.scss";
import ItemProduct from "@components/ContentsideBar/components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

function WishList() {
    const {container, boxBtn} = styles;
    return ( 
        <div className={container}>
            <div>
                <HeaderSideBar 
                    icon={
                        <IoMdHeartEmpty
                            style={{
                                fontSize: '30px'
                            }}
                        />
                    }
                    title='WISHLIST'
                />

                <ItemProduct />
            </div>

            <div className={boxBtn}>
                <Button content={'VIEW WISHLIST'}/>
                <Button content={'ADD ALL TO CART'} isPrimary={false} />
            </div>
        </div>
     );
}

export default WishList;