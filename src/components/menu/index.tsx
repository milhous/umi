import './index.less';


const MenuItem = (props: { img: string; tips?: string; active?: boolean }) => {
    const { img, tips = '', active = false } = props;

    return <li className={`menu-item ${active ? 'active' : ''}`}>
        <div className='menu-icon'>
            <img src={img} />
        </div>
        {tips !== '' && <div className='menu-tips'><span>{tips}</span></div>}
    </li>;
};

export default function Menu() {
    return <div className="menu ">
        <div className='menu-logo'>
            <img src="https://file.sheepjs.com/static/img/logo.png?imageMogr2/thumbnail/200x200" />
        </div>
        <ul className="menu-list">
            <MenuItem tips='系统管理' active={true} img='https://file.sheepjs.com/static/img/admin/access/system.png?imageMogr2/thumbnail/200x200' />
            <MenuItem tips='微信管理' active={false} img='https://file.sheepjs.com/static/img/admin/access/wechat.png?imageMogr2/thumbnail/200x200' />
            <MenuItem tips='客服管理' active={false} img='https://file.sheepjs.com/static/img/admin/access/chat.png?imageMogr2/thumbnail/200x200' />
            <MenuItem tips='商城' active={false} img='https://file.sheepjs.com/static/img/shop/logo.png?imageMogr2/thumbnail/200x200' />
            <MenuItem tips='文件管理' active={false} img='https://file.sheepjs.com/static/img/admin/access/file.png?imageMogr2/thumbnail/200x200' />
            <MenuItem tips='会员管理' active={false} img='https://file.sheepjs.com/static/img/admin/access/user.png?imageMogr2/thumbnail/200x200' />
        </ul>
    </div>
}