import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import HomePageHeading from "../fragments/HomePageHeading";
const CustomForm = (props) => {
    const title = props.formTitle;
    const titleMessage = props.formMessage;
    const customFormObj = props.customFormObj;
return(
    <>
    <div className="flex w-full justify-center">

    <Card color="transparent" shadow={false}>
    <HomePageHeading heading ={title} size={3}/>
      <Typography color="black" className="mt-1 font-normal">
        {titleMessage}
      </Typography>
      <div className="flex mx-6 mt-8 mb-2 w-full border-white border-2 p-4 rounded-xl justify-center">
        <div className="mb-1 w-3/8 gap-6 justify-center">
          { customFormObj.fieldNames.map((attribute, key) => {
            if (customFormObj.fieldTypes[key] !="file"){
              return(
              
              <div className="" key={key}>

                <Typography variant="h6" color="blue-gray" className="m-3">
                  {attribute}
                </Typography>
                {
                  
                }
                <Input
                  type={customFormObj.fieldTypes[key]}
                  size="lg"
                  placeholder={customFormObj.placeholders[key]}
                  className={`${customFormObj.fieldTypes[key]==="file" ?"bg-transpatrent border-none" :"!border-t-blue-gray-200  focus:!border-t-gray-900 bg-white"}`}
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              )
            }
            return null;

          })}          
        </div>

        <div className="w-5/8 p-4 justify-items-center">
          {customFormObj.fieldNames.map((attribute, key) => {
            if(customFormObj.fieldTypes[key]==="file"){
              return(
                <div key={key}>

                <Typography variant="h6" color="blue-gray" className="mb-3">
                  {attribute}
                </Typography>
                {
                  
                }
                <Input
                  type={customFormObj.fieldTypes[key]}
                  size="lg"
                  placeholder={customFormObj.placeholders[key]}
                  className={`${customFormObj.fieldTypes[key]==="file" ?"bg-transpatrent border-none" :"!border-t-blue-gray-200  focus:!border-t-gray-900 bg-white"}`}
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              )

            }
          })}
        </div>
        
      </div>
      <div className="w-1/2 p-4 flex flex-col justify-items-center">
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="w-1/2 mt-6" fullWidth>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
        </div>
    </Card>
    </div>
    </>
)
}

export default CustomForm;