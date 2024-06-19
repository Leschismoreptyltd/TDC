import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";

const VideoDialogCard = (props) =>{

    return(
        <>
        <div className="mx-auto flex-auto">

        <Card  variant = "gradient"
        color = "transparent"
        className="top-2.5 mx-auto max-w-screen-xlpx-4 py-3">
      <CardBody>
        <Typography variant="h4" color="black" className="mb-2">
          {props.heading}
        </Typography>
        <Typography color ="black">
          {props.content}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={props.fullEpisodeUrl}><Button>Watch Now</Button></Link>
      </CardFooter>
    </Card>

        </div>
        
        </>
    )
}

export default VideoDialogCard;