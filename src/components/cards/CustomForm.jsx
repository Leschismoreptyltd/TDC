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
    {/*Form container div */}
    <div className="w-3/5 p-10 border-slate-400 border-2 rounded-xl mobile:w-full">

      <Card color="transparent" shadow={false}>
        {/* <HomePageHeading heading ={title} size={3}/> */}
        <Typography
        variant="h1"
        className="font-bolder text-black">
          {title}
        </Typography>
        <Typography color="black" className="mt-1 font-normal">
          {titleMessage}
        </Typography>
        <div className="flex mobile:block mobile:w-full" >{/*className="flex mx-6 mt-8 mb-2 w-full border-white border-2 p-4 rounded-xl justify-center bg-green-900">*/}
          <div className="mb-1 w-7/12 gap-6 justify-center bg-inherit mobile:w-full">
            { customFormObj.fieldNames.map((attribute, key) => {
              if (customFormObj.fieldTypes[key] !="file"){
                return(
                
                <div className="bg-inherit" key={key}>

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

          <div className="w-5/12 p-4 justify-items-center mobile:w-full">
            {customFormObj.fieldNames.map((attribute, key) => {
              if(customFormObj.fieldTypes[key]==="file"){
                return(
                  <div className="bg-inherit" key={key}>

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
            <div class="relative w-full min-w-[200px] mt-3">
              <textarea
                class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-200 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "></textarea>
              <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[16px] peer-focus:font-bold peer-focus:leading-loose peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-transparent peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-transparent peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                About Me.
              </label>
            </div>
          </div>        
        </div>
        <div className="w-1/2 p-4 flex flex-col justify-items-center mobile:w-full">
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal mobile:w-full mobile:items-stretch mobile:block"
              >
                I agree to the
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
         {/*  <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography> */}
          </div>
      </Card>
    </div>
    </>
)
}

export default CustomForm;