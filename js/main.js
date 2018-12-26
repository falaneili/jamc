require.config({
    // 根路径设置，paths下面全部都是根据baseUrl的路径去设置
    baseUrl: './js/',
    paths: {
        a: "back",
    },
    
    /*shim: { //依赖关系
        "a": ["jquery","c"] 
    } */


})
require(['a'], function (a) {
    $(function () {

    });

})