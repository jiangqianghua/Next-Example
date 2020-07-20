import {withRouter} from 'next/router'

// 只有导入withRouter，参数才能有router
const Page1 = ({router}) => (
    <div>
        <div>接受参数{router.query.name}</div>
    </div>
)
// 一定要这种导出
export default withRouter(Page1)