<template>
    <div>
        <h1>{{result}}</h1>
        <form v-on:submit="onSubmitForm">
            <input ref="answer" maxlength="4" v-model="value" />
            <button>입력</button>
        </form>
        <div>시도: {{}}</div>
    </div>
</template>

<script>
    export default { //전역 컴포넌트
        data() {
            return{
                value: '',
                result: '',

            }
        },
        methods: {
            onSubmitForm(e) {
                e.preventDefault();
            }

        }
    };
</script>

<style>

</style>

<!-- 특수한 문법을 쓰는 js파일. es6문법 -->