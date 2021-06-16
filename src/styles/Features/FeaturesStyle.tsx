import styled from "@emotion/styled";

interface Label {
  active: true | false;
}

export const FeatureDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0 50px 0;
  font-size: large;
  input {
    display: none;
  }
`;
export const FeatureChildDiv1 = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    color: dodgerblue;
  }
  @media (max-width: 501px) {
    width: 300px;
  }
`;
export const FeatureChildDiv3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin:20px 0 0 0;
  div {
    padding: 10px;
    width: 500px;
    margin:0 10px 0 10px;
    a {
      border-radius: 5px;
      color: white;
      padding: 10px 15px;
      background-color: dodgerblue;
    }
  }
  @media (max-width: 501px) {
    div {
      width: 300px;
    }
  }
`;
export const FeatureLabel = styled.label<Label>`
  margin: 10px;
  border: none;
  background: none;
  color: ${({ active }) => (active ? "dodgerblue" : "black")};
  border-bottom: ${({ active }) => (active ? "1px solid dodgerblue" : "none")};
`;
