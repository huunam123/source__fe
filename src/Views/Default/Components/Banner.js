"use strict";

/* Package System */
import React from "react";
class Banner extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <React.Fragment>
        <section className="banner">
          <div className="container">
            <div className="banner-content">
              <div className="banner-">
                <div className="banner-text">
                  <div className="text">Ứng dụng y tế cộng đồng</div>
                  <div className="textt-">TIÊN LƯỢNG CHUẨN ĐOÁN</div>
                  <div className="text-content">ĐÁI THÁO ĐƯỜNG</div>
                </div>
                <div className="content">
                  Ứng dụng Tiên Đoán Tiểu Đường giúp người dùng phát hiện sớm
                  nguy cơ mắc bệnh tiểu đường bằng cách nhập các thông tin sức
                  khỏe cá nhân. Sử dụng trí tuệ nhân tạo, ứng dụng phân tích và
                  đưa ra kết quả tiên đoán, kèm theo các lời khuyên về chế độ ăn
                  uống, tập luyện và lịch khám sức khỏe định kỳ.
                  <div className="content-">
                    Giao diện thân thiện, dễ sử dụng và bảo mật cao, ứng dụng
                    không chỉ nâng cao nhận thức về bệnh tiểu đường mà còn hỗ
                    trợ cộng đồng cải thiện sức khỏe cá nhân một cách hiệu quả.
                  </div>
                </div>

                <div className="dl">
                  <div className="badge-gg">
                  <img src="/images/gg.png" />
                  </div>

                  <div className="badge-app">
                  <img src="/images/app.png" />


                  </div>
                </div>
              </div>
              <div className="banner-right">
                <img src="/images/doctor.png" />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Banner;
