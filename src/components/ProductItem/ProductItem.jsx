import styles from "./styles.module.scss";
import reloadIcon from '@icons/svgs/rotate_icon.svg';
import heart from '@icons/svgs/heart_icon.svg';
import cart from '@icons/svgs/cart_icon.svg';

function ProductItem({src, preSrc, name, price}) {
    const {boxImg, showImgWhenHover, showFnWhenHover, boxIcon, title, priceCl} = styles;
    return ( 
        <div>
            <div className={boxImg}>
                <img src={src} 
                alt="" 
                />
                <img src={preSrc}
                alt="" 
                className={showImgWhenHover} 
                />

                <div className={showFnWhenHover}>
                    <div className={boxIcon}>
                        <img src={cart} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heart} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={cart} alt='' />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={priceCl}>${price}</div>
        </div>
     );
}

export default ProductItem;