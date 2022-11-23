import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PageSkeletonLoader() {
  return (
    <>
      <div className='d-flex gap-3 align-items-center mt-3'>
        <Skeleton circle={true} width={80} height={80} />
        <div className='w-100'>
          <Skeleton height={40} />
        </div>
      </div>
      <div className='mt-3 mb-3 pl-100 w-100'>
        <Skeleton height={30} count={4} />
      </div>
      <div className='mt-3 mb-3 pl-100 w-100'>
        <Skeleton height={100} />
      </div>
      <div className='mt-3 mb-3 pl-100 w-100'>
        <Skeleton height={100} />
      </div>
      <div className='d-flex justify-content-between mt-3 mb-3 pl-100 w-100'>
        <Skeleton height={200} width={300} />
        <Skeleton height={200} width={300} />
        <Skeleton height={200} width={300} />
        <Skeleton height={200} width={300} />
      </div>
      <div className='mt-3 mb-3 pl-100 w-100'>
        <Skeleton height={30} />
      </div>
    </>
  );
}

export default PageSkeletonLoader;