import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import * as React from "react";
import Styles from "./loader.module.scss";


const Loader = () => {
   return (
      <div className={Styles.loaderMain}>
         <span className={Styles.spinnerIcon}>
            <FontAwesomeIcon icon={faSpinner} />
         </span>
      </div>
   );
};

export default Loader;
