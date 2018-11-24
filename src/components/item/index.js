
import style from './style';
import Views from '../views'

export default (props) => {
    const { imageUrl, url } = props.item
    return (
        <div class={style.item}>
            <a href={`https://slides.com${url}`} target='_blank'><img src={imageUrl} /></a>
        </div>
    )
}