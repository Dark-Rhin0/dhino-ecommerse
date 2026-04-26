import HeaderSideBar from "@components/ContentsideBar/components/HeaderSidebar/HeaderSideBar";
import { PiShoppingCartThin } from "react-icons/pi";
import ItemProduct from "@components/ContentsideBar/components/ItemProduct/ItemProduct";
import styles from './styles.module.scss';
import Button from "@components/Button/Button";

function Cart() {
    const { container, total, boxBtn } = styles;
    return ( 
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<PiShoppingCartThin style={{ fontSize: '30px'}}/>}
                    title={'CART'}
                />

                <ItemProduct />
            </div>

            <div>
                <div className={total}>
                    <p>SUBTOTAL:</p>
                    <p>$199.99</p>
                </div>

                <div className={boxBtn}>
                    <Button content={'VIEW CART'}/>
                    <Button content={'CHECKOUT'} isPrimary={false}/>
                </div>

            </div>
        </div>
     );
}

export default Cart;