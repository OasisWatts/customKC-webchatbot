import OGImg from '@/public/images/opengraph-image.png'
import TwitterCardImag from '@/public/images/twitter-card-image.png'

export const metadata = {
  title: 'Piazza - Welcome to Piazza!',
  description: 'Write & Share Anything within Webpages on Piazza',
  metadataBase: new URL("https://piazza.run")
}

import IntroBfLanch1 from '@/components/intro-bflaunch1'
import Chatbot from '@/components/chatbot'

// const radialGradient = {
//   width: "100vw",
//   background:
//     "radial-gradient(farthest-side at bottom right,rgba(227, 143, 105, 0.5), transparent 50%),radial-gradient(farthest-side at  left,rgba(216, 183, 247, 0.5), transparent 50%),radial-gradient( farthest-corner at top right,rgba(227, 143, 105, 0.5), transparent 30%)"
// }
export default function Home() {
  return (
    <>
      <Chatbot />
    </>
  )
}
