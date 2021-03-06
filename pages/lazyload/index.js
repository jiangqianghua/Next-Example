import React, { useState } from 'react';
import dynamic from 'next/dynamic';
// 自定义组件懒加载
const LayComponent = dynamic(import('../../components/lazycomponent'))
function Index(){
    const [nowTime, setTime] = useState(Date.now())
    const changeTime = async () => {
        const moment = await import('moment')
        setTime(moment.default(Date.now()).format())
    }
    return (
        <>
        <div>显示时间为: {nowTime}</div>
        {/* 只有在显示LayComponent才加载改组件 */}
        <LayComponent></LayComponent>
        <div><button onClick={changeTime}>改变时间</button></div>
        </>
    )
}

export default Index