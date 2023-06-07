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
            date : '2023-06-07'
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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                    <div className={styles.DetailItem} onClick={handleOpen}>
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
                    <Modal
                        className={styles.ModalMain}
                        open={open}
                        onClose={handleClose}>
                        <Box className={styles.ModalBox}>
                        </Box>
                    </Modal>
                </div>
            ))}
        </div>
    )
}

export default UserManagement;