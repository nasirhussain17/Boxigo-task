import React, { Fragment } from "react";

function InventoryDetails(props) {
  // const { db } = props.db;
  return (
    <Fragment>
      <div class="row">
        <button class="edit-inventory">Edit Inventory</button>
      </div>
      <div class="row mt-4 inventory">Living Room</div>
      <div class="row mt-1 inventory">Bedroom</div>
      <div class="row mt-1 inventory">Kitchen</div>
      <div class="row mt-1 inventory">Bathroom</div>

      <div class="row mt-4">
        <h5>House Details</h5>
        <button class="edit-house">Edit house details</button>
      </div>
      <div class="row mt-4 mb-3">
        <h6>Existing House Details</h6>
      </div>
      <div class="row">
        <div class="col-sm-3">Floor No.</div>
        <div class="col-sm-3">Elevator Available</div>
        <div class="col-sm-3">Packing Required</div>
        <div class="col-sm-3">Distance from truck to door</div>
      </div>
      <div class="row">
        <div class="col-sm-3">{props.data.old_floor_no}</div>
        <div class="col-sm-3">{props.data.old_elevator_availability}</div>
        <div class="col-sm-3">{props.data.packing_service}</div>
        <div class="col-sm-3">{props.data.distance}</div>
      </div>
      <div class="row mt-3">
        <h6>Additional Information</h6>
      </div>
      <div class="row mt-1">No additional info</div>
      <div class="row mt-3 additional"></div>

      <div class="row mt-4 mb-3">
        <h6>New House Details</h6>
      </div>
      <div class="row">
        <div class="col-sm-3">Floor No.</div>
        <div class="col-sm-3">Elevator Available</div>
        <div class="col-sm-3">Packing Required</div>
        <div class="col-sm-3">Distance from truck to door</div>
      </div>
      <div class="row">
        <div class="col-sm-3">{props.data.new_floor_no}</div>
        <div class="col-sm-3">Yes</div>
        <div class="col-sm-3">No</div>
        <div class="col-sm-3">1 meter</div>
      </div>
      <div class="row mt-3">
        <h6>Additional Information</h6>
      </div>
      <div class="row mt-1">No additional info</div>
      <div class="row mt-3 additional"></div>
    </Fragment>
  );
}

export default InventoryDetails;
