import Nav from "./Nav";
import SubMenu from "./SubMenu";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="inner">
          <h1>
            <a href="index.html">
              <img
                src="http://www.kyungdong.co.kr/ko/front/image/common/logo_pc.png"
                alt="경동"
              />
            </a>
          </h1>
          <Nav />
          <SubMenu />
        </div>
      </header>
    </>
  );
};

export default Header;
