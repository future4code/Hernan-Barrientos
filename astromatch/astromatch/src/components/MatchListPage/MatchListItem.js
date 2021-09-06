import React from "react"
import styled from "styled-components";

const ListemItemContainer = styled.div`
  margin: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  border-radius: 16px;
  box-shadow: rgb(117 117 117 / 77%) 1px 2px 4px 0px;

  :hover {
    background-color: rgba(50,50,100,0.4)
  }


`
const ListItemImg = styled.img`
  border-radius: 50%;
  padding: 0 8px;
  height: 30px;
  width: 30px;
`


function MatchListItem(props) {
  const profile = props.profile
    return(
        <ListemItemContainer>
          <ListItemImg src={profile.photo} />
          <p>{profile.name}</p>

        </ListemItemContainer>
    )


}

export default MatchListItem;