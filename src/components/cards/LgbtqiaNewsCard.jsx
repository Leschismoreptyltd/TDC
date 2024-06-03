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
                <Button><Link to={link}>Read more...</Link></Button>
            </CardFooter>
        </Card>

        </div>

       {/*  <div className="grid grid-cols-3 gap-2 my-4 border-4 border-white rounded-2xl mobile:grid-rows-3 max-w-full">
            <div className="col-span-1 mobile:row-span-1">
                <img src={imageUrl} alt="News Image" className="max-w-xs rounded-2xl mobile:max-w-1/3 "/>
            </div>
            <div className="col-span-2 mobile:row-span-2">
                <Typography variant="h3" className="mt-8">{title}</Typography>
                <Button className="justify-end items-end"><Link to={link}>Read more...</Link></Button>
            </div>
        </div> */}
        </>

    )


}

export default LgbtqiaNewsCard