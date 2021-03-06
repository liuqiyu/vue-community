import Vue from 'vue';

import {
  Pagination,
  Button,
  Select,
  Option,
  Table,
  TableColumn,
  Input,
  Dialog,
  Message,
  Form,
  FormItem,
  Radio,
  RadioGroup,
  RadioButton,
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Input);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.prototype.$message = Message;
