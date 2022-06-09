import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: #75C6DC;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 200;
    font-family: Montserrat;
`

function Announcement(){ 
  return (
        <Container>
            Upto 30% off for Selected Items
        </Container>
  )
 
}

export default Announcement;