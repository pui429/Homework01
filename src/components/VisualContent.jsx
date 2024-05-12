const VisualContent = () => {
  return (
    <>
      <ul className="main-banner">
        <li className="on">
          <div className="inner">
            <div className="txt">
              <h2>
                Global Kyungdong <br />
                with customer trust
              </h2>
              <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>
              <p className="more">
                <a href="#">
                  Learn More<i className="xi-angle-right-min"></i>
                </a>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="inner">
            <div className="txt">
              <h2>Energy-based industry</h2>
              <p>광산 40년! 석탄산업은 국가 경제개발의 기반이었습니다.</p>
              <p className="more">
                <a href="#">Learn More</a>
                <i className=""></i>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="inner">
            <div className="txt">
              <h2>Create great value</h2>
              <p>경동은 에너지 자원의 가치를 창조합니다.</p>
              <p className="more">
                <a href="#">Learn More</a>
                <i className=""></i>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="inner">
            <div className="txt">
              <h2>We will provide bright energy</h2>
              <p>에너지를 통한 따뜻한 삶의 공간 창조 경동이 함께 하겠습니다.</p>
              <p className="more">
                <a href="#">Learn More</a>
                <i className=""></i>
              </p>
            </div>
          </div>
        </li>
      </ul>

      <p className="btn-wrap">
        <button className="btn prev">
          <img src="images/main/btn_prev2.png" alt="" />
        </button>
        <button className="btn next">
          <img src="images/main/btn_next2.png" alt="" />
        </button>
      </p>

      <p className="mouse">
        <img src="images/main/scroll.png" alt="" />
      </p>
    </>
  );
};

export default VisualContent;
