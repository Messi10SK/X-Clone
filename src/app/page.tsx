"use client";



import { IKImage, IKVideo, ImageKitProvider, IKUpload, ImageKitContext } from "imagekitio-next";
import Image from "./components/Image";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const Homepage = () =>{
  return (
    <div className=" relative w-[600px] h-[600px]">
      Homepage
     
      <IKImage urlEndpoint={urlEndpoint} path="public/general/post.jpeg" width={600} height={600} alt="" />
      <Image path = "public/general/post.jpeg" w={600} h={600} alt="" />
    </div>
  )
}

export default Homepage;