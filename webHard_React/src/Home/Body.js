import BodyStyle from './Body.module.css';
import axios from "axios";

const Body = () => {
    const infos = [
        {
            id: 1, // 나중에 uuid 값으로 변경
            item_name: 'Task 0.1.2',
            path: '제너지/Task 0.1/Task 0.1.1',
            generator: '허동민',
            create_date: '2023-06-07'
        }, {
            id: 2,
            item_name: 'Task 0.1.2',
            path: '제너지/Task 0.1/Task 0.1.1',
            generator: '허동민',
            create_date: '2023-06-07'
        }, {
            id: 3,
            item_name: 'Task 0.1.2',
            path: '제너지/Task 0.1/Task 0.1.1',
            generator: '허동민',
            create_date: '2023-06-07'
        }
    ]

    

    const moveControllerTest = async (res) => {
        const response = await axios.post('/api/moveItem', {
            res,
            headers: {
                  'Content-Type': 'application/json',
            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error(error);
        })
        /*
        let params = JSON.stringify({
            'id': res[0].id,
            'title': res[0].title,
            'content': res[0].content,
            'price': res[0].price
        });*/
        /*
        axios({
            method: 'POST',
            url: '/api/moveItem',
            data: params,
            headers: {"Content-Type": 'application/json'}
        }).then((res)=> {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })*/
    }

    const test = () => {
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((res)=>{
            moveControllerTest(res.data);
        })
        .catch(()=>{
            console.log('fail');
        })
    }

    const changeColor = (id) => {
        let info = document.querySelectorAll('#info_section');
        
        for (let i = 0; i < info.length; i++) {
            info[i].style.backgroundColor='white';
        }
        info[id-1].style.backgroundColor='rgb(212, 212, 212)'; // id가 아니라 uuid 일경우 인덱스를 접근하는 방법을 생각해야함
    }

    const updateCurrentId = (id) => {
        changeColor(id);
    }

    const renderInfo = infos.map(info => {
        return (
            <div className={BodyStyle.info_section} id="info_section" key={info.id} onClick={() => updateCurrentId(info.id)}>
                <div className={BodyStyle.item_name}>{info.item_name}</div>
                <div className={BodyStyle.path}>{info.path}</div>
                <div className={BodyStyle.generator}>{info.generator}</div>
                <div className={BodyStyle.create_date}>{info.create_date}</div>
            </div>
        )
    })

    const apiTest = async () => {
        const response = await axios.put('/api/putTest', {
            headers: {
                  'Content-Type': 'application/json',
            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error(error);
        })
    }

    const createFolder = () => {

    }

    const deleteFolder = () => {

    }

    const downloadFile = () => {

    }

    const uploadFile = () => {

    }

    const deleteFile = () => {

    }
    
    return (
        <div className={BodyStyle.body_section}>
            <div className={BodyStyle.left_section}>
                <div className={BodyStyle.left_top_section}>
                    <button className={BodyStyle.folder_create_btn}>폴더 생성</button>
                    <button className={BodyStyle.folder_delete_btn}>폴더 삭제</button>
                </div>
                <div className=''>
                    트리 구분
                </div>
            </div>
            <div className={BodyStyle.right_section}>
                <div className={BodyStyle.right_top_section}>
                    <div className={BodyStyle.file_manager_section}>
                        <button className={BodyStyle.file_download_btn}>파일 다운로드</button>
                        <button className={BodyStyle.file_upload_btn}>파일 업로드</button>
                        <button className={BodyStyle.file_delete_btn}>파일 삭제</button>
                    </div>
                    <div className={BodyStyle.search_section}>
                        <input type='text' placeholder='파일 이름을 입력하세요.' className={Body.search_input}></input>
                    </div>
                    <div>
                        <button className={BodyStyle.search_btn}>검색</button>
                    </div>
                </div>
                <div className={BodyStyle.nav_info_section}>
                    <div className={BodyStyle.nav_item_name}>이름</div>
                    <div className={BodyStyle.nav_path}>파일경로</div>
                    <div className={BodyStyle.nav_generator}>생성자</div>
                    <div className={BodyStyle.nav_create_date}>생성일</div>
                </div>
                <div>
                    {renderInfo}
                </div>
                <div>
                    <button className='' onClick={test}>더보기</button>
                </div>
                <div onClick={apiTest}>apiTest</div>
            </div>
        </div>
    )
}

export default Body;