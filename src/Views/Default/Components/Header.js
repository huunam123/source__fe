"use strict";

/* Package System */
import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import { connect } from "react-redux";

/* Application */
import Action from "@libs/Action";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HideOnScroll from "@views/Default/Components/HideOnScroll";
import Image from "next/image";

/* Package style */
import CssBaseline from "@mui/material/CssBaseline";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgTransparent: true,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 0) {
      this.setState({ bgTransparent: false });
    } else {
      this.setState({ bgTransparent: true });
    }
  };

  handleClickOutSide = () => {
    let _status = this.props.stateStatus.open;
    if (_status.notification == true ) {
      this.props.resetOpen();
    }
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...this.props}>
          <AppBar
            id="nl-header"
            // color="inherit"
            // className={this.state.bgTransparent == true ? "transparent" : ""}
            // position="static"
          >
            <Toolbar>
              <div
                id="nl-headerr__mastehead"
                // className={
                //   this.state.bgTransparent == true ? "transparent" : ""
                // }
              >
                <div className="d-flex-">
                  <div className="menu">
                    <div className="doctor-text">
                      <div className="group-doctor">
                        <svg
                          width="29"
                          height="43"
                          viewBox="0 0 29 43"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_739_258)">
                            <path
                              d="M24.7585 12.4611C23.5615 11.2732 22.1929 10.3189 20.7066 9.62C21.4986 11.291 22.2667 12.9996 22.9331 14.627C27.3082 19.1588 27.2523 26.3773 22.7595 30.8359L14.5 39.0324L6.2425 30.8359C4.03598 28.6462 2.821 25.7358 2.821 22.6414C2.821 19.5469 3.97413 16.7949 6.06694 14.627C6.73328 12.9996 7.50138 11.291 8.29341 9.62C6.8071 10.3189 5.4385 11.2732 4.24147 12.4611C-1.41449 18.0739 -1.41449 27.2069 4.24147 32.8197L14.5 43L24.7585 32.8197C30.4145 27.2069 30.4145 18.0739 24.7585 12.4611Z"
                              fill="#0188F1"
                            />
                            <path
                              d="M14.5 0C12.489 3.67061 5.04148 17.5849 5.04148 22.1821C5.04148 27.3573 9.28495 31.5684 14.5 31.5684C19.7151 31.5684 23.9585 27.3573 23.9585 22.1821C23.9585 17.5849 16.511 3.67061 14.5 0ZM20.7545 23.3383H16.5848V27.4761H12.4152V23.3383H8.24553V19.2004H12.4152V15.0626H16.5848V19.2004H20.7545V23.3383Z"
                              fill="#CD1C30"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_739_258">
                              <rect width="29" height="43" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                        <div className="contentt">
                          <p>Tiên lượng</p>
                          <h1>Đái tháo đường</h1>
                        </div>
                      </div>
                    </div>

                    {/* <div className="language">
                      <div className="button-">
                        <div className="button-base">
                          <div className="text-v">VN</div>
                          <div className="text-">/</div>
                          <div className="text-e">EN</div>
                        </div>
                      </div>
                      <div className="language-call">
                        <div className="call-text">Liên hệ</div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stateStatus: state.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  let _action = new Action();

  return {
    resetOpen: () => {
      dispatch(_action.resetOpen());
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
