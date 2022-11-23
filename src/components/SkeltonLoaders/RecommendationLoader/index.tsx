import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function RecommendationLoader() {
  return (
    <>
      <div className="mt-3">
        <Skeleton width={150} height={15} />
        <Skeleton width={250} height={30} />
        <div className="w-100">
          <Skeleton  height={20} />
        </div>
        <div className="mt-4 text-right">
          <Skeleton  width={80} height={40} style={{float: 'right'}} />
        </div>
      </div>
    </>
  );
} 

export default RecommendationLoader;
