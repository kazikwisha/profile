import React from "react";

import Container from "components/ui/Container";

import * as Styled from "./styles";

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link
          href="https://github.com/xbns"
          rel="noreferrer noopener"
          target="_blank"
        >
          GitHub
        </Styled.Link>

        <Styled.Link
          href="https://xbns.netlify.app"
          rel="noreferrer noopener"
          target="_blank"
        >
          Blog
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
