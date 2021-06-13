import React from "react";
import { Row, Col } from "react-bootstrap";
import CompanyProfileBox from "../components/CompanyProfileBox";
import AdvertisementPostBox from "../components/AdvertisementPostBox";

export default function AdvertisementShare() {
  return (
    <div className=" mt-5">
      <Row>
        <Col xs={6} md={4}>
          <CompanyProfileBox />
        </Col>
        <Col xs={12} md={8}>
          <AdvertisementPostBox />
        </Col>
      </Row>
    </div>
  );
}
