import React from 'react';
import { 
  FaWifi, 
  FaTv, 
  FaNotesMedical, 
  FaSwimmingPool, 
  FaLaptop, // Replacing FaComputer
  FaGamepad, 
  FaSpa, 
  FaDumbbell, 
  FaLeaf 
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div id="main">
      {/* Front Page */}
      <div id="front_page">
        <img id="image" src={require("../pics/12.jpg")} alt="Hotel exterior"/>
      </div>

      {/* Page 2 */}
      <div id="page2">
        <div id="para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit...
        </div>
      </div>

      {/* Page 3 */}
      <div id="page3">
        <img id="image1" src={require("../pics/13.jpg")} alt="Hotel lobby"/>
      </div>

      {/* Page 4 - Rooms */}
      <div id="page4">
        <div id="box1">
          <img className="image4" src={require("../pics/14.jpg")} alt="Standard room"/>
          <div className="para_for_4_page">
            <p>Standard Room</p>
            <p>30 square meter</p>
          </div>
          <div id="box1_symbol">
            <div style={{ order: 4 }}><FaWifi /></div>
            <div style={{ order: 3 }}><FaTv /></div>
            <div style={{ order: 2 }}><FaNotesMedical /></div>
            <div style={{ order: 1 }}><FaSwimmingPool /></div>
          </div>
        </div>

        <div id="box2">
          <img className="image4" src={require("../pics/15.jpg")} alt="Luxury room"/>
          <div className="para_for_4_page">
            <p>Luxury Room</p>
            <p>50 square meter</p>
          </div>
          <div id="box2_symbol">
            <div style={{ order: 4 }}><FaWifi /></div>
            <div style={{ order: 3 }}><FaTv /></div>
            <div style={{ order: 2 }}><FaLaptop /></div> {/* Changed from FaComputer */}
            <div style={{ order: 1 }}><FaSwimmingPool /></div>
          </div>
          <div id="box2_part2_symbol">
            <div><FaNotesMedical /></div>
          </div>
        </div>

        <div id="box3">
          <img className="image4" src={require("../pics/16.jpg")} alt="Special room"/>
          <div className="para_for_4_page">
            <p>Special Room</p>
            <p>70 square meter</p>
          </div>
          <div id="box3_symbol">
            <div style={{ order: 4 }}><FaWifi /></div>
            <div style={{ order: 3 }}><FaTv /></div>
            <div style={{ order: 2 }}><FaLaptop /></div> {/* Changed from FaComputer */}
            <div style={{ order: 1 }}><FaSwimmingPool /></div>
          </div>
          <div id="box3_part2_symbol">
            <div><FaGamepad /></div>
            <div><FaNotesMedical /></div>
          </div>
        </div>
      </div>

      {/* Page 5 - Features */}
      <div id="page5">
        <h1 id="heading_5pg_1">Features</h1>
        <div id="page5_box">
          <div id="page5_para">
            <p>Lorem ipsum dolor sit amet consectetur...</p>
          </div>
          <div id="features_icons">
            <div id="spa_icon"><FaSpa /></div>
            <div id="gym_icon"><FaDumbbell /></div>
            <div id="nature_icon"><FaLeaf /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;