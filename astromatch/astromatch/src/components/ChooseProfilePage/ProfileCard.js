import React from "react"
import styled from "styled-components";

const ProfileCardContainer = styled.div `
    margin: 16px;
    border: 1px solid black;
    border-radius: 4px;
    height: 450px;
    background-image: ProfileImg;
    

`
const ProfileImg = styled.img`

    box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s ease 0s;
    width: 100%;
    animation: 0.5s ease 0s 1 normal forwards running none;
    display: flex;
    flex-direction: column;
    max-height: 350px;
    
`
const ProfileInfo = styled.div`
    padding: 0 16px;
`


function ProfileCard(props) {
    const profile = props.profile
    return(
        <ProfileCardContainer>
            <ProfileImg src={profile.photo} />
            <ProfileInfo>
                <p>{profile.name}, {profile.age}</p>
                <p>{profile.bio}</p>
            </ProfileInfo>
            
        </ProfileCardContainer>
    )


}

export default ProfileCard;