import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import HomePageHeading from "../fragments/HomePageHeading";
import { Link } from "react-router-dom";

const GigGuideCard=(props) => {
return(<>
<Card className="mt-6 w-80 bg-inherit tablet:w-full mobile:w-full">
      <CardHeader color="blue-gray" className="relative h-50">
         <img
          src= {props.url}
          alt="card-image"
          className=" bg-inherit object-fill"
        /> 
      </CardHeader>
      <CardBody>
        <HomePageHeading heading = {props.heading} size={2}/>
        <Typography>
          {props.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      <Link to={props.link}><Button> Read More... </Button></Link>
      </CardFooter>
    </Card>
</>)
}

export default GigGuideCard;