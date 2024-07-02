"use client";
import {Charm, Roboto} from "next/font/google";
import "./Heading.css";
const roboto=Roboto({
    subsets: ["latin"],
    preload: true,
    weight: "700",
})
const charm =Charm({
    subsets: ["latin"],
    preload: true,
    weight: "700",
});
const Heading = ({heading,description}) => {
    return (
        <div className="flex flex-col items-center my-8">
            <h1 className={`${roboto.className} heading bg-white p-6 relative text-5xl font-bold text-center`}>{heading}</h1>
            {description && ( <p className={charm.className}>{description}</p>)}
        </div>
    );
}

export default Heading