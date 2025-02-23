"use client";

import { IKImage } from "imagekitio-next";
// ✅ Yeh ek blueprint hai, jo batata hai ki ek object ka format kya hoga.
// 1️⃣ TypeScript type (interface) → Sirf structure batata hai
type ImageType = {
    path: string;
    w? : number;
    h? : number;
    alt: string;
    className? : string;
    tr?: boolean;

};


const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

if(!urlEndpoint) {
    throw new Error('Error: please Add urlEndpoint to .env or .env.local')
}

const Image = ({path , w , h , alt , className , tr} : ImageType) =>{
    return(
        <IKImage
        urlEndpoint={urlEndpoint}
        path = {path}
        {...(tr
            ? {transformation :[{width : `${w}` , height : `${h}`}]}
            : {width : w , height : h }
        )}

        lqip = {{active: true , quality : 20 }}
         alt = {alt}
         className={className}
        
        
        
        />
    )
}

export default Image;



// ✅ Component reusable hai Next.js + ImageKit ke liye.
// ✅ Performance optimized hai (lqip → Low-Quality Image Placeholder).
// ✅ Conditional transformations allow karta hai better flexibility ke liye.