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
        <div className="activity">
          <div className="ac">
            <div className="ac--">
              <div className="ac-text">Tại sao bạn nên chọn chúng tôi?</div>
            </div>
            <div className="ac-bu">
              <div className="bu1">
                <div className="iamge">
                  <img src="/images/usse.png" alt="" />
                </div>

                <div className="bu-text">
                  <div className="text-">Dễ dàng sử dụng</div>
                  <div className="text--">
                    Với giao diện thân thiện, dễ sử dụng, và tính bảo mật cao,
                    ứng dụng này không chỉ giúp cải thiện sức khỏe cá nhân mà
                    còn nâng cao nhận thức về bệnh tiểu đường trong cộng đồng.
                  </div>
                </div>
              </div>
              <div className="bu2">
                <div className="iamge">
                  <img src="/images/hand.png" alt="1" />
                </div>

                <div className="bu-text">
                  <div className="text-">Công nghệ AI tân tiến</div>
                  <div className="text--">
                    Ứng dụng Tiên Đoán Tiểu Đường giúp phát hiện nguy cơ mắc
                    bệnh sớm, cung cấp lời khuyên phòng ngừa và cải thiện lối
                    sống cho cộng đồng.
                  </div>
                </div>
              </div>
              <div className="bu3">
                <div className="iamge">
                  <img src="/images/priti.png" alt="1" />
                </div>

                <div className="bu-text">
                  <div className="text-">Lấy kết quả nhanh</div>
                  <div className="text--">
                    Bằng cách nhập các thông tin cá nhân như tuổi, giới tính,
                    cân nặng, chiều cao, và các chỉ số sức khỏe khác, ứng dụng
                    sẽ sử dụng thuật toán trí tuệ nhân tạo để phân tích và đưa
                    ra đánh giá về nguy cơ mắc bệnh.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DB;
