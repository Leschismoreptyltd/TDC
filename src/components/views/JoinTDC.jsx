import { useState } from "react"
import HomePageHeading from "../fragments/HomePageHeading";
import CustomForm from "../cards/CustomForm";
const JoinTDC = () =>{
    //Custom Form setup
    const title = "Sign Up";
    const titleMessage = "Nice to meet you! Enter your details to register with The Drag Cartel.";
    const fieldNames = [
        "Name:", 
        "Alias:", 
        "Email:", 
        "Cell Number:", 
        "Instagram Handle:",
        "TikTok Username:",
        "Facebook Username:",
        "Profil Picture:",
        "Album Pictures:"]
    const fieldTypes =["text", "text", "email", "phone", "text", "text", "text", "file", "file"];
    const placeholders=["John/Jane Doe", "Alias", "name@mail.com", "123 456 7890"]
    const customFormObj = {
        fieldNames,
        fieldTypes,
        placeholders
    }
    const heading = "Join TDC";

    const [profilePicture, setProfilePicture] = useState(null);
    const [albumPictures, setAlbumPictures]  = useState([]);

    return(
        <>
            {/* Header */}
            <div className="text-center my-12">
                <HomePageHeading heading ={heading} size={5}/>
            </div>

            {/* Form heading */}
            {/* 
            <div className="text-center">
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
            </div> */}

            {/* Card and Form */}
            <div className="flex justify-center rounded-xl">

            <CustomForm 
            formTitle = {title} 
            formMessage = {titleMessage} 
            customFormObj = {customFormObj}
            profilePicture = {profilePicture}
            albumPictures = {albumPictures}
            setProfilePictures = {setProfilePicture}
            setAlbumPictures = {setAlbumPictures}/>

            </div>

        </>
    )
}

export default JoinTDC;