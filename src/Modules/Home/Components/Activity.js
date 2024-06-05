"use strict";

/* Package System */
import React from "react";
class Activity extends React.Component {
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
        <div className="activity">
          <div className="activity-title">Tại sao bạn nên chọn chúng tôi?</div>
          <div className="row activity-content">
            <div className="col-lg-4 col-md-6 col-sm-6  item-box">
              <div className="item">
                <img src="/images/usse.png" alt="" />

                <div className="bu-text">
                  <div className="text-">Dễ dàng sử dụng</div>
                  <div className="text--">
                    Với giao diện thân thiện, dễ sử dụng, và tính bảo mật cao,
                    ứng dụng này không chỉ giúp cải thiện sức khỏe cá nhân mà
                    còn nâng cao nhận thức về bệnh tiểu đường trong cộng đồng.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4  col-md-6 col-sm-6 item-box">
              <div className="item">
                <img src="/images/hand.png" alt="1" />

                <div className="bu-text">
                  <div className="text-">Công nghệ AI tân tiến</div>
                  <div className="text--">
                    Ứng dụng Tiên Đoán Tiểu Đường giúp phát hiện nguy cơ mắc
                    bệnh sớm, cung cấp lời khuyên phòng ngừa và cải thiện lối
                    sống cho cộng đồng.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6  item-box">
              <div className="item">
                <img src="/images/priti.png" alt="1" />

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

export default Activity;
