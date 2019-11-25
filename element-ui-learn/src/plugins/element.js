import Vue from 'vue';
import { Button, Row, Col } from 'element-ui';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.component(CollapseTransition.name, CollapseTransition);
