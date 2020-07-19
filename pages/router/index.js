import Link from 'next/link'
import Router from 'next/router'
// 改地址需要访问 http://localhost:3000/router
export default () => {
    return (
        <> 
        <div> 测试link路由跳转</div>
            <Link href="/router/page1"><a>跳转到page1</a></Link>

            <div>
                <button onClick={()=>{Router.push('/router/page1')}}>编程跳转</button>
            </div>
        </>
    )
}