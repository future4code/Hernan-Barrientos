
import axios from "axios"
import React, { useEffect, useState } from "react"
import ChooseButtons from "./ChooseButtons"
import ProfileCard from "./ProfileCard"


function ChooseProfilePage() {
    const [profileToChoose, setProfileToChoose] = useState(undefined)
        
  const getProfileToChoose = () => {
    axios.get ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hernan-barrientos/person')
    .then(response => {
        setProfileToChoose(response.data.profile)
        })
    }  

    const ChooseProfile = (choice) => {
        const body = {
            choice: choice,
            id: profileToChoose.id
            
        }
        setProfileToChoose(undefined)
        axios.post (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hernan-barrientos/choose-person`, body)
        .then(response => {
            console.log(response)
            getProfileToChoose()
        })
        
    }

    useEffect(() => {
       getProfileToChoose()      
    
    }, [])

    const onClickNo = () => {
        ChooseProfile(false)
        
    }

    const onClickYes = () => {
        ChooseProfile(true)
    }
    
    



    return(
        <div>
            {profileToChoose ?
           (<>
            
                    <ProfileCard profile={profileToChoose}/>
                    <ChooseButtons
                     onClickNo={onClickNo}
                     onClickYes={onClickYes}/>
            </>)  : <p> Carregando... </p>
                
            }
        </div>
    )


}

export default ChooseProfilePage