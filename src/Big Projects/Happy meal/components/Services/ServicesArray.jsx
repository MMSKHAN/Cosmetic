import blow from "./imgs/blowout.jpg"
import Ola from "./imgs/ola.jpg"
import retouch from "./imgs/retouch.jpg"

// import arrow from "./imgs/arrow.jpg";
// import{ArrowDownRightCircleFill} from ""
import { ArrowDownRightCircleFill } from 'react-bootstrap-icons'
const ServicesArray= [
    {
        id:"01",
        pic:blow,
        title:"Blowout",
        text:"Shampoo and blow dray. if you are looking to celebrate your special day with us.please note we have only 5 stylists",
        icon:<ArrowDownRightCircleFill className="col" style={{fontSize:"3rem",color:"#d59a9a",margin:"3" }} />
    ,btn:"Read More"
    },
    {
        id:"02",
        pic:Ola,
        title:"Olaplex",
        text:"OLAPLEX works to repair broken hair bonds. if you are looking to enjoy your special with us. Your are welcome.",
        icon:<ArrowDownRightCircleFill className="cole" style={{fontSize:"3rem",color:"#d59a9a",margin:"3" }}/>
        ,btn:"Read More"
    },
    {
        id:"03",
        pic:retouch,
        title:"Retouch",
        text:"In its simplest form, a blowout is the art of drying hair after a wash to achieve a smooth and sleek look, style and feel.",
        icon:<ArrowDownRightCircleFill className="col"  style={{fontSize:"3rem",color:"#d59a9a",margin:"3", }}/>
        ,btn:"Read More"
    }
]
export default ServicesArray