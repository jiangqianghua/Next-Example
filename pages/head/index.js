import Head from 'next/head'

function Header () {
   return (
       <>
        <Head>
            <title>这是自定义title</title>
            <meta charSet='utf-8'></meta>
        </Head>
        <div>自定义header</div>
       </>
   ) 
}

export default Header