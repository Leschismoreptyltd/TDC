import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
const CustomForm = (props) => {
    const title = props.formTitle;
    const titleMessage = props.formMessage;
    const customFormObj = props.customFormObj;
    const bgAndBorder = "file"? "bg-white":"bg-black"
return(
    <>
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        {title}
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        {titleMessage}
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          { customFormObj.fieldNames.map((attribute, key) => (
            <div key={key}>

                <Typography variant="h6" color="blue-gray" className="mb-3">
                  {attribute}
                </Typography>
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

          ))

          }
          {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
            {fieldName2}
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            {fieldName3}
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          /> */}
        </div>
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
        <Button className="mt-6" fullWidth>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
    </>
)
}

export default CustomForm;