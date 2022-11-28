import styled from "styled-components";

export const Content = styled.div`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;

  width: 280px;
  height: 380px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    padding: 5px;

    h1 {
      text-align: center;
      text-transform: uppercase;
      padding-bottom: 15px;
    }

    h1,
    input,
    button {
      width: 100%;
    }

    input {
      border: none;
      margin-left: 5px;

      background: transparent;
    }

    button {
      margin: 5px 0px;
      height: 32px;
      text-transform: uppercase;
    }
  }
`;

export const Input = styled.div`
  display: flex;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  height: 32px;
  margin-bottom: 10px;
  align-items: center;

  svg {
    color: rgba(0, 0, 0, 0.2);
  }
`;

export const Output = styled.div`
  height: 32px;

  div {
    text-align: center;
    text-transform: uppercase;
  }
`;
