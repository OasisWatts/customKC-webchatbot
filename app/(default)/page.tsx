import OGImg from '@/public/images/opengraph-image.png'
import TwitterCardImag from '@/public/images/twitter-card-image.png'

export const metadata = {
  title: 'Piazza - Welcome to Piazza!',
  description: 'Write & Share Anything within Webpages on Piazza',
  metadataBase: new URL(PIAZZA_DOMAIN)
}

import { PIAZZA_DOMAIN } from '@/components/env'
import IntroBfLanch1 from '@/components/intro-bflaunch1'
import Wow1 from '@/components/wow1'
import Users1 from '@/components/users1'
import CloseBfLaunch1 from '@/components/close-bflaunch1'

// const radialGradient = {
//   width: "100vw",
//   background:
//     "radial-gradient(farthest-side at bottom right,rgba(227, 143, 105, 0.5), transparent 50%),radial-gradient(farthest-side at  left,rgba(216, 183, 247, 0.5), transparent 50%),radial-gradient( farthest-corner at top right,rgba(227, 143, 105, 0.5), transparent 30%)"
// }
export default function Home() {
  return (
    <>
      <IntroBfLanch1 />
    </>
  )
}
