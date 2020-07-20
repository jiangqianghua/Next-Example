import React, { useState } from 'react';

function Index() {
    const [color, setColor] = useState('blue')
    const changeColor = () => {
        setColor(color == 'blue' ? 'red' : 'blue')
    }
    return (
        <>
        <div>jsx写css样式</div>
        <button onClick={changeColor}>改变颜色</button>
        <style jsx>
            {`
                div{
                    color:${color};
                }
            `}
        </style>
        </>
    )
}

export default Index;