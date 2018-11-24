import { h, Component } from "preact";
import Item from './item';
import style from './style';
import getSlides from '../api';

export default class Widget extends Component {

  constructor() {
    super();
    this.state.slides = []
  }

  componentWillMount(props) {
    getSlides((this.props.user))
      .then(res => this.setState({ slides: res }))
  }

  render(props, state) {
    return (
      <div class={style.container}>
        <div class={style.carousel}>
          {
            state.slides.map((item) => {
              return <Item item={item} />
            })
          }
        </div>
      </div>
    );
  }
}