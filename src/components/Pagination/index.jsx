import React from "react";

export default ({ gotoNextPage, gotoPreviousPage }) => {
  return (
    <div>
      {gotoPreviousPage && <button onClick={gotoPreviousPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  );
};
