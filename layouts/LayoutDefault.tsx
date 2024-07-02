import "./style.css";
import "./tailwind.css";
import React from "react";
import logoUrl from "../assets/keyboard.png";
import { Link } from "../components/Link.js";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-w-5xl m-auto w-dvw h-dvh">
      <Splash>{children}</Splash>
    </div>
  );
}

function Splash({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-full w-full text-dark-green" id="splash">
        <div className="container m-auto p-4 flex flex-col h-full justify-center relative">
          <h1 className="text-3xl md:text-6xl font-bold mb-8 md:mb-16 text-comfy">ComfyTyper</h1>
          <p className="text-xl text-mono">
            A calm and comfy typing experience to enjoy your keyboard while tracking WPM and accuracy.
            <br/><br/>
            <em>Coming soon...</em>
            {children}
          </p>
          <div className="absolute bottom-8">
            <p className="">By <a href="https://www.nullhax.com/" target="_blank">null_hax</a>.</p>
          </div>
        </div>
      </div>
    </>
  )
}

// function Sidebar({ children }: { children: React.ReactNode }) {
//   return (
//     <div
//       id="sidebar"
//       className="p-5 flex flex-col shrink-0 border-r-2 border-r-gray-200"
//     >
//       {children}
//     </div>
//   );
// }

// function Content({ children }: { children: React.ReactNode }) {
//   return (
//     <div id="page-container">
//       <div id="page-content" className="p-5 pb-12 min-h-screen">
//         {children}
//       </div>
//     </div>
//   );
// }

// function Logo() {
//   return (
//     <div className="p-5 mb-2">
//       <a href="/">
//         <img src={logoUrl} height={64} width={64} alt="logo" />
//       </a>
//     </div>
//   );
// }
