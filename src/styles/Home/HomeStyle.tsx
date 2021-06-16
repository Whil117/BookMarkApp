import styled from "@emotion/styled";

interface Link {
  color: string;
}

export const HomeDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  /* height: 500px; */
  p {
    font-size: large;
  }
  margin: 50px 0 50px 0;
  b {
    color: dodgerblue;
  }

  div {
    width: 550px;
    margin: 20px 0 20px 0;
  }
  @media (max-width: 576px) {
    div {
      width: 410px;
    }
  }
  @media (max-width: 432px) {
    div {
      width: 350px;
    }
  }
  @media (max-width: 367px) {
    div {
      width: 310px;
    }
  }
`;

export const HomeLinks = styled.a<Link>`
  border-radius: 5px;
  padding: 5px 10px;
  color: ${({color})=> color ==='true'? 'dodgerblue' : 'black'};
  &:hover {
    border: 1px solid ${({color})=> color ==='true'? 'dodgerblue' : 'black'};
  }
`;
