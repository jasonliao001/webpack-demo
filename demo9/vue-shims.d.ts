declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
// 由于TypeScript不认识以为.vue文件结尾的文件，所有让其支持import App from './App.vue'导入语句，需要这个来定义.vue文件的类型
