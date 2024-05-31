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
        <div className="container-tem">
          <div className="tem-text">Đội ngũ chuyên gia</div>
          <div className="group-tem">
            <div className="tem-doc">
              <div className="doc1">
                <div className="doc-img">
                  <img src="/images/img1.png" />
                </div>
                <div className="doc-content">
                  <div className="content">
                    <div className="content-title">TS.BS. Nguyễn Đức Long</div>
                  </div>
                  <div className="note">Giám đốc bệnh viện Xanh Pon Hà Nội</div>
                </div>
              </div>
              <div className="doc2">
                <div className="doc-img">
                  <img src="/images/img2.png" />
                </div>
                <div className="doc-content">
                  <div className="content">
                    <div className="content-title">
                      PGS.TS.BS. Trần Ngọc Sơn
                    </div>
                  </div>
                  <div className="note">
                    Phó giám đốc bệnh viện Xanh Pon Hà Nội
                  </div>
                </div>
              </div>

              <div className="doc3">
                <div className="doc-img">
                  <img src="/images/img3.png" />
                </div>
                <div className="doc-content">
                  <div className="content">
                    <div className="content-title">BSCKII. Trần Liên Hương</div>
                  </div>
                  <div className="note">P. Giám đốc bệnh viện </div>
                </div>
              </div>
            </div>

            <div className="doc">
              <div className="doc4">
                <div className="doc-img">
                  <img src="/images/img4.png" />
                </div>
                <div className="doc-content">
                  <div className="content">
                    <div className="content-title">
                      PGS.TS.BS. Đỗ Đình Tùng{" "}
                    </div>
                  </div>
                  <div className="note">P.Giám đốc bệnh viện </div>
                </div>
              </div>
              <div className="doc5">
                <div className="doc-img">
                  <img src="/images/img5.png" />
                </div>
                <div className="doc-content">
                  <div className="content">
                    <div className="content-title">TS.BS. Ngô Quang Hùng </div>
                  </div>
                  <div className="note">
                    Phó giám đốc bệnh viện Xanh Pon Hà Nội{" "}
                  </div>
                </div>
              </div>

              <div className="doc6">
                <div className="doc-img">
                  <img src="/images/img6.png" />
                </div>
                <div className="doc-content">
                  <div className="content">
                    <div className="content-title">PGS.TS. Phạm Hồng Đức </div>
                  </div>
                  <div className="note">TK: Chẩn Đoán Hình Ảnh</div>
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
