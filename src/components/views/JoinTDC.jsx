import HomePageHeading from "../fragments/HomePageHeading";
import CustomForm from "../cards/CustomForm";
import { Typography } from "@material-tailwind/react";
const JoinTDC = () =>{
    const title = "Sign Up";
    const titleMessage = "Nice to meet you! Enter your details to register.";
    const fieldNames = ["Your Name", "Your Email", "Password", "Profile Picture"]
    const fieldTypes =["text", "email", "password", "file"];
    const placeholders=["John/Jane Doe", "name@mail.com", "********", "Select a Profile Picture"]
    const customFormObj = {
        fieldNames,
        fieldTypes,
        placeholders
    }
    const heading = "Join TDC";
    return(
        <>
            {/* Header */}
            <div className="text-center my-12">
                <HomePageHeading heading ={heading} size={5}/>
            </div>

            {/* Form heading */}
            <div className="text-center">
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
            </div>

            {/* Card and Form */}
            <CustomForm 
            formTitle = {title} 
            formMessage = {titleMessage} 
            customFormObj = {customFormObj}/>

        </>
    )
}

export default JoinTDC;