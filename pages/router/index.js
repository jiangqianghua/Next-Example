import Link from 'next/link'
import Router from 'next/router'
// 改地址需要访问 http://localhost:3000/router

// 路由变化作用，可以在监听期间做一些动画， 关闭资源等等
export default () => {

     // routeChangeStart路由变化前
    // routeChangeComplete 路由变化后
    // beforeHistoryChange 
    // routeChangeError  // 路由错误
    // hashChangeStart 
    // hashChangeComplete
    Router.events.on('routeChangeStart', (...args) => {
        console.log('1 routeChangeStart -> 路由参数变化前:', ...args)
    })

    Router.events.on('routeChangeStart', (...args) => {
        console.log('2 routeChangeComplete -> 路由参数变化结束:', ...args)
    })

    Router.events.on('beforeHistoryChange', (...args) => {
        console.log('3 beforeHistoryChange -> 路由参数变化结束:', ...args)
    })

    // 404 不能算该错误
    Router.events.on('routeChangeError', (...args) => {
        console.log('4 routeChangeError -> 路由发生错误:', ...args)
    })

    Router.events.on('hashChangeStart', (...args) => {
        console.log('5 hashChangeStart -> 路由发生变化前:', ...args)
    })

    Router.events.on('hashChangeComplete', (...args) => {
        console.log('6 hashChangeComplete -> 路由发生变化后:', ...args)
    })


    const gotoPage1 = () => {
        Router.push({
            pathname: '/router/page1',
            query: {
                name: 'jiangqianghua1'
            }
        })
    }
    return (
        <> 
        <div> 测试link路由跳转</div>
            <Link href="/router/page1?name=jiangqianghua"><a>跳转到page1</a></Link>
            <Link href={{pathname: 'router/page1', query: {name: 'jiangqianghua2'}}}><a>跳转到page1</a></Link>
            <button onClick={gotoPage1}>编程跳转</button>

            <Link href="#aaaa">hash变化</Link>
        </>
    )

}