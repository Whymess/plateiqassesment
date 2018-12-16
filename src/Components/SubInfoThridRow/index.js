import React from "react";

export default props => {
  let { sectionOne, sectionTwo, sectionThree, sectionFour } = props;
  return (
    <div className="d-flex bd-highlight mb-3">
      <div className="p-2 bd-highlight">{sectionOne}</div>
      <div className="p-2 bd-highlight">{sectionTwo}</div>
      <div className="p-2 bd-highlight">{sectionThree}</div>
      <div className="p-2 bd-highlight">{sectionFour} </div>
      <div style={{'width': '150px'}}className="p-2 bd-highlight border-bottom"> </div>
    </div>
  );
};
