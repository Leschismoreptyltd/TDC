import{j as e,b as r,r as i}from"./index-Dlf2L7qx.js";import{H as c}from"./HomePageHeading-kPn10dka.js";const x=a=>{const o=a.formTitle,n=a.formMessage,t=a.customFormObj;return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex w-full justify-center",children:e.jsxs(r.Card,{color:"transparent",shadow:!1,children:[e.jsx(c,{heading:o,size:3}),e.jsx(r.Typography,{color:"black",className:"mt-1 font-normal",children:n}),e.jsxs("div",{className:"flex mx-6 mt-8 mb-2 w-full border-white border-2 p-4 rounded-xl justify-center",children:[e.jsx("div",{className:"mb-1 w-3/8 gap-6 justify-center",children:t.fieldNames.map((l,s)=>t.fieldTypes[s]!="file"?e.jsxs("div",{className:"",children:[e.jsx(r.Typography,{variant:"h6",color:"blue-gray",className:"m-3",children:l}),e.jsx(r.Input,{type:t.fieldTypes[s],size:"lg",placeholder:t.placeholders[s],className:`${t.fieldTypes[s]==="file"?"bg-transpatrent border-none":"!border-t-blue-gray-200  focus:!border-t-gray-900 bg-white"}`,labelProps:{className:"before:content-none after:content-none"}})]},s):null)}),e.jsx("div",{className:"w-5/8 p-4 justify-items-center",children:t.fieldNames.map((l,s)=>{if(t.fieldTypes[s]==="file")return e.jsxs("div",{children:[e.jsx(r.Typography,{variant:"h6",color:"blue-gray",className:"mb-3",children:l}),e.jsx(r.Input,{type:t.fieldTypes[s],size:"lg",placeholder:t.placeholders[s],className:`${t.fieldTypes[s]==="file"?"bg-transpatrent border-none":"!border-t-blue-gray-200  focus:!border-t-gray-900 bg-white"}`,labelProps:{className:"before:content-none after:content-none"}})]},s)})})]}),e.jsxs("div",{className:"w-1/2 p-4 flex flex-col justify-items-center",children:[e.jsx(r.Checkbox,{label:e.jsxs(r.Typography,{variant:"small",color:"gray",className:"flex items-center font-normal",children:["I agree the",e.jsx("a",{href:"#",className:"font-medium transition-colors hover:text-gray-900",children:" Terms and Conditions"})]}),containerProps:{className:"-ml-2.5"}}),e.jsx(r.Button,{className:"w-1/2 mt-6",fullWidth:!0,children:"sign up"}),e.jsxs(r.Typography,{color:"gray",className:"mt-4 text-center font-normal",children:["Already have an account?"," ",e.jsx("a",{href:"#",className:"font-medium text-gray-900",children:"Sign In"})]})]})]})})})},b=()=>{const a="Sign Up",o="Nice to meet you! Enter your details to register with The Drag Cartel.",s={fieldNames:["Name:","Alias:","About You:","Email:","Cell Number:","Instagram Handle:","TikTok Username:","Facebook Username:","Profil Picture:","Album Pictures:"],fieldTypes:["text","text","text","email","phone","text","text","text","file","file"],placeholders:["John/Jane Doe","Alias","name@mail.com","123 456 7890"]},m="Join TDC",[d,f]=i.useState(null),[u,h]=i.useState([]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-center my-12",children:e.jsx(c,{heading:m,size:5})}),e.jsx(x,{formTitle:a,formMessage:o,customFormObj:s,profilePicture:d,albumPictures:u,setProfilePictures:f,setAlbumPictures:h})]})};export{b as default};
