import React, { useEffect } from "react";

function SkeletonLoading( props:any) {
  return (
    <>
    {
        props.loaded ? props.children  : props.loader
    }
    </>
  );
}

export default SkeletonLoading;
