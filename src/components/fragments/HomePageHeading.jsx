
const HomePageHeading = (props) => {

    const rainbowColors = [
        "red", "orange", "yellow", "green", "blue", "indigo"
    ];
    const text = props.heading;
    if(props.space){

        return(
            <h1 className={`font-alfaSlabOne text-${props.size}xl tracking-wider`}>{text.split(" ").map((letter, index) =>(
    
            <span key={index}
            className={`text-${rainbowColors[index % rainbowColors.length]}-500 `}
            style={{
                textShadow: `20px -15px 50px ${rainbowColors[index % rainbowColors.length]}`
            }}>
                
                {letter}{" "}
                
            </span>))}</h1>
        )

    }

    else{
        return(
            <h1 className={`font-alfaSlabOne text-${props.size}xl tracking-wider`}>{text.split("").map((letter, index) =>(
    
            <span key={index}
            className={`text-${rainbowColors[index % rainbowColors.length]}-500`}
            style={{
                textShadow: `20px -15px 50px ${rainbowColors[index % rainbowColors.length]}`
            }}>
                
                {letter}
                
            </span>))}</h1>
        ) 
    }

}
export default HomePageHeading