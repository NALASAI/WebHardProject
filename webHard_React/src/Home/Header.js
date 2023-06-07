import './Header.css';


const Header = () => {

    return (
        <div className="top_section">
            <div className="top_title">Web Hard</div>
            <div className="top_info">
                <span className="my_company_name">제너지</span>
                <span className="my_name">허동민</span>
            </div>
            <div className="top_sub">
                <span className="my_info_manager">내 정보 관리</span>
                <span className="logout">로그아웃</span>
            </div>  
        </div>
    )
}

export default Header;