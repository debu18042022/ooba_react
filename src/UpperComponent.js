import React from "react";
import "./Upperstyles.css";
function UpperComponent() {
  return (
    <div className="main_container">
      <div className="sub_main-container">
        <div className="ooba_text">
          <img
            src="https://play-lh.googleusercontent.com/lWSvfTQeTin68SxALC95Cqclsxaavo1xj9GHmGz77IuF5LOkUyFiNqPySyKerjxmQAo"
            alt=""
          />
        </div>
        <div className="heping_text">
          <p>Get a helping hand with your home loan</p>
        </div>
        <div className="container">
          <div className="sub_container">
            <div className="left_container">
              <div className="para_container">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industFry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled{" "}
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled{" "}
                </p>
              </div>
            </div>
            <div className="right_container">
              <div className="right_container_div">
                <div className="sub_right_container">
                  <input placeholder="Title" />
                  <input placeholder="First Name" />
                </div>
                <div className="sub_right_container">
                  <input placeholder="Last Name" />
                  <input placeholder="Email" />
                </div>
                <div className="sub_right_container">
                  <input placeholder="Phone No." />
                  <input placeholder="Id No." />
                </div>
                <div
                  className="subb_right_container"
                  style={{ marginTop: "10px" }}
                >
                  <div style={{ display: "inline-block" }}>
                    Do you have a signed sale agreement for a property
                  </div>
                  <div>
                    <label>Yes</label>
                    <input type="checkbox" />
                    <br />
                    <label>No</label>
                    <input type="checkbox" />
                  </div>
                </div>
                <div>
                  <button
                    className="PREQUALIFY_ME_BUTTON"
                    style={{ backgroundColor: "rgb(220, 156, 180)" }}
                  >
                    PREQUALIFY ME
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpperComponent;
