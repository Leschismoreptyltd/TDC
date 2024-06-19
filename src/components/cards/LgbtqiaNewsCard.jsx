import { Typography, Button, Card, CardHeader, CardBody,CardFooter } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const LgbtqiaNewsCard = (props) => {

    const imageUrl = props.imageUrl;
    const title = props.title;
    const link = props.link;

    return(
        <>
        <div className="max-w-full mt-6">
        
        <Card className="grid grid-cols-3 mt-6 max-w-full bg-inherit mobile:flex tablet:flex ">
            <CardHeader className="col-span-1 relative h-50 mobile:row-span-1">
                <img src={imageUrl} 
                alt="LGBTQIA+ News Headline" 
                className="bg-inherit object-fill"/>
            </CardHeader>
            <CardBody className="col-span-2 mobile:row-span-2">
                <Typography variant="h3" className="mt-8">{title}</Typography>
            </CardBody>
            <CardFooter>
                <Link to={link}><Button>Read more...</Button></Link>
            </CardFooter>
        </Card>

        </div>

        </>

    )


}

export default LgbtqiaNewsCard