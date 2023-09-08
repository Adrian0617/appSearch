import { styled } from "styled-components";

export const HeaderTitle = styled.header`
  background-color: #555454;
  height: 50px;
  margin-bottom: 10px;
  h1{
    text-align: center;
    color: #F9F9F9;
  }
`

export const Container = styled.div`
    margin: 0 auto;
`

export const Table = styled.table`
    width: 100%;
    margin: 10px 0;
    border-collapse: collapse;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    thead{
      background-color: #f2f2f2;
    }

    
`

export const Td = styled.td`
    padding: 12px 15px;
    text-align: left;
`

export const Th = styled.th`
    background-color: #007bff;
    color: #fff;
`

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  /* @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  } */
`;

export const FilterContainer = styled.div`
  display:flex;
  justify-content: space-between;
  max-width: 80%;
  margin: 0 auto;

  div{
    
    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      width: 30%;
   }
  }

`

export const CustomSelect = styled.select`
  padding: 3px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-size: 12px;
  outline: none;
  margin: 0 3px;
  cursor: pointer;
`;
export const OptionSelect = styled.option`
  font-size: 12px;
  text-align: center;
`
export const SelectArrow = styled.span`
position: absolute;
top: 50%;
right: 10px;
transform: translateY(-50%);
pointer-events: none;
`;

export const InputSearch = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus{
    background-color: #f0f0f0;
    border-color: #007bff;
  }
`