import React from "react";
import "./Output.css";

function Output() {
  return (
    <div>
      <div className="output">
        <div className="csv_file">
          <div className="row0">
            <h3 className="title1"> Network Intrusion Detection using ML</h3>
          </div>
          <div className="row1">
            <div className="col1">
              <input
                type="text"
                name="name"
                class="csv_txt"
                placeholder="Enter the name of csv file"
              />
            </div>
            <div className="col2">
              <input type="button" value="SUBMIT" className="submit sbt" />
            </div>
          </div>
          <div className="row2">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="otp"
            ></textarea>
          </div>
          <div className="row3">
            <div className="col3">
              <input type="button" value="Algo 1" className="submit algo1" />
            </div>
            <div className="col4">
              <input type="button" value="Algo 2" className="submit algo2" />
            </div>
            <div className="col5">
              <input type="button" value="Algo 3" className="submit algo3" />
            </div>
            <div className="col6">
              <input type="button" value="Algo 4" className="submit algo4" />
            </div>
            <div className="col7">
              <input type="button" value="Algo 5" className="submit algo5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Output;
