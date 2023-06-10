import './index.less';

export default function Submenu() {
    return <div className="submenu">
        <h2>系统管理</h2>
        <div className='submenu-list'>
            <div className='submenu-item'>
                <input id="system" type="checkbox" defaultChecked />
                <div>
                    <label htmlFor="system">系统设置<i></i></label>
                    <ul>
                        <li className='active'>基础配置</li>
                        <li>附件配置</li>
                        <li>短信配置</li>
                    </ul>
                </div>
            </div>
            <div className='submenu-item'>
                <span>通知设置</span>
            </div>
            <div className='submenu-item'>
                <input id="permission" type="checkbox" defaultChecked />
                <div>
                    <label htmlFor="permission">权限设置<i></i></label>
                    <ul>
                        <li>操作记录</li>
                        <li>菜单权限</li>
                        <li>角色组</li>
                        <li>管理员</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}