import styles from "./styles.module.scss";
import caybo1 from "../../assets/images/cay_bo.jpg";
import caybo2 from "../../assets/images/cay_bo2.jpg";
import reloadIcon from '@icons/svgs/rotate_icon.svg';
import heart from '@icons/svgs/heart_icon.svg';
import cart from '@icons/svgs/cart_icon.svg';

function ProductItem({src, preSrc, name, price}) {
    const {boxImg, showImgWhenHover, showFnWhenHover, boxIcon, title, priceCl} = styles;
    return ( 
        <div>
            <div className={boxImg}>
                <img src={caybo1} 
                alt="Menu" 
                />
                <img src={caybo2} 
                alt="Menu" 
                className={showImgWhenHover} 
                />

                <div className={showFnWhenHover}>
                    <div className={boxIcon}>
                        <img src={cart} alt=''></img>
                    </div>
                    <div className={boxIcon}>
                        <img src={heart} alt=''></img>
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt=''></img>
                    </div>
                    <div className={boxIcon}>
                        <img src={cart} alt=''></img>
                    </div>
                </div>
            </div>
            <div className={title}>Mì cay bò</div>
            <div className={priceCl}>$2</div>
        </div>
     );
}

export default ProductItem;