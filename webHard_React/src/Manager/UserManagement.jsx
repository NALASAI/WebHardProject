import * as React from 'react';
import styles from './Management.module.css';
import user from '../img/user.png';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

function UserManagement() {
    const useritem = [
        {
            id : 0,
            name : 'test0',
            tel : '010-1111-2222',
            email : 'aaa@naver.com',
            company : '제너지',
            date : '2023-06-07',
            details : [
                { 
                    id: 0,
                    name: 'Task0.1.1',
                    path: '제너지/Task0.1/',
                    classify: '폴더',
                    date: '2023-06-01'
                },{
                    id: 1,
                    name: 'Task0.1.2',
                    path: '제너지/Task0.1/',
                    classify: '폴더',
                    date: '2023-06-01'
                },{
                    id: 2,
                    name: '월간업무',
                    path: '제너지/Task0.2/',
                    classify: '파일',
                    date: '2023-06-01'
                },{
                    id: 3,
                    name: '월간업무',
                    path: '제너지/Task0.2/',
                    classify: '파일',
                    date: '2023-06-01'
                },{
                    id: 4,
                    name: '주간업무',
                    path: '제너지/Task0.1/0.2',
                    classify: '파일',
                    date: '2023-06-01'
                },{
                    id: 5,
                    name: '주간업무2    ',
                    path: '제너지/Task0.1/0.2',
                    classify: '파일',
                    date: '2023-06-01'
                }
            ]
        }, {
            id : 1,
            name : 'test1',
            tel : '010-2222-3333',
            email : 'bbb@naver.com',
            company : '삼성',
            date : '2023-06-07'
        }, {
            id : 2,
            name : 'test2',
            tel : '010-3333-4444',
            email : 'ccc@naver.com',
            company : 'LG',
            date : '2023-06-07'
        }, {
            id : 3,
            name : 'test3',
            tel : '010-4444-5555',
            email : 'ddd@naver.com',
            company : '롯데',
            date : '2023-06-07'
    }];
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState("");
    const [itemList, setItemList] = useState([]);

    const handleOpen = (item, details) => {
        setItems(item);
        setItemList(details)
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const testList = itemList.map(test => {
        return(
            <div className={styles.testList} key={test.id}>
                <div className={styles.TestItem}>
                    <img src={user}/>
                    {test.name}
                </div>
                <div className={styles.TestItem}>
                    {test.path}
                </div>
                <div className={styles.TestItem}>
                    {items.name}
                </div>
                <div className={styles.TestItem}>
                    {test.date}
                </div>
            </div>
        )
    })
    return(
        <div id={styles.UserManagement}>
            <div className={styles.DetailBar}>
                <p>이름</p>
                <p>전화번호</p>
                <p>이메일</p>
                <p>회사명</p>
                <p>가입일</p>
            </div>
            {useritem.map(item =>(
                <div key={item.id}>
                    <div className={styles.DetailItem} onClick={() => {handleOpen(item, item.details);}}>
                        <div id={styles.DetailName}>
                            <img src={user}/>
                            <p>{item.name}</p>
                        </div>
                        <div id={styles.DetailTel}>
                            <p>{item.tel}</p>
                        </div>
                        <div id={styles.DetailEmail}>
                            <p>{item.email}</p>
                        </div>
                        <div id={styles.DetailCompany}>
                            <p>{item.company}</p>
                        </div>
                        <div id={styles.DetailDate}>
                            <p>{item.date}</p>
                        </div>
                    </div>
                </div>
            ))}
            <Modal
                className={styles.ModalMain}
                open={open}
                onClose={handleClose}>
                <Box className={styles.ModalBox}>
                    <>
                        <div className={styles.BoxTitle}><p>내 프로필</p></div>
                        <div className={styles.BoxMain}>
                            <div className={styles.BoxItem}>
                                <img src={user}/>
                                {items.name}
                                <button className={styles.updateBtn}>수정</button>
                            </div>
                            <div className={styles.BoxItem}>
                                <img src={user}/>
                                {items.tel} 
                                <button className={styles.updateBtn}>수정</button>
                            </div>
                            <div className={styles.BoxItem}>
                                <img src={user}/>
                                {items.company}
                            </div>
                        </div>
                    </>
                    <>
                        <div className={styles.UserContents}>
                            <div className={styles.DetailBar}>
                                <p>이름</p>
                                <p>경로</p>
                                <p>생성자</p>
                                <p>생성일</p>
                            </div>
                            <div id={styles.testScroll}>
                                {testList}
                            </div>
                        </div>
                        <div className={styles.btnMenu}>
                            <button className={styles.fileStateBtn}>수정</button>
                            <button className={styles.fileStateBtn}>삭제</button>
                        </div>
                    </>
                </Box>
            </Modal>
        </div>
    )
}

export default UserManagement;