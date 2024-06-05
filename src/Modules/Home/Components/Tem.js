"use strict";

/* Package System */
import React from "react";

/* Application */

class Tem extends React.Component {
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
        <div className="container-tem">
          <div className="tem-title">Đội ngũ chuyên gia</div>

          <div className="row group-content">
            <div className="col-lg-4 col-md-6 col-sm-6  item-box">
              <div className="item">
                <img src="/images/img4.png" />
                <div className="doc-content">
                  <div className="content-title">PGS.TS.BS. Đỗ Đình Tùng</div>
                  <div className="note">P.Giám đốc bệnh viện</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6  item-box">
              <div className="item">
                <img src="/images/img2.png" />

                <div className="doc-content">
                  <div className="content-title">PGS.TS.BS. Trần Ngọc Sơn</div>

                  <div className="note2">
                    Phó giám đốc bệnh viện Xanh Pon Hà Nội
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6  item-box">
              <div className="item">
                <img src="/images/img3.png" />

                <div className="doc-content">
                  <div className="content-title">BSCKII. Trần Liên Hương</div>

                  <div className="note3">P. Giám đốc bệnh viện </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6  item-box">
              <div className="item">
                <img src="/images/img1.png" />

                <div className="doc-content">
                  <div className="content-title">TS.BS. Nguyễn Đức Long</div>

                  <div className="note4">Giám đốc bệnh viện Xanh Pon Hà Nội</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6  item-box">
              <div className="item">
                <img src="/images/img5.png" />

                <div className="doc-content">
                  <div className="content-title">TS.BS. Ngô Quang Hùng </div>

                  <div className="note5">
                    Phó giám đốc bệnh viện Xanh Pon Hà Nội
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6  item-box">
              <div className="item">
                <img src="/images/img6.png" />

                <div className="doc-content">
                  <div className="content-title">PGS.TS. Phạm Hồng Đức</div>

                  <div className="note6">TK: Chẩn Đoán Hình Ảnh</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Tem;
