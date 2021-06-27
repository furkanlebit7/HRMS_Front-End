import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import UserProfileBox from "../components/UserProfileBox";
import MainPageContainer from "../components/MainPageContainer";

export default function MainPage() {
  return (
    <div className=" mt-5">
      <Row>
        <Col xs={6} md={4}>
          <UserProfileBox />
        </Col>
        <Col xs={12} md={8}>
          <MainPageContainer />
        </Col>
      </Row>
    </div>
  );
}
