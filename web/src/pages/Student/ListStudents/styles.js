import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 4px;
`;

export const Wrapper = styled.div`
  margin: 0 0 20px;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 24px;
    color: #444;
  }

  div {
    display: flex;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ee4d64;
      border: 0;
      width: 142px;
      height: 36px;
      border-radius: 4px;
      margin-right: 10px;
      padding: 5px;
      color: #fff;
      font-weight: bold;

      svg {
        margin-right: 10px;
      }
    }
  }
`;

export const Grid = styled.ul`
  background: #fff;
  min-width: 100%;
  padding: 20px;

  li {
    color: #444;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;

    & + li {
      border-bottom: 1px solid #eee;
    }

    &:last-child {
      border-bottom: 0;
    }

    p {
      color: #666;
    }
  }
`;

export const GridButton = styled.div`
  display: flex;

  a {
    & + button {
      margin-left: 20px;
      color: #f00;
    }
  }

  button {
    background: none;
    border: 0;
    color: #00f;
    font-size: 16px;
  }
`;

export const Search = styled.div`
  display: flex;
  padding: 4px;
  max-width: 230px;
  max-height: 36px;
  align-items: center;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;

  svg {
    margin-left: 4px;
  }

  input {
    color: #000;
    background: none;
    border: 0;
    margin-left: 4px;
  }
`;
