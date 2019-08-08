const path = require('path');

module.exports = {              //node에 module을 만들었다.
    entry: {
        app: './main.js',           //가장 중요한 핵심 파일
    },
    module: {

    },
    plugins: [],
    output: {
        filename: 'app.js',
        path: './dist',          //main.js에서 여기로 하나로 합쳐짐
    },
};
//webpack쓰는이유: script가 너무 많아서 하나로 합치려고
//module이 웹팩의 핵심