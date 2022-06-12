module.exports = {
    title: 'M-UI',
    description: '一个基于 Vue 的 UI 框架',
    base: '/',
    themeConfig: {
        nav: [
            {
                text: '主页',
                link: '/'
            },
            {
                text: '源码',
                link: 'https://github.com/zhulin3141/m-ui'
            },
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false, // false 让一个组永远都是展开状态
                children: [
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/button/',
                    '/input/',
                    '/accordion/',
                    '/message/',
                    '/tabs/',
                ]
            }
        ]
    }
}