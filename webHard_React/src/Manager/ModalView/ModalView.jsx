import * as React from 'react';
import styles from '../Management.module.css';
import user from '../../img/user.png';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

function ModalView (open, items, setOpen) {
    const handleClose = () => setOpen(false);
    return(
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
                            <button>수정</button>
                        </div>
                        <div className={styles.BoxItem}>
                            <img src={user}/>
                            {/* {items.tel}  */}
                            <button>수정</button>
                        </div>
                        <div className={styles.BoxItem}>
                            <img src={user}/>
                            <p>비밀번호</p>
                            <button>수정</button>
                        </div>
                        <div className={styles.BoxItem}>
                            <img src={user}/>
                            {/* {items.company} */}
                        </div>
                    </div>
                </>
            </Box>
        </Modal>
    )
}

export default ModalView;