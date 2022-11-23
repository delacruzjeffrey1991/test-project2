import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function CategoryHeadingLoader() {
  return (
    <>
      <div className="d-flex gap-3 align-items-center mt-3">
        <Skeleton circle={true} width={60} height={60} />
        <Skeleton width={150} height={25} />
      </div>
    </>
  );
} 

export default CategoryHeadingLoader;
