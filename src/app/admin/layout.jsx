import Image from "next/image";
import SideBar from "./_components/SideBar/SideBar";
import { assets } from "../../../public/assets";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex flex-col w-full">
          <div className="flex justify-between px-3 w-full max-h-[68px] border border-black py-5">
            <h3 className="font-bold text-xl">Admin Panel</h3>
            <div>
              <Image
                src={assets.profile_icon}
                width={40}
                height={40}
                alt="image"
              />
            </div>{" "}
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
