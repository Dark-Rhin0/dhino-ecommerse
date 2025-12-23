import Button from '../Button/Button';
import styles from './styles.module.scss';

function Banner() {
    const { container, content, title, des } = styles
    return ( 
        <div className={container}>
            <div className={content}>
                <h1 className={title}>GG OPPA KOREAN FOOD</h1>
                <div className={des}>
                    Gọi OPPA, ăn thả ga. No liền nha, vui cực đã!
                </div>

                <Button content={'Mua ngay'}/>
            </div>
        </div>
     );
}

export default Banner;