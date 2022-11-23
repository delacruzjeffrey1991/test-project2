import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function StrategoBoxLoader() {
  return (
    <>
      <div className='d-flex gap-3 align-items-center mt-3'>
        <Skeleton circle={true} width={60} height={60} />
        <div className='w-100'>
          <Skeleton height={40} style={{ width: 830 }} />
        </div>
      </div>
      <div className='mt-3 mb-3 pl-75 w-100'>
        <Skeleton height={40} />
      </div>
      <div className='mt-3 mb-3 pl-75 w-100'>
        <Skeleton height={100} />
      </div>
    </>
  );
}

export default StrategoBoxLoader;
