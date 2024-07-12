import { PIAZZA_DOMAIN } from "@/components/env"
import JoinWaitlist from "@/components/join-waitlist"
import OGImg from '@/public/images/opengraph-image.png'
import TwitterCardImag from '@/public/images/twitter-card-image.png'

export const metadata = {
    title: 'Piazza - Join Waitlist',
    description: 'Be the first user of the Piazza Browser',
    metadataBase: new URL(PIAZZA_DOMAIN)
}


export default function Home() {
    return (
        <>
            <JoinWaitlist />
        </>
    )
}