import React, { useState, useEffect } from "react";
import JobAdvertisementFilter from "../components/JobAdvertisementFilter";
import JobAdvertisementList from "../components/JobAdvertisementList";
import JobAdvertisementDetail from "../components/JobAdvertisementDetail";
import "./JobAdvertisements.css";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisements() {
  const [advertisements, setAdvertisements] = useState([]);
  const [advertisement, setAdvertisement] = useState({});
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAll()
      .then((result) => setAdvertisements(result.data.data));
    jobAdvertisementService
      .getAll()
      .then((result) => setAdvertisement(result.data.data[0]));

    jobAdvertisementService
      .getAllPageable(1, 10)
      .then((result) => console.log(result.data.data));
  }, []);

  const advertisementHandler = (ad) => {
    setAdvertisement(ad);
  };

  return (
    <div className="d-flex flex-column afaf">
      <div>
        <JobAdvertisementFilter />
      </div>
      <div className="d-flex">
        <JobAdvertisementList
          advertisements={advertisements}
          setAdvertisement={advertisementHandler}
        />
        <JobAdvertisementDetail advertisement={advertisement} />
      </div>
    </div>
  );
}
