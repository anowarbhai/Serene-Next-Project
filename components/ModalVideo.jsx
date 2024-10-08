import Image from "next/image";
import ReactPlayer from "react-player";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

export default function ModalVideo() {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <div className="flex justify-center items-center gap-2 uppercase cursor-pointer">
                <button className="h-[50px] w-[50px] relative bg-white flex justify-center items-center rounded-full"><Image src="./assets/home/play.svg" alt="" width="36" height="36" /></button>
                <span className="text-lg font-primary">Watch Video</span>
            </div>
        </DialogTrigger>
        <DialogContent>
            <ReactPlayer 
                width={"100%"}
                height={"100%"}
                url="https://www.youtube.com/watch?v=Er5a7snyQKM"
                muted
            />
        </DialogContent>
    </Dialog>
  )
}
