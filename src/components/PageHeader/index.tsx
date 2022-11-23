import React, { useEffect, useState } from "react";
import Styles from "./styles.module.scss";
import Heading from "../../components/common/Heading";
import Search from "../../components/common/Search";

import { useLocation } from "react-router-dom";
import { headers } from "src/config/navigation";

function PageHeader() {
  const [page_heading, setPageHeading] = useState('Culturefy');
  const location = useLocation();
  let page_header = headers.get(location.pathname);
  useEffect(()=>{
    headers.has(location.pathname) ? setPageHeading(page_header) : null
  },[page_header])

  return (
    <div className={Styles.pageHeader}>
      <div className={Styles.pageHeading}>
        <Heading label={page_heading} variant="heading1" />
      </div>
      <div className={Styles.pageSeach} >
        <Search
          placeholder="Serach  resource groups"
          icon={true}
          variant="seacrh2"
        />
      </div>
    </div>
  );
}

export default PageHeader;