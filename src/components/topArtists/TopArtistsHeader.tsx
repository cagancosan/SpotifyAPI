import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

export const TopArtistsHeader: React.FC = () => {
  return (
    <div className="flex flex-col bg-black bg-opacity-30 h-320">
      <Logo />
      <div className="flex flex-col items-start justify-end h-full mb-24 ml-4">
        <h1 className="ml-3 text-6xl text-white">Top Artists</h1>
        <div>
          <div className="mt-2 ml-4 text-2xl text-white">
            your most viewed artists
          </div>
        </div>

        <div className="flex flex-row ml-5 text-xs text-slate-100">
          <Link to={"/"}>
            <p>Profile</p>
          </Link>
          <p className="ml-2">/ Top Artists</p>
        </div>
      </div>
    </div>
  );
};
