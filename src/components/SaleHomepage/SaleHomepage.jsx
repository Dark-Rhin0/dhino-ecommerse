import styles from './styles.module.scss';
import img1 from '@/assets/images/tok_lac.jpg';
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
                <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg" alt="" />
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
                <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg" alt="" />
            </div>
        </div>
     );
}

export default SaleHomepage;