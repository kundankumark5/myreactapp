// import "./banner.css";
// import Button from "./button";
import React, { useState } from "react";
import Button from "./button";

// function Banner({head,para}){
//     return(
//         <div className="Banner">
//             <div className='Banner__text'><h1>{head}</h1><p>{para}</p>
//              <Button label="Schedule a Demo" className="button"></Button>
//             </div>
//             <div className="img"><img src="/png/j.png" alt='bannerImage' width='100%' height='100%' /></div>

//         </div>
//     );
// }
// export default Banner;

// import "./banner.css";
// import Button from "./button";

// function Banner({head,para}){
//     return(
//         <div className="Banner">
//             <div className='Banner__text'><h1>{head}</h1><p>{para}</p>
//              <Button label="Schedule a Demo" className="button"></Button>
//             </div>
//             <div className="img"><img src="/png/j.png" alt='bannerImage' width='100%' height='100%' /></div>

//         </div>
//     );
// }
// export default Banner;

// function Abc(){

// }

const Abc = () => {
  const [count, setCount] = useState(1);

  const abc = () => {
    setCount((prevState) => prevState * 344);
  };

  return (
    <>
      {count}
      <button onClick={abc}>click</button>
    </>
  );
};

export default Abc;
