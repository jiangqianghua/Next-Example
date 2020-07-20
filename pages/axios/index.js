import React from 'react';
import axios from 'axios';
import {withRouter} from 'next/router'

const Index = ({router, data}) => {
    console.log(data)
    return (
        <div>
           data:{data[0].name}
        </div>
    )
}
// 所有的请求写在这里面,该方法会在服务端请求数据并返回出来
/*
{
    "data": [{
        "name": "jiang"
    }]
}
*/
Index.getInitialProps = async ()=>{
    const promise =new Promise((resolve)=>{
            axios('http://192.168.1.100:8000/data.json').then(
                (res)=>{
                    // 如果在服务器端渲染，该代码会在服务器打印，客户端无法打印
                    console.log('远程数据结果：',res)
                    // 返回值一定要写res.data
                    resolve(res.data)
                }
            )
    })
    return await promise
}


export default withRouter(Index)