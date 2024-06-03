import { TikTokEmbed} from "react-social-media-embed";
const VideoView = (props) =>{

    return(
        <>
         <video 
         className="rounded-lg"
         controls 
         autoPlay
         width={props.width}
         height={props.height}
         src= {props.url}
         >
      {/* <source src= {props.url} type="video/mp4" /> */}
      Your browser does not support the video tag.
    </video> 
           {/*  <TikTokEmbed url= {props.url} width={328} height={655}/> */}
        </>
    )
}

export default VideoView;