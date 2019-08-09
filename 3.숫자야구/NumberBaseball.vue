<template>
    <div>
        <h1>{{result}}</h1>
        <form v-on:submit="onSubmitForm">
            <input ref="answer" maxlength="4" v-model="value" />
            <button type="submit">입력</button>
        </form>
        <div>시도: {{tries.length}}</div> <!-- tries.length: 배열의 총 개수 -->
        <ul>
            <li v-for="t in tries">{{t}}</li> <!-- tries: 배열 -->
        </ul>
    </div>
</template>

<script>
    export default { //전역 컴포넌트
        data() {
            return{
                tries: [], //[]: 배열
                value: '',
                result: '',

            }
        },
        methods: {
            onSubmitForm(e) {
                e.preventDefault();
                console.log(t);
                this.tries.push(this.value); //입력
                this.value = '';
                this.$refs.answer.focus();
            }

        }
    };
</script>

<style>

</style>

<!-- 특수한 문법을 쓰는 js파일. es6문법 -->
<!-- 이 파일은 vue-loader가 처리한다. -->