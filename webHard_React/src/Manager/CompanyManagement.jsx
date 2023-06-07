import styles from './Management.module.css';

function CompanayManagement() {
    return(
        <div id={styles.CompanayManagement}>
            <div className={styles.DetailBar}>
                <p>이름</p>
                <p>전화번호</p>
                <p>이메일</p>
                <p>회사명</p>
                <p>가입일</p>
            </div>
            <div className={styles.DetailItem}>
                <div id={styles.DetailName}>
                    <p>테스트</p>
                </div>
                <div id={styles.DetailTel}>
                    <p>010-1111-2222</p>
                </div>
                <div id={styles.DetailEmail}>
                    <p>aaaa@naver.com</p>
                </div>
                <div id={styles.DetailCompany}>
                    <p>테스팅</p>
                </div>
                <div id={styles.DetailDate}>
                    <p>2023-06-07</p>
                </div>
            </div>
        </div>
    )
}

export default CompanayManagement;