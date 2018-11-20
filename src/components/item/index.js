
import style from './style';

export default (props) => {
return (
    <div class={style.item}>
        <img src={props.url} />
    </div>
    )
}