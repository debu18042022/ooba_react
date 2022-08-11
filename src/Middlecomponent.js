import React from "react";
import "./Middlestyle.css";
function Middlecomponent() {
  return (
    <div>
      <div style={{ display: "grid", placeItems: "center" ,    color:"rgb(131, 133, 134)"
}}>
        <h2>Get the ooba Advantage</h2>
        <p>Show the State agent and selller that you mean business</p>
      </div>
      <div className="middle">
        <div className="middle_main_container">
          <div className="middle_main_container_left">
            <p className="heading">1. Know your Credit Profile</p>
            <p>Bank rejects 35% of home loans due to poor credit scores</p>
            <p className="heading">2. Know what you can afford</p>
            <p>
              Get an accurate indication of your price so you can shop within
              youe means
            </p>
            <p className="heading">3. Access your financial situation</p>
            <p>There are many variations of passages of Lorem Ipsum</p>
            <p className="heading">4. Be empowered</p>
            <p>need to be sure there isn't anything embarrassing hidden</p>
          </div>
          <div className="middle_main_container_right">
            <div className="middle_right_circle">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOPceWplMhUt0VIsCJ_HZ3rqhqnkmX8K1D0Q&usqp=CAU"
                alt=""
              />
            </div>
            <div>
              <p>
                Thanks to oobsa for theie great service i will definitely
                recommend you
              </p>
              <h4>Jackson Pack,Sandton</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middlecomponent;
