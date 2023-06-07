import styles from './Management.module.css';
import user from '../img/user.png';

const useritem = [
    {
        'id' : 0,
        'name' : 'test0',
        'tel' : '010-1111-2222',
        'email' : 'aaa@naver.com',
        'company' : '제너지',
        'date' : '2023-06-07'
    }, {
        'id' : 1,
        'name' : 'test1',
        'tel' : '010-2222-3333',
        'email' : 'bbb@naver.com',
        'company' : '삼성',
        'date' : '2023-06-07'
    }, {
        'id' : 2,
        'name' : 'test2',
        'tel' : '010-3333-4444',
        'email' : 'ccc@naver.com',
        'company' : 'LG',
        'date' : '2023-06-07'
    }, {
        'id' : 3,
        'name' : 'test3',
        'tel' : '010-4444-5555',
        'email' : 'ddd@naver.com',
        'company' : '롯데',
        'date' : '2023-06-07'
}];

const useritemMap = useritem.map((item) => {
    return(
        <div className={styles.DetailItem} key={item.id}>
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
    )
})

function UserManagement(props) {
    return(
        <div id={styles.UserManagement}>
            <div className={styles.DetailBar}>
                <p>이름</p>
                <p>전화번호</p>
                <p>이메일</p>
                <p>회사명</p>
                <p>가입일</p>
            </div>
            {useritemMap}
        </div>
    )
}

export default UserManagement;