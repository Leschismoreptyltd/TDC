import HomePageHeading from "../fragments/HomePageHeading";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
const JoinTDC = () =>{
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
            <div className="grid grid-cols-2 gap-6">
                <div className="col-span-1">
                    <Typography>
                        Column 1
                    </Typography>
                </div>
                <div className="col-span-2">
                    <Typography className="cols-span-2">
                        Column 2
                    </Typography>
                </div>
            </div>

        </>
    )
}

export default JoinTDC;