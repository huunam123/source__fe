"use strict";

/* Package System */
import React from "react";

/* Application */
class Online extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  getHomeBanner = () => {
    let _result = [];

    return _result;
  };

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <React.Fragment>
        <div className="online">
         
          <div className="row online-content">
          <div className="col-lg-6 col-md-6 col-sm-6  item-box">
          <div className="online-title">Cách chúng tôi hoạt động</div>
              <div className="item">
              
                <div className="logout">
                  <div className="logout-icon">
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="28"
                        cy="28"
                        r="28"
                        fill="url(#paint0_linear_179_496)"
                      />
                      <path
                        d="M26.6667 21.8333L24.8 23.7L28.2667 27.1667H14.6667V29.8333H28.2667L24.8 33.3L26.6667 35.1667L33.3333 28.5L26.6667 21.8333ZM38.6667 37.8333H28V40.5H38.6667C40.1333 40.5 41.3333 39.3 41.3333 37.8333V19.1667C41.3333 17.7 40.1333 16.5 38.6667 16.5H28V19.1667H38.6667V37.8333Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_179_496"
                          x1="28"
                          y1="0"
                          x2="28"
                          y2="56"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#74A9FF" />
                          <stop offset="1" stop-color="#1A72FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="logout-text">Đăng nhập ứng dụng</div>
                </div>
                <div className="search">
                  <div className="search-icon">
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="28"
                        cy="28"
                        r="28"
                        fill="url(#paint0_linear_179_503)"
                      />
                      <path
                        d="M25.3333 29.8333C24.8667 30.62 24.48 31.4867 24.2533 32.4067C20.6667 32.7133 17.2 34.3933 17.2 35.1667V36.6333H24.2667C24.4933 37.54 24.8667 38.3933 25.3333 39.1667H14.6667V35.1667C14.6667 31.62 21.7733 29.8333 25.3333 29.8333ZM25.3333 17.8333C26.7478 17.8333 28.1044 18.3952 29.1046 19.3954C30.1048 20.3956 30.6667 21.7522 30.6667 23.1667C30.6667 24.38 30.2533 25.5 29.5733 26.4067C28.4267 26.8333 27.4 27.5133 26.5467 28.3667L25.3333 28.5C23.9189 28.5 22.5623 27.9381 21.5621 26.9379C20.5619 25.9377 20 24.5812 20 23.1667C20 21.7522 20.5619 20.3956 21.5621 19.3954C22.5623 18.3952 23.9189 17.8333 25.3333 17.8333ZM25.3333 20.3667C24.5907 20.3667 23.8785 20.6617 23.3534 21.1868C22.8283 21.7119 22.5333 22.4241 22.5333 23.1667C22.5333 23.9093 22.8283 24.6215 23.3534 25.1466C23.8785 25.6717 24.5907 25.9667 25.3333 25.9667C26.0759 25.9667 26.7881 25.6717 27.3132 25.1466C27.8383 24.6215 28.1333 23.9093 28.1333 23.1667C28.1333 22.4241 27.8383 21.7119 27.3132 21.1868C26.7881 20.6617 26.0759 20.3667 25.3333 20.3667ZM32.6667 28.5C36 28.5 38.6667 31.1667 38.6667 34.5C38.6667 35.6733 38.3333 36.78 37.7467 37.7L41.8533 41.8333L40 43.6867L35.84 39.5933C34.92 40.1667 33.8267 40.5 32.6667 40.5C29.3333 40.5 26.6667 37.8333 26.6667 34.5C26.6667 31.1667 29.3333 28.5 32.6667 28.5ZM32.6667 31.1667C31.7826 31.1667 30.9348 31.5179 30.3096 32.143C29.6845 32.7681 29.3333 33.6159 29.3333 34.5C29.3333 35.3841 29.6845 36.2319 30.3096 36.857C30.9348 37.4821 31.7826 37.8333 32.6667 37.8333C33.5507 37.8333 34.3986 37.4821 35.0237 36.857C35.6488 36.2319 36 35.3841 36 34.5C36 33.6159 35.6488 32.7681 35.0237 32.143C34.3986 31.5179 33.5507 31.1667 32.6667 31.1667Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_179_503"
                          x1="28"
                          y1="0"
                          x2="28"
                          y2="56"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#74A9FF" />
                          <stop offset="1" stop-color="#1A72FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="search-text">Lấy dữ liệu người dùng</div>
                </div>
                <div className="result">
                  <div className="result-icon">
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="28"
                        cy="28"
                        r="28"
                        fill="url(#paint0_linear_179_510)"
                      />
                      <path
                        d="M26 35.5H34V37.5H26V35.5ZM22 35.5H24V37.5H22V35.5ZM26 30.5H34V32.5H26V30.5ZM22 30.5H24V32.5H22V30.5ZM26 25.5H34V27.5H26V25.5ZM22 25.5H24V27.5H22V25.5Z"
                        fill="white"
                      />
                      <path
                        d="M37 17.5H34V16.5C34 15.9696 33.7893 15.4609 33.4142 15.0858C33.0391 14.7107 32.5304 14.5 32 14.5H24C23.4696 14.5 22.9609 14.7107 22.5858 15.0858C22.2107 15.4609 22 15.9696 22 16.5V17.5H19C18.4696 17.5 17.9609 17.7107 17.5858 18.0858C17.2107 18.4609 17 18.9696 17 19.5V40.5C17 41.0304 17.2107 41.5391 17.5858 41.9142C17.9609 42.2893 18.4696 42.5 19 42.5H37C37.5304 42.5 38.0391 42.2893 38.4142 41.9142C38.7893 41.5391 39 41.0304 39 40.5V19.5C39 18.9696 38.7893 18.4609 38.4142 18.0858C38.0391 17.7107 37.5304 17.5 37 17.5ZM24 16.5H32V20.5H24V16.5ZM37 40.5H19V19.5H22V22.5H34V19.5H37V40.5Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_179_510"
                          x1="28"
                          y1="0"
                          x2="28"
                          y2="56"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#74A9FF" />
                          <stop offset="1" stop-color="#1A72FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="result-text">Trả kết quả</div>
                </div>
                <div className="line-item"></div>
                <div className="line2"></div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6  item-box">
              <img src="/images/bg.png" />
            </div>
            </div>
            
          </div>



      </React.Fragment>
    );
  }
}

export default Online;
