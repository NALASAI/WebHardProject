import HeaderStyle from './Header.module.css';

const Header = () => {

    return (
        <div className={HeaderStyle.top_section}>
            <div className={HeaderStyle.top_title}>Web Hard</div>
            <div className={HeaderStyle.top_info}>
                <span className={HeaderStyle.my_company_name}>제너지</span>
                <span className={HeaderStyle.my_name}>허동민</span>
            </div>
            <div className={HeaderStyle.top_sub}>
                <span className={HeaderStyle.my_info_manager}>내 정보 관리</span>
                <span className={HeaderStyle.logout}>로그아웃</span>
            </div>  
        </div>
    )
}

export default Header;