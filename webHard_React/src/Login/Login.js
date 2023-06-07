import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login_wrap">
      <div className="id_pw_wrap">
        <div className="id_section">
          <input
            type="email"
            id="id"
            name="id"
            placeholder="아이디 (이메일 형식)"
            title="아이디"
            className="input_text"
          />
        </div>
        <div className="pw_section">
          <input
            type="password"
            id="pw"
            name="pw"
            placeholder="비밀번호"
            title="비밀번호"
            className="input_text"
          />
        </div>
      </div>
      <div className="btn_login_wrap">
        <button type="submit" className="btn_login">
          <span className="btn_text">로그인</span>
        </button>
      </div>
    </div>
  );
};

const FindId = () => {
  return (
    <div className="content">
      <div className="find_wrap">
        <ul className="menu_wrap" role="tablist">
          <li className="menu_list" role="presentation">
            <span className="text">ID 찾기</span>
          </li>
          <li className="menu_list" role="presentation">
            <span className="text">비밀번호 찾기</span>
          </li>
        </ul>
        <ul className="panel_wrap">
          <li className="panel_item">
            <div className="panel_inner">
              <div className="id_pw_wrap">
                <div className="id_section">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="이름"
                    title="이름"
                    className="input_text"
                  />
                </div>
                <div className="id_section">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="전화번호"
                    title="전화번호"
                    className="input_text"
                  />
                </div>
              </div>
              <div className="btn_login_wrap">
                <button type="submit" className="btn_login">
                  <span className="btn_text">아이디 찾기</span>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const FindPw = () => {
  return (
    <div className="content">
      <div className="find_wrap">
        <ul className="menu_wrap" role="tablist">
          <li className="menu_list" role="presentation">
            <span className="text">ID 찾기</span>
          </li>
          <li className="menu_list" role="presentation">
            <span className="text">비밀번호 찾기</span>
          </li>
        </ul>
        <ul className="panel_wrap">
          <li className="panel_item">
            <div className="panel_inner">
              <div className="id_pw_wrap">
                <div className="id_section">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="이름"
                    title="이름"
                    className="input_text"
                  />
                </div>
                <div className="id_section">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="전화번호"
                    title="전화번호"
                    className="input_text"
                  />
                </div>
                <div className="id_section">
                  <input
                    type="email"
                    id="id"
                    name="id"
                    placeholder="아이디 (이메일 형식)"
                    title="아이디"
                    className="input_text"
                  />
                </div>
              </div>
              <div className="btn_login_wrap">
                <button type="submit" className="btn_login">
                  <span className="btn_text">비밀번호 찾기</span>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Register = () => {
  return (
    <div className="content">
      <div className="form_content">
        <div className="form_section">
          <input
            type="email"
            id="id"
            name="id"
            placeholder="아이디 (이메일 형식)"
            title="아이디 (이메일 형식)"
            className="input_text"
          />
        </div>
        <div className="form_section">
          <input
            type="password"
            id="pw"
            name="pw"
            placeholder="비밀번호"
            title="비밀번호"
            className="input_text"
          />
        </div>
        <div className="form_section">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="이름"
            title="이름"
            className="input_text"
          />
        </div>
        <div className="form_section">
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="전화번호"
            title="전화번호"
            className="input_text"
          />
        </div>
        <div className="form_section">
          <input
            type="text"
            id="company"
            name="company"
            placeholder="회사명"
            title="회사명"
            className="input_text"
          />
        </div>
        <div className="btn_register_form">
          <button type="submit" className="btn_register">
            <span className="btn_text">회사검색</span>
          </button>
        </div>
        <div className="form_section">
          <input
            type="text"
            id="zip_no"
            name="zip_no"
            placeholder="우편번호"
            title="우편번호"
            className="input_text"
          />
        </div>
        <div className="btn_register_form">
          <button type="submit" className="btn_register">
            <span className="btn_text">우편번호 찾기</span>
          </button>
        </div>
        <div className="form_section">
          <input
            type="text"
            id="doro_cd"
            name="doro_cd"
            placeholder="도로명주소"
            title="도로명주소"
            className="input_text"
          />
        </div>
        <div className="form_section">
          <input
            type="text"
            id="detail_cd"
            name="detail_cd"
            placeholder="상세주소"
            title="상세주소"
            className="input_text"
          />
        </div>
        <div className="btn_login_wrap">
          <button type="submit" className="btn_login">
            <span className="btn_text">회원가입</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Button = () => {};

const LoginMain = () => {
  const buttons = ["아이디찾기", "비밀번호찾기", "회원가입"];
  const [isVisible, setIsVisible] = useState("로그인");
  const [buttonVisible, setButtonVisible] = useState(true);

  const ButtonShow = () => {
    if (buttonVisible) return "block";
    else return "none";
  };

  return (
    <div className="App">
      <div className="login_logo_section">Webhard</div>
      <div className="container" id="container">
        <div className="isVisible-test">
          <p>
            {isVisible === "로그인" && <Login />}
            {isVisible === "아이디찾기" && <FindId />}
            {isVisible === "비밀번호찾기" && <FindPw />}
            {isVisible === "회원가입" && <Register />}
          </p>
        </div>
        <div className="btn-group" style={{ display: ButtonShow() }}>
          {buttons.map((buttonName) => (
            <button
              type="button"
              key={buttonName}
              className="btn"
              onClick={() => {
                setIsVisible(buttonName);
                setButtonVisible(false);
              }}
            >
              {buttonName.toLocaleUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginMain;
