import {ArrowDownRightCircleFill} from "react-bootstrap-icons";
import p1 from "./img/p1.jpg"
import p2 from "./img/p2.jpg"
import p3 from "./img/p3.jpg"
const BlogArray= [

    {
        pic:p1,
        title:"PARLOUR JOURNAL",
        subtext:"SPA",
        text:"Our blog is intended to help answer your hair related questions and provide information about healthy hair choices and products.",
        icon:<ArrowDownRightCircleFill className=" col" style={{fontSize:"3rem",color:"#d59a9a",margin:"3" }} />
    },
    {
        pic:p2,
        title:"REFELXOLOGY SKY",
        subtext:"RELAX",
        text:"Refelxology believe that these reflex points,pressing them creats real benefits for the person's health. if you have any question please email.",
        icon:<ArrowDownRightCircleFill className=" col" style={{fontSize:"3rem",color:"#d59a9a",margin:"3" }}/>
    },
    {
        pic:p3,
        title:"MEDITATION SUN ",
        subtext:" YOUGA",
        text:"Keep your body and mind it pure and clean for the soul to reside in. Our Spa classes in areas.Create the personal benefits for person's health.",
        icon:<ArrowDownRightCircleFill className=" col" style={{fontSize:"3rem",color:"#d59a9a",margin:"3", }}/>
    }  

]

export default BlogArray