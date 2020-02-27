import React from "react";
import { Container } from "../common/container";
import { Cercle } from "../common/cercle";



const Testimonial = () => {
  return (
    <Container
      display="flex"
      background="#F3F3F3"
      justify="center"
      align="center"
      height="90vh"
      position="relative"
    >
      <Cercle height="20rem" top="-5%" left="10%" background="#EAD6D7" />
      <Cercle height="10rem" bottom="-6%" right="10%" background="#DCE7ED" />
    </Container>
  );
};

export default Testimonial;
