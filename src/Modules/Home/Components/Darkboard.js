"use strict";

/* Package System */
import React from "react";
import Link from "next/link";

/* Application */
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@mui/material/Button";
import { fetchApi, changeToSlug } from "@helpers/Common";

/* Package style */
//import 'swiper/swiper-bundle.min.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import { isIOS } from "react-device-detect";
import Countdown from "react-countdown";
class DB extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      banners: [],
      hideDescription: false,
    };
  }

  getHomeBanner = () => {
    let _result = [];
    _result.push({
      type: "cover",
      id: "",
      // 'title': "Bạn muốn trở thành nhân vật xuất hiện trên MCV Network?",
      thumbnail: "/images/banner1.png",
      link: "",
    });
    return _result;
  };

  componentDidMount() {
    this._isMounted = true;
    Promise.all([this.getHomeBanner()])
      .then((resp) => {
        let _banners = resp[0].concat(
          typeof resp[1] !== "undefined" ? resp[1] : []
        );
        this.setState({ banners: _banners });
      })
      .catch((e) => console.log(e));
  }

  hanldeDownload = () => {
    let _linkDL = isIOS == true ? "" : "";
    window.location = _linkDL;
  };

  handleLink = (e) => {
    console.log("handleLink", e);
    let _link = e.currentTarget.dataset.link;
    if (_link && _link != "null") window.location = _link;
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-item">
          <div className="item"></div>
          <div className="container-item-l">
            <div className="item-l">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_179_464)">
                  <path
                    d="M13.5 0H18.5C19.3312 0 20 0.66875 20 1.5V12H25.4813C26.5938 12 27.15 13.3438 26.3625 14.1313L16.8563 23.6437C16.3875 24.1125 15.6187 24.1125 15.15 23.6437L5.63125 14.1313C4.84375 13.3438 5.4 12 6.5125 12H12V1.5C12 0.66875 12.6687 0 13.5 0ZM32 23.5V30.5C32 31.3312 31.3312 32 30.5 32H1.5C0.66875 32 0 31.3312 0 30.5V23.5C0 22.6688 0.66875 22 1.5 22H10.6687L13.7312 25.0625C14.9875 26.3188 17.0125 26.3188 18.2687 25.0625L21.3312 22H30.5C31.3312 22 32 22.6688 32 23.5ZM24.25 29C24.25 28.3125 23.6875 27.75 23 27.75C22.3125 27.75 21.75 28.3125 21.75 29C21.75 29.6875 22.3125 30.25 23 30.25C23.6875 30.25 24.25 29.6875 24.25 29ZM28.25 29C28.25 28.3125 27.6875 27.75 27 27.75C26.3125 27.75 25.75 28.3125 25.75 29C25.75 29.6875 26.3125 30.25 27 30.25C27.6875 30.25 28.25 29.6875 28.25 29Z"
                    fill="#116CFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_179_464">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className="dowl">
                <div className="dow-view">1,4 M+</div>
                <div className="dow-turn">Lượt tải về</div>
              </div>
            </div>
          </div>

          <div className="container-item-l">
            <div className="item-l">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.08 29.6252C10.848 29.9919 11.6883 30.1825 12.5394 30.1829H24.7589C26.1215 30.1829 27.4392 29.696 28.4744 28.81C29.5096 27.9239 30.1942 26.6972 30.4046 25.3509L31.8354 16.2012C31.9378 15.5489 31.8976 14.8822 31.7177 14.2469C31.5377 13.6116 31.2223 13.0228 30.7931 12.521C30.3639 12.0193 29.8311 11.6165 29.2313 11.3403C28.6316 11.0641 27.9791 10.9211 27.3189 10.9212H19.8171V5.53605C19.8182 4.71335 19.5461 3.91357 19.0436 3.26222C18.541 2.61086 17.8364 2.1448 17.0403 1.93715C16.2443 1.7295 15.4018 1.79203 14.6451 2.11492C13.8884 2.43781 13.2603 3.00278 12.8594 3.72119L8.11199 12.2012C7.82553 12.7131 7.67522 13.29 7.67542 13.8766V26.3155C7.67532 26.963 7.8586 27.5974 8.20406 28.1451C8.54951 28.6928 9.043 29.1315 9.62742 29.4103L10.0846 29.6275L10.08 29.6252ZM2.38628 12.6195C2.08712 12.6192 1.79084 12.6778 1.51437 12.7921C1.2379 12.9064 0.986664 13.074 0.775022 13.2855C0.563381 13.4969 0.395485 13.748 0.280934 14.0243C0.166383 14.3007 0.107422 14.5969 0.107422 14.896V26.5806C0.107422 27.185 0.347515 27.7646 0.774884 28.192C1.20225 28.6194 1.78189 28.8595 2.38628 28.8595H3.51999C3.8231 28.8595 4.11379 28.7391 4.32812 28.5247C4.54244 28.3104 4.66285 28.0197 4.66285 27.7166V13.76C4.66285 13.4569 4.54244 13.1663 4.32812 12.9519C4.11379 12.7376 3.8231 12.6172 3.51999 12.6172L2.38628 12.6195Z"
                  fill="#116CFF"
                />
              </svg>

              <div className="dowl">
                <div className="dow-view">302 K</div>
                <div className="dow-turn">Yêu thích</div>
              </div>
            </div>
          </div>

          <div className="container-item-l- ">
            <div className="item-l">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3334 2.66663H11.6667C9.28082 2.67015 6.99368 3.6195 5.30662 5.30656C3.61956 6.99362 2.67021 9.28076 2.66669 11.6666V20.3333C2.67021 22.7192 3.61956 25.0063 5.30662 26.6934C6.99368 28.3804 9.28082 29.3298 11.6667 29.3333H20.3334C22.7192 29.3298 25.0064 28.3804 26.6934 26.6934C28.3805 25.0063 29.3298 22.7192 29.3334 20.3333V11.6666C29.3298 9.28076 28.3805 6.99362 26.6934 5.30656C25.0064 3.6195 22.7192 2.67015 20.3334 2.66663ZM23 22.5866C22.9007 22.6866 22.7821 22.7653 22.6515 22.818C22.5209 22.8707 22.3809 22.8963 22.24 22.8933C21.9606 22.8928 21.6925 22.7827 21.4934 22.5866L18.8267 19.92C17.5163 20.8525 15.9033 21.2587 14.3075 21.0579C12.7117 20.8571 11.2496 20.064 10.211 18.8359C9.17245 17.6077 8.63328 16.0342 8.70037 14.4272C8.76745 12.8202 9.4359 11.2971 10.5732 10.1598C11.7105 9.02251 13.2336 8.35406 14.8406 8.28697C16.4476 8.21988 18.0211 8.75906 19.2493 9.79761C20.4774 10.8362 21.2705 12.2983 21.4713 13.8941C21.6721 15.4899 21.2659 17.1029 20.3334 18.4133L23 21.08C23.1013 21.1772 23.1821 21.2936 23.2377 21.4225C23.2933 21.5514 23.3226 21.6901 23.3238 21.8305C23.3251 21.9708 23.2982 22.11 23.2449 22.2399C23.1916 22.3698 23.1129 22.4876 23.0134 22.5866H23Z"
                  fill="#116CFF"
                />
                <path
                  d="M19.3333 14.6667C19.3476 15.2376 19.2474 15.8055 19.0388 16.3371C18.8302 16.8687 18.5173 17.3531 18.1186 17.7619C17.7199 18.1707 17.2434 18.4956 16.7172 18.7174C16.191 18.9393 15.6257 19.0535 15.0547 19.0535C14.4836 19.0535 13.9183 18.9393 13.3921 18.7174C12.8659 18.4956 12.3894 18.1707 11.9907 17.7619C11.592 17.3531 11.2791 16.8687 11.0705 16.3371C10.8619 15.8055 10.7617 15.2376 10.776 14.6667C10.8039 13.5504 11.2669 12.4892 12.0662 11.7096C12.8656 10.9299 13.938 10.4935 15.0547 10.4935C16.1713 10.4935 17.2437 10.9299 18.0431 11.7096C18.8424 12.4892 19.3055 13.5504 19.3333 14.6667Z"
                  fill="#116CFF"
                />
              </svg>

              <div className="dowl">
                <div className="dow-view">12 K+</div>
                <div className="dow-turn">Ca chuẩn đoán</div>
              </div>
            </div>
          </div>



          <div className="container-item--l">
            <div className="item-l">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_179_478)">
                  <path
                    d="M31.5 0.196429C31.8928 0.482143 32.0535 0.863095 31.9821 1.33929L27.4107 28.7679C27.3512 29.1131 27.1607 29.381 26.8393 29.5714C26.6726 29.6667 26.4881 29.7143 26.2857 29.7143C26.1547 29.7143 26.0119 29.6845 25.8571 29.625L17.7678 26.3214L13.4464 31.5893C13.2321 31.8631 12.9404 32 12.5714 32C12.4166 32 12.2857 31.9762 12.1785 31.9286C11.9524 31.8452 11.7708 31.7054 11.6339 31.5089C11.497 31.3125 11.4285 31.0952 11.4285 30.8571V24.625L26.8571 5.71429L7.76783 22.2321L0.714256 19.3393C0.27378 19.1726 0.0356843 18.8452 -3.00331e-05 18.3571C-0.0238396 17.881 0.166637 17.5298 0.571399 17.3036L30.2857 0.160714C30.4643 0.0535714 30.6547 0 30.8571 0C31.0952 0 31.3095 0.0654762 31.5 0.196429Z"
                    fill="#116CFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_179_478">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className="dowl">
                <div className="dow-view">5 M+</div>
                <div className="dow-turn">Lượt tải về</div>
              </div>
            </div>
          </div>
        </div>

        {/* 
			  <div className="activity">
			  <div className="ac">
				<div className="ac--">
					<div className="ac-text">
					Tại sao bạn nên chọn chúng tôi?
					</div>

				</div>
				<div className="ac-bu">
					<div className="bu1">

					</div>
					<div className="bu2">

					</div>
					<div className="bu3">

					</div>

				</div>
			  </div>
			  </div> */}
      </React.Fragment>
    );
  }
}

export default DB;
