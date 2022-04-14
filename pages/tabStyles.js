import styled from "@emotion/styled"



export const PageBody = styled("div")`
  width: 100%;
  height: 100%;

`

export const TabHead = styled("div")`

  display: flex;
  background-color: #222222;
`

export const TabContainer = styled("div")`
  width: 100%;
  height: 100%;

  webkit-box-shadow: -1px 0px 5px 0px rgba(34 34 34);
  -moz-box-shadow: -1px 0px 5px 0px rgba(34 34 34);
  box-shadow: -1px 0px 5px 0px rgba(34 34 34);
`

export const TabBody = styled(PageBody)`
  height: 100%;

`

export const Tab = styled("div")`
  padding: 1em;


  text-decoration-line: ${({ selected }) => (selected ? "underline" : " none")};;
  color: ${({ selected }) => (selected ? "underline" : "white")};;
  background: ${({ selected }) => (selected ? "#2C2C2C" : " #222222;")};
  * {
    color: white;
  }
`
