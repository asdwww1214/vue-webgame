import Vue from 'vue'; //package.json에서 vue 설치했던거 가져오는것. 나는 vue를 사용하겠다고 명시. //Vue환경에서 남의 코드를 가져올떼: import사용

import NumberBaseball from './NumberBaseball'; //main.js와 NumberBaseball.vue 파일이 합쳐짐. //resolve:{extention:} 덕분에 .vue제거 가능.

new Vue(NumberBaseball).$mount('#root'); //vue인스턴스, const app = new Vue //mount는 원래 `el: '#root'` 같은것