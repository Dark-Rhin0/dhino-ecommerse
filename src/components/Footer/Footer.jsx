import { dataMenu } from './constant';
import styles from './styles.module.scss';
import logo from '@/assets/images/GG_Logo2.png';

function MyFooter() {

    const {container, boxNav} = styles;

    return (
        <div className={container}>
            <div>
                <img src={logo} alt="" />
            </div>

            <div className={boxNav}>
                {dataMenu.map((item) => (
                    <div>{item.content}</div>
                ))}
            </div>

            <div>
                <p style={{textAlign: 'center', color: '#756e5cd0'}}>Guaranteed safe checkout</p>
                <img 
                src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png"
                alt=""
                style={{filter: 'brightness(0) contrast(1050%)'}}
                />
            </div>

            <div style={{textAlign: 'center', color: '#756e5cd0', marginTop: '20px'}}>
                Copyright © 2026 GGOPPA theme. Created by GGOPPA Team.
            </div>
        </div>
    );
}

export default MyFooter;