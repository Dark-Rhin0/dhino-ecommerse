import styles from './styles.module.scss';
import Button from "@components/Button/Button";
import useTranslateXImage from '@/hooks/usetranslateXImage';

function SaleHomepage() {
    const {container, title, des, boxBtn, boxImage} = styles;

    const { translateXPosition } = useTranslateXImage();

    return ( 
        <div className={container}>
            <div className={boxImage}
            style={{
                transform: `translateX(${translateXPosition}px)`,
                transition: 'transform 0.6s ease-out',
            }}
            >
                <img src="https://brandlessmfr.com/wp-content/uploads/2024/07/Image_1.jpeg" alt="" />
            </div>

            <div>
                <h2 className={title}>Sale Of The Year</h2>
                <p className={des}>Ưu đãi ngập tràn, giảm giá lên đến 50% cho các sản phẩm nổi bật</p>
            

                <div className={boxBtn}>
                    <Button content={"Xem Thêm"} isPrimary={false} />
                </div>
            </div>

            <div className={boxImage}
            style={{
                transform: `translateX(-${translateXPosition}px)`,
                transition: 'transform 0.6s ease-out',
            }}
            >
                <img src="https://brandlessmfr.com/wp-content/uploads/2024/07/Image_2.jpeg" alt="" />
            </div>
        </div>
     );
}

export default SaleHomepage;