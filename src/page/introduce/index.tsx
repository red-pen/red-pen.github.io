import './index.less'
import avatar from '../../assets/image/cat.jpg'
const  Custom = () => {
    return <div className='wrapper'>
        <div className='content'>
            <div className='avatar'>
                <img src={avatar} alt=""/>
            </div>
            <p className='userName'>猫菇娘</p>
            <p className='motto'>我是座右铭</p>
            <div className='button'>进入主页</div>
        </div>

    </div>
}

export default Custom;