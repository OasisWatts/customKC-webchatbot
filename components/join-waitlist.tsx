'use client'


import ButtonRequestJoinWaitlist from "@/components/buttons/button-requestJoinWaitlist"
import ButtonRouteHome from "@/components/buttons/button-routeHome"
import { useState } from "react";
import Checkbox from "./ui/checkbox";
import axios from "axios";
import { PIAZZA_DOMAIN } from "./env";

export default function JoinWaitlist() {
    const [emailtext, setEmailText] = useState<string>("")
    const [toggleAlertEmailFormat, setToggleAlertEmailFormat] = useState<boolean>(false)
    const [toggleAlertAgreement, setToggleAlertAgreement] = useState<boolean>(false)
    const [checkPrivacyPolicy, setCheckPrivacyPolicy] = useState<boolean>(false)
    const [checkReceiveEmail, setCheckReceiveEmail] = useState<boolean>(false)

    const handleOnChangeEmail = (e: any) => {
        setEmailText(e.currentTarget.value)
    }

    const handleCheckPrivacyPolicy = (e: any) => {
        setCheckPrivacyPolicy(e.currentTarget.checked)
    }

    const handleCheckReceiveEmail = (e: any) => {
        setCheckReceiveEmail(e.currentTarget.checked)
    }

    const requestJoinWaitlist = () => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(emailtext)) {
            setToggleAlertEmailFormat(false)
            if (checkPrivacyPolicy && checkReceiveEmail) { // request
                setToggleAlertAgreement(false)
                axios.get(PIAZZA_DOMAIN + "/api/waitlist?e=" + emailtext).then((res) => {
                    window.location.href = "/"
                })
            } else {
                setToggleAlertAgreement(true)
            }
        } else {
            setToggleAlertEmailFormat(true)
        }
    }
    return (
        <section className="relative">
            <div className="pt-28 pb-40 mx-5 md:mx-auto max-w-2xl" data-aos="zoom-y-out">
                <div className="w-full mb-5">
                    <label htmlFor="email" />
                    <input id="email" type="email" value={emailtext} onChange={handleOnChangeEmail} className="form-input rounded-lg w-full text-gray-800" placeholder="Enter your email address" required />
                </div>
                <div className="mb-2">
                    <div className="inline mr-3 text-gray-700 md:text-base text-sm">
                        I'd like to reveive emails from Piazza.
                    </div>
                    <Checkbox checkboxId="1" checkValue={checkReceiveEmail} handleCheck={handleCheckReceiveEmail} />
                </div>
                <div className="mb-2">
                    <div className="inline mr-3 text-gray-700 md:text-base text-sm">
                        I consent to Piazza processing my personal data in accordance with our <a href="/privacyPolicy" className="text-brown font-bold">Privacy Policy.</a>
                    </div>
                    <Checkbox checkboxId="2" checkValue={checkPrivacyPolicy} handleCheck={handleCheckPrivacyPolicy} />
                </div>
                <div className="h-5 mb-5 text-red-500 text-base">
                    {toggleAlertEmailFormat ? "ⓘ Wrong email format" : ""}
                    {toggleAlertAgreement ? "ⓘ You must agree to all items" : ""}
                </div>
                <div className="md:mx-auto content-start flex flex-col md:flex-row md:justify-between md:items-center">
                    <ButtonRequestJoinWaitlist requestJoinWaitlist={requestJoinWaitlist} />
                </div>
            </div>
        </section>
    )
}