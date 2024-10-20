const base = {
    get() {
        return {
            url : "http://localhost:8080/fangwuzulinguanlixitong/",
            name: "fangwuzulinguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/fangwuzulinguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "房屋租赁管理系统"
        } 
    }
}
export default base
