import React from 'react';
import styled from 'styled-components';
import Container from 'components/PageContainer';

export default function About() {
  return (
    <Container>
      <AboutText>
        <Title>About</Title>
        <Blockquote>
          <p>
            ShutterBug means &quot; an enthusiastic photographer &quot; in
            English. Shutterbug is a web application that allows you to share
            your own photos. This is a simple React app that plays upon with the
            Idea that a site where we list images captured by photographer.
            Since the mock APIs were relatively easy to use, and app would have
            been shorter so I was able to think of a way to make it meaningful
            by treating it as a product App. That way all three apis became
            somewhat connected to each other. We have users api, photos api, and
            albums api. Users here were treated as photographers. Photos were
            then associated to albums api and albums api was associated to users
            api.
          </p>
        </Blockquote>
      </AboutText>
    </Container>
  );
}

const AboutText = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #0d6efd;
  text-align: center;
  text-transform: capitalize;
  margin: 10px;
  padding: 10px;
`;

const Blockquote = styled.blockquote`
  text-align: center;
  font-size: 20px;
  p {
    width: 80%;
    margin: 0 auto;
  }
`;
