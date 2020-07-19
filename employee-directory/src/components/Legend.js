import React, { useState } from "react";

function Legend(props) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="col-12 d-flex justify-content-center">
      <div className="col-md-2 centering">Image</div>
      <div
        className="col-md-2 centering"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        Name
        {isShown && (
          <button type="button" className="btn btn-info" onClick={props.clicky}>
            Sort
          </button>
        )}
      </div>
      <div className="col-md-2 centering">Phone</div>
      <div className="col-md-4 centering">Email</div>
      <div className="col-md-2 centering">DOB</div>
    </div>
  );
}

export default Legend;
