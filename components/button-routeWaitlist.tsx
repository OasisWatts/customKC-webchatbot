export default function ButtonRouteWaitlist() {
    const gradientStyle = {
        backgroundImage: "linear-gradient(#fff, #fff), linear-gradient(45deg, #E38F69, #D8B7F7)",
        border: "2px solid transparent",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box"
    }
    return (
        <div>
            <a style={gradientStyle} className="btn md:w-lbtn md:h-lbtn rounded-lg md:rounded-2xl md:text-xl text-gray-600 mb-4 md:mb-0" href="/waitlist">Join the Wait List</a>
        </div>
    )
}