import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import JobAdvertisementBox from "../components/JobAdvertisementBox";
import JobAdvertisementFilterBox from "../components/JobAdvertisementFilterBox";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisements() {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementsService = new JobAdvertisementService();
    jobAdvertisementsService
      .getAll()
      .then((result) => setjobAdvertisements(result.data.data));
  });

  return (
    <Row className="mt-5">
      <Col xs={6} md={4}>
        <JobAdvertisementFilterBox />
      </Col>
      <Col xs={12} md={8}>
        {jobAdvertisements.map((advertisement) => (
          <JobAdvertisementBox
            advertisement={advertisement}
            key={advertisement.id}
          />
        ))}
      </Col>
    </Row>
  );
}
