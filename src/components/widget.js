import { h, Component } from "preact";
import Title from './title';
import Item from './item';
import style from './style';

export default class Widget extends Component {
  render(props) {
    return (
        <div class={style.container}>
            <div class={style.carousel}>
            <Item url="https://s3.amazonaws.com/media-p.slid.es/thumbnails/862ee21421b81c9933e0a7b36e3cfcb0/thumb.jpg"></Item>
            <Item url="https://s3.amazonaws.com/media-p.slid.es/thumbnails/9552cb900a291c636913713d430e27a7/thumb.jpg"></Item>
            <Item url="https://s3.amazonaws.com/media-p.slid.es/thumbnails/fc7186409ab04107ea408d48efb609d2/thumb.jpg"></Item>
            <Item url="https://s3.amazonaws.com/media-p.slid.es/thumbnails/503083fc3172e9ba786a45adcd11c74b/thumb.jpg"></Item>
            <Item url="https://s3.amazonaws.com/media-p.slid.es/thumbnails/bd2c901eb18365202b354665b93bf3ee/thumb.jpg"></Item>
            </div> 
        </div>
    );
  }
}