'use client'

import { useEffect, useState } from "react";
import { PIAZZA_DOMAIN } from "./env";
import axios from "axios";
import ButtonRouteWaitlistBfLaunch1 from "./buttons/button-routeWaitlist_bfLaunch1";
import Image from "next/image";
import BottomBarImg from "@/public/images/bottom-bar.png"


export default function IntroBfLanch1() {
    const [emptyNum, setEmptyNum] = useState<number>(100)
    const [totalNum, setTotalNum] = useState<number>(100)
    useEffect(() => {
        axios.get(PIAZZA_DOMAIN + "/api/visit")
        axios.get(PIAZZA_DOMAIN + "/api/countWaitlist").then((res) => {
            const waitlistNum = res.data.count + 30
            let totalNum, emptyNum
            if (waitlistNum < 1000) {
                totalNum = Math.floor(waitlistNum / 100) * 100 + 100
                emptyNum = totalNum - waitlistNum
            } else {
                totalNum = Math.floor(waitlistNum / 1000) * 1000 + 1000
                emptyNum = totalNum - waitlistNum
            }
            console.log(res, waitlistNum, totalNum, emptyNum)
            setEmptyNum(emptyNum)
            setTotalNum(totalNum)
        })
    }, [])

    return (
        <section className="relative mt-[5rem] sm:mt-[7rem] ">
            {/* Intro content */}
            <div className="mx-auto max-w-6xl flex flex-col items-center align-center text-center px-5 md:px-10">
                <div className="md:mb-[3rem] max-md:mt-[5rem]">
                    <h1 className="max-sm:text-2xl md:text-6xl max-md:text-4xl font-extrabold leading-tighter tracking-tighter mb-[3rem] text-black" data-aos="zoom-y-out">
                        Showcase Your Talent,<br className="" /> Get Professional Critiques
                    </h1>
                    <div className="max-sm:text-lg md:text-3xl max-md:text-2xl text-gray-700 font-bold mb-[2rem] md:mb-[4rem]" data-aos="zoom-y-out">
                        Enhance your artistic abilities with<br className="md:hidden" /> expert feedback on your creations
                    </div>
                </div>
                <div className="text-sm md:text-xl text-base text-gray-700 mb-[3rem] md:mb-[5rem]" data-aos="zoom-y-out" data-aos-delay="300">The Art Critique Platform for Everyone is Coming Soon</div>
                <div data-aos="zoom-y-out" data-aos-delay="600">
                    <ButtonRouteWaitlistBfLaunch1 />
                </div>
            </div>
        </section >
    )
}