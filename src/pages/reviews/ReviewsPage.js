import React from "react";
import styled from "styled-components";
import TopBar from "../../components/home/TopBar";
import NavBar from "../../components/home/NavBar";
import SampleProfile from "../../images/sample-profile.svg";

const ReviewsPage = () => {
  return (
    <div>
      <Wrapper>
        <ContentBox>
          <TopBar PageName={"Reviews"} userImg={SampleProfile} />
          {/* 세연님 여기에 내용 추가해주시면 됩니다!! */}
          <NavBar />
        </ContentBox>
      </Wrapper>
    </div>
  );
};

export default ReviewsPage;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 412px;
  box-sizing: border-box;
`;

const ContentBox = styled.div`
  margin: 86px 0px;
  /* background: linear-gradient(to bottom, #ff9c00, white); */
  min-height: 780px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
