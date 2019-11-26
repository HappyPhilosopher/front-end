import Vue from 'vue';
import {
  Button,
  Row,
  Col,
  Container,
  Header,
  Main,
  Footer,
  Aside
} from 'element-ui';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Aside);
Vue.component(CollapseTransition.name, CollapseTransition);
