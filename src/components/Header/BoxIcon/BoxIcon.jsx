import styles from '../styles.module.scss';
import fbicon from '@icons/svgs/fb_icon.svg';
import igicon from '@icons/svgs/ig_icon.svg';
import tticon from '@icons/svgs/tiktok_icon.svg';

function BoxIcon({type, href}) {
    const {boxIcon} = styles;

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbicon;
            case 'ig':
                return igicon;
            case 'tiktok':
                return tticon;
            default:
                return null;
        }
    };

    return (
        <div className={boxIcon}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
}

export default BoxIcon;