import * as React from 'react';
import styles from './Management.module.css';
import user from '../img/user.png';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

function CompanayManagement() {
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
    const CompanyItem = [
        {
            id : 1,
            companyName : '제너지',
            companyAddress : '서울 강서구 마곡중앙로 165',
            companyTelnum : '02-3662-3868',
            companyBirth : '2016-02-04'
        }, {
            id : 2,
            companyName : '삼성',
            companyAddress : '서울 강서구 마곡중앙로 165',
            companyTelnum : '02-3662-3868',
            companyBirth : '2016-02-04'
        }, {
            id : 3,
            companyName : 'LG',
            companyAddress : '서울 강서구 마곡중앙로 165',
            companyTelnum : '02-3662-3868',
            companyBirth : '2016-02-04'
        }, {
            id : 4,
            companyName : '롯데',
            companyAddress : '서울 강서구 마곡중앙로 165',
            companyTelnum : '02-3662-3868',
            companyBirth : '2016-02-04'
        }
    ]

    const [open, setOpen] = useState(false);
    const [companyItemstems, setCompanyItems] = useState("");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <div id={styles.CompanayManagement}>
            <div className={styles.DetailBar}>
                <p>회사명</p>
                <p>회사주소</p>
                <p>전화번호</p>
                <p>설립일</p>
            </div>
            {CompanyItem.map(company =>(
                <div key={company.id}>
                    <div className={styles.DetailItem} onClick={() => {handleOpen(); setCompanyItems(company);}}>
                        <div id={styles.DetailName}>
                            <img src={user}/>
                            <p>{company.companyName}</p>
                        </div>
                        <div id={styles.address}>
                            <p>{company.companyAddress}</p>
                        </div>
                        <div id={styles.telNum}>
                            <p>{company.companyTelnum}</p>
                        </div>
                        <div id={styles.birth}>
                            <p>{company.companyBirth}</p>
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
                        <div className={styles.BoxTitle}><p>회사 프로필</p></div>
                        <div className={styles.BoxMain}>
                            <div className={styles.BoxItem}>
                                <img src={user}/>
                                {companyItemstems.companyName}
                                <button>수정</button>
                            </div>
                            <div className={styles.BoxItem}>
                                <img src={user}/>
                                {companyItemstems.companyAddress} 
                                <button>수정</button>
                            </div>
                            <div className={styles.BoxItem}>
                                <img src={user}/>
                                {companyItemstems.companyTelnum}
                                <button>수정</button>
                            </div>
                        </div>
                    </>
                </Box>
            </Modal>
        </div>
    )
}

export default CompanayManagement;