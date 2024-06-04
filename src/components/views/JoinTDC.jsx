import HomePageHeading from "../fragments/HomePageHeading";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  const update = true;
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
            <div className="max-w-4xl mx-auto p-4">
                <form className="flex flex-col gap-6">

                <div className="w-1/2 p-4">
                    <Typography>

                        Column 1

                    </Typography>
                </div>
                <div className="w-1/2 p-4">
                    <Typography >

                        Column 2

                    </Typography>
                </div>

                </form>
            </div>

        </>
    )
}

export default JoinTDC;