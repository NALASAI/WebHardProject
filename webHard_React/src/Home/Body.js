import './Body.css';

const Body = () => {
    
    return (
        <div className="body_section">
            <div className="left_section">
                <div className="left_top_section">
                    <button className='folder_create_btn'>폴더 생성</button>
                    <button className='folder_delete_btn'>폴더 삭제</button>
                </div>
                <div className=''>
                    트리 구분
                </div>
            </div>
            <div className="right_section">
                <div className='right_top_section'>
                    <div className='file_manager_section'>
                        <button className='file_download_btn'>파일 다운로드</button>
                        <button className='file_upload_btn'>파일 업로드</button>
                        <button className='file_delete_btn'>파일 삭제</button>
                    </div>
                    <div className="search_section">
                        <input type='text' placeholder='파일 이름을 입력하세요.' className='search_input'></input>
                    </div>
                    <div>
                        <button className='search_btn'>검색</button>
                    </div>
                </div>
                <div>테스트</div>
            </div>
        </div>
    )
}

export default Body;