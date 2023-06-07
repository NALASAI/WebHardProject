import styles from './Management.module.css';

import UserManagement from './UserManagement';
import CompanayManagement from './CompanyManagement';
import { useState } from 'react';

function ManagerMain(){

    const [menu, setMenu] = useState();

    const handleMenu1 = () => {
        setMenu(true);
    };

    const handleMenu2 = () => {
        setMenu(false);
    };

    return(
        <div className={styles.ManagerMain}>
            <div className={styles.ManagerNavBar}>
                <button onClick={handleMenu1} className={styles.name} id={styles.User}>
                    회원 관리
                </button>
                <button onClick={handleMenu2} className={styles.name} id={styles.Company}>
                    회사 관리
                </button>
            </div>
            <div className={styles.ManagerBody}>
                {
                    menu ? <UserManagement /> : <CompanayManagement />
                }
            </div>
        </div>
    )
}

export default ManagerMain;