import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => (!props.direction ? 'row' : props.direction)};
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 120px;
`;

export default Container;
