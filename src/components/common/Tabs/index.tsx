import React from "react";
import CreatedModulesAll from "../../../pages/CreatedModulesAll";
import CreatedModulesArchived from "../../../pages/CreatedModulesArchived";
import CreatedModulesCourses from "../../../pages/CreatedModulesCourses";
import CreatedModulesVideos from "../../../pages/CreatedModulesVideos";
import Styles from "./styles.module.scss";
const Tabs = () => {
  return (
    <>
      <div className={Styles.tabsMain}>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-all-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-all"
              type="button"
              role="tab"
              aria-controls="pills-all"
              aria-selected="true"
            >
              all
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-courses-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-courses"
              type="button"
              role="tab"
              aria-controls="pills-courses"
              aria-selected="false"
            >
              courses
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-videos-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-videos"
              type="button"
              role="tab"
              aria-controls="pills-videos"
              aria-selected="false"
            >
              videos
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-archived-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-archived"
              type="button"
              role="tab"
              aria-controls="pills-archived"
              aria-selected="false"
            >
              archived
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
          >
            <CreatedModulesAll />
          </div>
          <div
            className="tab-pane fade"
            id="pills-courses"
            role="tabpanel"
            aria-labelledby="pills-courses-tab"
          >
            <CreatedModulesCourses />
          </div>
          <div
            className="tab-pane fade"
            id="pills-videos"
            role="tabpanel"
            aria-labelledby="pills-videos-tab"
          >
            <CreatedModulesVideos />
          </div>

          <div
            className="tab-pane fade"
            id="pills-archived"
            role="tabpanel"
            aria-labelledby="pills-archived-tab"
          >
            <CreatedModulesArchived />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
