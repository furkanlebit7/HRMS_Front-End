import React, { useState, useEffect } from "react";
import JobAdvertisementFilter from "../components/JobAdvertisementFilter";
import JobAdvertisementList from "../components/JobAdvertisementList";
import JobAdvertisementDetail from "../components/JobAdvertisementDetail";
import "./JobAdvertisements.css";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisements() {
  const [advertisements, setAdvertisements] = useState([]);
  const [advertisement, setAdvertisement] = useState({});
  const [size, setSize] = useState(10);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllPageable(1, 10)
      .then((result) => setAdvertisements(result.data.data));
    jobAdvertisementService
      .getAllPageable(1, 10)
      .then((result) => setAdvertisement(result.data.data[0]));
  }, []);

  const advertisementHandler = (ad) => {
    setAdvertisement(ad);
  };

  const pageableSizeHandler = (size) => {
    let jobAdvertisementService = new JobAdvertisementService();
    setSize(size);
    jobAdvertisementService
      .getAllPageable(1, size)
      .then((result) => setAdvertisements(result.data.data));
  };
  const pageablePageHandler = (page) => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllPageable(page, size)
      .then((result) => setAdvertisements(result.data.data));
  };

  return (
    <div className="d-flex flex-column afaf">
      <div>
        <JobAdvertisementFilter />
      </div>
      <div className="d-flex">
        <JobAdvertisementList
          pageablePageHandler={pageablePageHandler}
          pageableSizeHandler={pageableSizeHandler}
          advertisements={advertisements}
          setAdvertisement={advertisementHandler}
        />
        <JobAdvertisementDetail advertisement={advertisement} />
      </div>
    </div>
  );
}
