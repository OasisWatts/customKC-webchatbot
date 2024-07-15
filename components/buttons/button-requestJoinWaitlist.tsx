export default function ButtonRequestJoinWaitlist({ requestJoinWaitlist }: { requestJoinWaitlist: any }) {
    const gradientStyle = {
        backgroundImage: "linear-gradient(45deg, #E38F69, #D8B7F7)",
        backgroundSize: "cover"
    }
    return (
        <div style={gradientStyle} className="text-darkviolet btn w-full rounded-lg mb-4 md:mb-0 font-semibold cursor-pointer max-md:w-full" onClick={requestJoinWaitlist}>
            Get Free Trial
        </div>
    )
}