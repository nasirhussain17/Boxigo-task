import React, { Component, Fragment } from "react";
import { db } from "../db/db.js";
import InventoryDetails from "./InventoryDetails";

class MainComponent extends Component {
  constructor(props) {
    super();
    this.state = { db: db, showMoveDetails: false, id: "", inventory: "" };
    // this.toggleMoveDetails = this.toggleMoveDetails.bind(this);
  }
  toggleMoveDetails(id, e) {
    e.preventDefault();
    this.setState({
      showMoveDetails: !this.state.showMoveDetails,
      id: id,
    });
    console.log(this.state.id);
  }

  render() {
    return (
      <Fragment>
        <div class="container">
          <div class="row mt-5">
            <div class="col-12 col-sm-3 side-bar">
              <div class="row mt-5">
                <span class="fa fa-truck"></span> MY MOVES
              </div>

              <div class="row mt-2">
                <span class="fa fa-user"></span>MY PROFILE
              </div>
              <div class="row mt-2">
                <span class="fa fa-clipboard"></span>GET QUOTE
              </div>
              <div class="row mt-2">
                <span class="fa fa-sign-out">LOGOUT</span>
              </div>
            </div>
            {/* Main Area */}
            <div class="col-12 col-sm-9">
              <div class="row mt-3">
                <h4>
                  <b>My Moves</b>
                </h4>
              </div>
              {this.state.db.Customer_Estimate_Flow.map((data) => {
                return (
                  <Fragment>
                    <div class="main">
                      <div class="row mt-3">
                        <div class="col-sm-4">
                          <b>From</b>
                          <br />
                          {data.moving_from}
                        </div>
                        <div class="col-sm-2">
                          <span class="fa fa-arrow-right"></span>
                        </div>
                        <div class="col-sm-4">
                          <b>To</b>
                          <br />
                          {data.moving_to}
                        </div>

                        <div class="col-sm-2">
                          <b>Request</b>
                          <br />
                          {data.estimate_id}
                        </div>
                      </div>

                      <div class="row mt-3">
                        <div class="col-sm-1">
                          <i class="fa fa-home"></i>
                          {data.property_size}
                        </div>
                        <div class="col-sm-1">
                          <i class="fa fa-building"></i>32
                        </div>
                        <div class="col-sm-1">
                          <i class="fa fa-map"></i>
                          {data.distance}
                        </div>
                        <div class="col-sm-2">
                          <i class="fa fa-calendar"></i>
                          {data.moving_on}
                        </div>
                        <div class="col-sm-2">
                          <input type="checkbox" /> is flexible
                        </div>
                        <div class="col-sm-3">
                          <button
                            class="move-details"
                            id={data.estimate_id}
                            onClick={(e) =>
                              this.toggleMoveDetails(data.estimate_id, e)
                            }
                          >
                            View move details
                          </button>
                        </div>
                        <div class="col-sm-2">
                          <button class="quotes">Quotes awaiting</button>
                        </div>
                      </div>

                      <div class="row mt-2 mb-3">
                        <div class="col-sm-12">
                          <i class="fa fa-warning"></i> <b>Disclaimer</b> :
                          Please update your move date before two days of
                          shifting
                        </div>
                      </div>
                    </div>
                    {this.state.showMoveDetails === true ? (
                      data.estimate_id === this.state.id ? (
                        <InventoryDetails
                          data={this.state.db.Customer_Estimate_Flow.filter(
                            (item) => item.estimate_id === this.state.id
                          )}
                        />
                      ) : (
                        <div></div>
                      )
                    ) : (
                      <div></div>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MainComponent;
