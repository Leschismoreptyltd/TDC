import VideoView from "../fragments/VideoView";
import VideoDialogCard from "../cards/VideoDialogCard";
import GigGuideCard from "../cards/GigGuideCard";
import HomePageHeading from "../fragments/HomePageHeading";
import gig1 from "../../assets/images/gig_guide/tdc_beefcakes.jpg";
import zero21angelalamore from "../../assets/images/gig_guide/zero21_social_angelalamore.jpg";
import zero21maxinewild from "../../assets/images/gig_guide/zero21_social_maxinewild.jpg";
import etcmaxineemogan from "../../assets/images/gig_guide/etc_maxineemogan.jpg";
import sttpsnippit from "../../assets/video/straight_to_the_point_snippet.mp4";
import LgbtqiaNewsCard from "../cards/LgbtqiaNewsCard";
import newsImage1 from "../../assets/images/lgbtqia_news/Dope-Saint-Jude-Picture-Supplied.webp";
import newsImage2 from "../../assets/images/lgbtqia_news/The-all-new-Straight-To-The-Point-with-The-Drag-Cartel-queens-Emogan-Moore-Maxine-Wild-and-Chenal-LeCap.webp";
import newsImage3 from "../../assets/images/lgbtqia_news/LGBTQ-professionals-face-increasing-discrimination-and-safety-risks-when-travelling-for-work-globally-Picture-Unsplash.webp";


const Home = () =>{

    //Temporary Props...
        //Heading Props...
    //const homeHeading = "Whats Popping At The Drag Cartel";
    const homeHeading = "This is a test";
    const gigGuideHeading = "Gig Guide"

        //Gig guide Props
    const gigGuide = {
        gigGuideUrlArray : [
        gig1,
        zero21angelalamore,
        zero21maxinewild,
        etcmaxineemogan    
        ],
        gigGuideHeadings:[
            "Beefcakes",
            "Zero21 Social",
            "Zero21 Social",
            "ETC Pub Centurion"
        ],
        gigGuideDescription:[
            "Join us every Thursday for a night of dazzling performances hosted by our very own @maxinewildmua and @emoganmoore. Spin the wheel of luck and see who will be performing each week! 20 weeks, 20 brand new shows 😁 Neon lights, glitter and electrifying energy, you won’t want to miss this unforgettable experience!!!!!",
            "Heart Sunday with @angellalamore99 at @zer021social",
            "Catch @maxinewildmua this Sunday at @zer021social for Wild Wonder!!!!!! Allow her to take you on a wondrous journey of heart, soul and seduction!!!",
            "Pretoria are you ready!!!!!!!!! Catch @maxinewildmua and @emoganmoore at @etcpubcenturion tomorrow evening 😁 So excited to see you all ❤️"
        ]
    } 

    

        //Video Props
    const videoDialogHeading = "Straight To The Point...";
    const videoDialogContent = "Catch the latest episode of Straight to the Point with the amazing hosts Maxine, Emogen and Chanel.This week they are covering the topic of cheating and how to deal with teh social pressures of having a different sexual orientation in society.";
    const videoUrl = sttpsnippit;

        //LGBTQIA+ NEWS Props
    const lgbtqiaNews = "LGBTQIA+ News"

    const lgbtqiaNewsObj = {
        imageUrl:[newsImage1, newsImage2, newsImage3
        ],

        title:[ "Cape Town based electro hip hop artist, Dope Saint Jude returns to the music scene with her newest offering, 'Happy Day'.",
        "WATCH: Drag queen trio break boundaries on ‘Straight To The Point’ podcast",
        "5 tips to help businesses prioritise LGBTQ+ business travellers"
            ],

        link:["https://www.iol.co.za/sunday-tribune/entertainment/dope-saint-jude-drops-new-single-happy-day-40774f3f-ec8e-47bf-9c5f-ec3089dff9b3",
        "https://www.iol.co.za/capeargus/watch-drag-queen-trio-break-boundaries-on-straight-to-the-point-podcast-8d4c9399-c751-4028-901b-3b9b31c2aa96",
        "https://www.iol.co.za/sunday-tribune/travel/5-tips-to-help-businesses-prioritise-lgbtq-business-travellers-e97f96b0-9bd1-412f-aabb-7c563cd6c3a5"
        ]
    }

        return(
        <>
        {/*Heading*/}

        <div className="text-center my-12 text-white">

            <HomePageHeading heading = {homeHeading} size = {5} space={true}/>        

        </div>
        

        {/*Content*/}
        <div className="flex-1">

            {/*Video and Dialog*/}
            <div className="m-3 grid grid-cols-2 mobile:grid-cols-1 laptop:grid-cols-2">
            
                <div className="flex justify-start items-center">
                    <VideoView url = {videoUrl} width = "85%" height="auto"/>
                </div>

                <div className="flex justify-start items-start">
                    <VideoDialogCard heading = {videoDialogHeading} content = {videoDialogContent}/>
                    </div>            
                
            </div>

            {/*Gig Guide*/}
            <div className="text-center my-12">
                <HomePageHeading heading = {gigGuideHeading} size = {5} space={true}/>
                <div className="grid grid-cols-4 gap-5 my-10 desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
                    {gigGuide.gigGuideUrlArray.map((url, index) => (

                    <GigGuideCard key = {index} url = {url} heading={gigGuide.gigGuideHeadings[index]} description = {gigGuide.gigGuideDescription[index]}/>))}
                    
                </div>
            </div>

            {/*LGBTQIA+ News*/}
            <div className="text-center my-12">
                <HomePageHeading heading = {lgbtqiaNews} size={5} space={false}/>
                <div className="text-left grid grid-row-3 gap-3 max-w-full">
                    {lgbtqiaNewsObj.imageUrl.map((url, index) => (
                        <LgbtqiaNewsCard key = {index} imageUrl={url} title={lgbtqiaNewsObj.title[index]} link={lgbtqiaNewsObj.link[index]}/>
                    ))}
                </div>
            

            </div>

        </div>
        </>
    )
}

export default Home;