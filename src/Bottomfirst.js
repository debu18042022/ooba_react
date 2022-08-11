import React from "react";
import "./Bottomfirst.css";
function Bottomfirst() {
  return (
    <div className="main_bottom_first_container">
      <div className="Reasons_to_use_ooba">
        <h1 style={{ fontSize: "2rem" }}>Reasons to use ooba</h1>
      </div>
      <div className="parent_container">
        <div className="parent_container1">
          <div className="single_container">
            <div className="internal_container">
              <i class="fa-solid fa-graduation-cap"></i>
              <p>Expert Advice</p>
            </div>
          </div>
          <div className="single_container">
            <div className="internal_container">
              <i class="fa-solid fa-thumbs-up"></i>
              <p>Our Service is completely free</p>
            </div>
          </div>

          <div className="single_container">
            <div className="internal_container">
              <i class="fa-solid fa-check"></i>
              <p>70% of applications are approved</p>
            </div>
          </div>
          <div className="single_container">
            <div className="internal_container">
              <i class="fa-solid fa-file"></i>
              <p>We handle the paper work</p>
            </div>
          </div>
          <div className="single_container">
            <div className="internal_container">
              <i class="fa-solid fa-building-columns"></i>
              <p>can apply with up to 8 banks</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Reasons_to_use_ooba">
        <button>I'M READY PREQUALIFY ME</button>
      </div>
    </div>
  );
}

export default Bottomfirst;
