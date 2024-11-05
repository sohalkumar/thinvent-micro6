"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MiniPCSection from "./MiniPC/MiniPCSection";
import ThinClientSection from "./ThinClient/ThinClientSection";
import BookDemoButton from "../UI/BookDemoButton";

export default function Devices() {
  const [selectedTab, setSelectedTab] = useState("mini_pc");
  const router = useRouter();
  return (
    <>
      <div>
        <div className="bg-primaryPurple sticky top-0 md:top-[6rem] grid grid-cols-2 z-[990] drop-shadow-2xl">
          <button
            onClick={() => {
              setSelectedTab("mini_pc");
              setTimeout(() => {
                router.push("#mini_pc");
              }, 500);
            }}
            className="drop-shadow-2xl"
          >
            <div
              className={`${
                selectedTab === "mini_pc" ? "bg-darkPurple" : ""
              } py-3 text-center rounded-r-full`}
            >
              Mini PC
            </div>
          </button>
          <button
            onClick={() => {
              setSelectedTab("thin_client");
              setTimeout(() => {
                router.push("#thin_client");
              }, 500);
            }}
          >
            <div
              className={`${
                selectedTab === "thin_client" ? "bg-darkPurple" : ""
              } py-3 text-center rounded-l-full `}
            >
              Thin Client
            </div>
          </button>
        </div>
        {selectedTab === "mini_pc" && <MiniPCSection />}
        {selectedTab === "thin_client" && <ThinClientSection />}
        <div className="w-fit mx-auto">
          <BookDemoButton />
        </div>
      </div>
    </>
  );
}
