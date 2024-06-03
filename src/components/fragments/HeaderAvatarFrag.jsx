import { Avatar } from "@material-tailwind/react";
import image1 from "../../assets/images/header_images/headerImage1.jpg"
import image2 from "../../assets/images/header_images/headerImage2.jpg"
import image3 from "../../assets/images/header_images/headerImage3.webp"
import image4 from "../../assets/images/header_images/headerImage4.webp"
import image5 from "../../assets/images/header_images/headerImage5.webp"
import image6 from "../../assets/images/header_images/headerImage6.webp"
const HeaderAvatarFrag =() => {
    const headerImageArray = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
    ]

    return(
        <>
        <div className="flex items-center -space-x-4 m-auto mobile:-space-x-2">

            {headerImageArray.map((img,index) => (
                <img key={index} src={img} className="object-center object-cover h-36 mobile:h-12 rounded-md"/>
                               
            ))}

        </div>
        </>
    )

}

export default HeaderAvatarFrag;
