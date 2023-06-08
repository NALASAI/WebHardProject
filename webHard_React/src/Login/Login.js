import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.LoginWrap}>
      <div className={styles.IdPwWrap}>
        <div className={styles.IdSection}>
          <TextField
            sx={{ mb: 1, mt: 1, width: 300 }}
            type="email"
            id="id"
            name="id"
            placeholder="아이디 (이메일 형식)"
            title="아이디"
            className={styles.InputText}
            variant="outlined"
            label="아이디"
            size="small"
          />
        </div>
        <div className={styles.PwSection}>
          <TextField
            sx={{ mb: 1, mt: 1, width: 300 }}
            type="password"
            id="pw"
            name="pw"
            placeholder="비밀번호"
            title="비밀번호"
            className={styles.InputText}
            variant="outlined"
            label="비밀번호"
            size="small"
          />
        </div>
      </div>
      <div className={styles.BtnLoginWrap}>
        <Button
          sx={{ mt: 3, mb: 2, width: 300 }}
          type="submit"
          className={styles.BtnLogin}
          variant="contained"
        >
          <span className={styles.BtnText}>로그인</span>
        </Button>
      </div>
    </div>
  );
};

const FindId = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
    console.log(event);
  };

  return (
    <div className={styles.Content}>
      <div className={styles.FindWrap}>
        <div className={styles.FindTabWrap}>
          <Tabs
            Tabs
            value={tabIndex}
            onChange={handleTabChange}
            className={styles.MenuWrap}
            role="tablist"
          >
            <Tab
              className={styles.MenuList}
              role="presentation"
              label="ID 찾기"
            >
              <span className={styles.Text}>ID 찾기</span>
            </Tab>
            <Tab
              className={styles.MenuList}
              role="presentation"
              label="비밀번호 찾기"
            >
              <span className={styles.Text}>비밀번호 찾기</span>
            </Tab>
          </Tabs>
        </div>
        <div>{tabIndex === 1}</div>
        <ul className={styles.PanelWrap}>
          <li className={styles.PanelItem}>
            <div className={styles.PanelInner}>
              <div className={styles.IdPwWrap}>
                <div className={styles.IdSection}>
                  <TextField
                    sx={{ mb: 1, mt: 1, width: 300 }}
                    type="text"
                    id="name"
                    name="name"
                    title="이름"
                    className={styles.InputText}
                    variant="outlined"
                    label="이름"
                    size="small"
                  />
                </div>
                <div className={styles.IdSection}>
                  <TextField
                    sx={{ mb: 1, mt: 1, width: 300 }}
                    type="text"
                    id="phone"
                    name="phone"
                    title="전화번호"
                    className={styles.InputText}
                    variant="outlined"
                    label="전화번호"
                    size="small"
                  />
                </div>
              </div>
              <div className={styles.BtnLoginWrap}>
                <Button
                  sx={{ mt: 3, mb: 2, width: 300 }}
                  type="submit"
                  className={styles.BtnLogin}
                  variant="contained"
                >
                  <span className={styles.BtnText}>아이디 찾기</span>
                </Button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const FindPw = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  return (
    <div className={styles.Content}>
      <div className={styles.FindWrap}>
        <div className={styles.FindTabWrap}>
          <Tabs
            Tabs
            value={tabIndex}
            onChange={handleTabChange}
            className={styles.MenuWrap}
            role="tablist"
          >
            <Tab
              className={styles.MenuList}
              role="presentation"
              label="ID 찾기"
            >
              <span className={styles.Text}>ID 찾기</span>
            </Tab>
            <Tab
              className={styles.MenuList}
              role="presentation"
              label="비밀번호 찾기"
            >
              <span className={styles.Text}>비밀번호 찾기</span>
            </Tab>
          </Tabs>
        </div>
        <ul className={styles.PanelWrap}>
          <li className={styles.PanelItem}>
            <div className={styles.PanelInner}>
              <div className={styles.IdPwWrap}>
                <div className={styles.IdSection}>
                  <TextField
                    sx={{ mb: 1, mt: 1, width: 300 }}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="이름"
                    title="이름"
                    className={styles.InputText}
                    variant="outlined"
                    label="이름"
                    size="small"
                  />
                </div>
                <div className={styles.IdSection}>
                  <TextField
                    sx={{ mb: 1, mt: 1, width: 300 }}
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="전화번호"
                    title="전화번호"
                    className={styles.InputText}
                    variant="outlined"
                    label="전화번호"
                    size="small"
                  />
                </div>
                <div className={styles.IdSection}>
                  <TextField
                    sx={{ mb: 1, mt: 1, width: 300 }}
                    type="email"
                    id="id"
                    name="id"
                    placeholder="아이디 (이메일 형식)"
                    title="아이디"
                    className={styles.InputText}
                    variant="outlined"
                    label="아이디"
                    size="small"
                  />
                </div>
              </div>
              <div className={styles.BtnLoginWrap}>
                <Button
                  sx={{ mt: 3, mb: 2, width: 300 }}
                  type="submit"
                  className={styles.BtnLogin}
                  variant="contained"
                >
                  <span className={styles.BtnText}>비밀번호 찾기</span>
                </Button>
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
    <div className={styles.Content}>
      <div className={styles.FormContent}>
        <div className={styles.FormSection}>
          <TextField
            sx={{ mb: 1, mt: 1, width: 300 }}
            type="email"
            id="id"
            name="id"
            placeholder="아이디 (이메일 형식)"
            title="아이디 (이메일 형식)"
            className={styles.InputText}
            variant="outlined"
            label="아이디"
            size="small"
          />
        </div>
        <div className={styles.FormSection}>
          <TextField
            sx={{ mb: 1, mt: 1, width: 300 }}
            type="password"
            id="pw"
            name="pw"
            placeholder="비밀번호"
            title="비밀번호"
            className={styles.InputText}
            variant="outlined"
            label="비밀번호"
            size="small"
          />
        </div>
        <div className={styles.FormSection}>
          <TextField
            sx={{ mb: 1, mt: 1, width: 300 }}
            type="text"
            id="name"
            name="name"
            placeholder="이름"
            title="이름"
            className={styles.InputText}
            variant="outlined"
            label="이름"
            size="small"
          />
        </div>
        <div className={styles.FormSection}>
          <TextField
            sx={{ mb: 1, mt: 1, width: 300 }}
            type="text"
            id="phone"
            name="phone"
            placeholder="전화번호"
            title="전화번호"
            className={styles.InputText}
            variant="outlined"
            label="전화번호"
            size="small"
          />
        </div>
        <div className={styles.CompanyRegisterSection}>
          <div className={styles.FormSection}>
            <TextField
              sx={{ mb: 1, mt: 1, width: 120 }}
              type="text"
              id="company"
              name="company"
              placeholder="회사명"
              title="회사명"
              className={styles.InputText}
              variant="outlined"
              label="회사명"
              size="small"
            />
          </div>
          <div className={styles.BtnRegisterForm}>
            <Button
              sx={{ mt: 1, mb: 1, ml: 7, width: 120, height: 40 }}
              type="submit"
              className={styles.BtnRegister}
              variant="contained"
            >
              <span className={styles.BtnText}>회사검색</span>
            </Button>
          </div>
        </div>
        <div className={styles.ZipNoSection}>
          <div className={styles.FormSection}>
            <TextField
              sx={{ mb: 1, mt: 1, width: 120 }}
              type="text"
              id="zip_no"
              name="zip_no"
              placeholder="우편번호"
              title="우편번호"
              className={styles.InputText}
              variant="outlined"
              label="우편번호"
              size="small"
            />
          </div>
          <div className={styles.BtnRegisterForm}>
            <Button
              sx={{ mt: 1, mb: 1, ml: 7, width: 120, height: 40 }}
              type="submit"
              className={styles.BtnRegister}
              variant="contained"
            >
              <span className={styles.BtnText}>우편번호 찾기</span>
            </Button>
          </div>
        </div>
        <div className={styles.FormSection}>
          <TextField
            sx={{ mb: 1, mt: 1, width: 300 }}
            type="text"
            id="doro_cd"
            name="doro_cd"
            placeholder="도로명주소"
            title="도로명주소"
            className={styles.InputText}
            variant="outlined"
            label="도로명주소"
            size="small"
          />
        </div>
        <div className={styles.FormSection}>
          <TextField
            sx={{ mb: 1, mt: 1, width: 300 }}
            type="text"
            id="detail_cd"
            name="detail_cd"
            placeholder="상세주소"
            title="상세주소"
            className={styles.InputText}
            variant="outlined"
            label="상세주소"
            size="small"
          />
        </div>
        <div className={styles.BtnLoginWrap}>
          <Button
            sx={{ mt: 3, mb: 2, width: 300, height: 40 }}
            type="submit"
            className={styles.BtnLogin}
            variant="contained"
          >
            <span className={styles.BtnText}>회원가입</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

const LoginMain = () => {
  const buttons = ["아이디찾기", "비밀번호찾기", "회원가입"];
  const [isVisible, setIsVisible] = useState("로그인");
  const [buttonVisible, setButtonVisible] = useState(true);

  const ButtonShow = () => {
    if (buttonVisible) return "block";
    else return "none";
  };

  return (
    <div className={styles.LoginMainWrap}>
      <div className={styles.LoginLogoSection}>Webhard</div>
      <div className={styles.Container}>
        {isVisible === "로그인" && <Login />}
        {isVisible === "아이디찾기" && <FindId />}
        {isVisible === "비밀번호찾기" && <FindPw />}
        {isVisible === "회원가입" && <Register />}
        <div className={styles.BtnGroup} style={{ display: ButtonShow() }}>
          {buttons.map((buttonName) => (
            <Button
              type="button"
              variant="text"
              key={buttonName}
              className={styles.Btn}
              onClick={() => {
                setIsVisible(buttonName);
                setButtonVisible(false);
              }}
            >
              {buttonName.toLocaleUpperCase()}{" "}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginMain;
