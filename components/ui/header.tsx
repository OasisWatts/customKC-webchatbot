import PiazzaLogo from '@/components/ui/logo-piazza';
import ButtonRouteWaitlistBfLaunch1 from '../buttons/button-routeWaitlist_bfLaunch1';

export default function Header() {
  return (
    <div className="z-50 bg-white flex flex-row justify-between fixed top-0 h-[4rem] w-full border-b-2 border-gray-300">
      <div className="my-auto ml-5">
        <PiazzaLogo height="35" gotoHome />
      </div>
      {/* <div className="my-auto mr-5">
        <ButtonRouteWaitlistBfLaunch1 />
      </div> */}
    </div>
  )
}
