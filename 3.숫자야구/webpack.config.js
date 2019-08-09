const VueLoaderPlugin = require('vue-loader/lib/plugin'); //require함수는 module.export를 리턴한다. //node횐경(webpack은)에서 남의 코드를 불러올때:require()사용
const path = require('path'); //absolute path쓸때 힘드니 path라는 모듈. path는 node가 만들어둔 script

module.exports = {              //node에 module을 만들었다.
    mode: 'development',
    devtool: 'eval', //개발: eval, 배포: hidden-source-map
    resolve: {
      extensions: ['.js', '.vue'] //확장자 처리 용이하게 해줌.
    },
    entry: { //웹팩은 엔트리를 통해서 필요한 모듈을 로딩하고 하나의 파일로 묶는다.
        app: path.join(__dirname, 'main.js'),           //main.js: 가장 중요한 핵심 파일. //현재 들어있는 폴더나 파일들을 합쳐줌.
    },
    module: {
        rules: [{
            test: /\.vue$/, //정규표현식: .vue로 끝나는 파일들을
            loader: 'vue-loader', // vue-loader을 사용하겠다. 근데 vue-loader가 없으니 다운.
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),          //main.js에서 여기로 하나로 합쳐짐. 'dist하면 알아서 경로를 합쳐준다'
    },
};
//webpack쓰는이유: script가 너무 많아서 하나로 합치려고
//module이 웹팩의 핵심
//웹팩 구동 원리: dirname하고 main.js를 봄 -> main.js가 시작이구나 하고 main.js를 킴 -> main.js: 위에서부터 읽음, NumberBaseball.vue불러오라고 그러네
// -> NumberBaseball.vue: 너 js아니자나, 웹팩은 js만 합처준다. error -> rules: template같은거 보면 어떻게 해야할지 적어줌.
//entry -> 희안한거 처리: module;rules(loader) -> plugins: output나오기 전 최종수정 -> output: 최종 결과물