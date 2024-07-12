import { PIAZZA_DOMAIN } from "@/components/env"
import ToDiscord from "@/components/to-discord"
import OGImg from '@/public/images/opengraph-image.png'
import TwitterCardImag from '@/public/images/twitter-card-image.png'

export const metadata = {
    title: 'Piazza - Join Discord Server',
    description: 'Get the latest development news and share your proposals!',
    metadataBase: new URL(PIAZZA_DOMAIN)
}


export default function Home() {
    return (
        <>
            <ToDiscord />
        </>
    )
}