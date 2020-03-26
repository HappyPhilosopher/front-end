<template>
  <div>
    <m-form :model="model" :rules="rules" ref="form-test">
      <m-form-item label="用户名" prop="username">
        <m-input v-model="model.username" type="text" />
      </m-form-item>
      <m-form-item label="密码" prop="password">
        <test>
          <m-input v-model="model.password" type="password" />
        </test>
      </m-form-item>
      <m-form-item>
        <button @click="test">submit</button>
      </m-form-item>
    </m-form>
  </div>
</template>

<script>
import MInput from '@/components/formTest/MInput';
import MFormItem from '@/components/formTest/MFormItem';
import MForm from '@/components/formTest/MForm';
import Test from '@/components/formTest/Test';
import Notice from '@/components/notice';
import create from '@/assets/js/utils/create';

export default {
  name: 'FormTest',
  data() {
    return {
      model: {
        username: 'lisi',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '用户名必填'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空'
          }
        ]
      }
    };
  },
  methods: {
    test() {
      this.$refs['form-test'].validate(isValid => {
        const notice = create(Notice, {
          title: '登录提示',
          message: isValid ? '登录成功' : '登陆失败',
          duration: 2000
        });
        notice.show();
      });
    }
  },
  components: {
    MInput,
    MFormItem,
    MForm,
    Test
  }
};
</script>

<style lang="scss" scoped></style>
