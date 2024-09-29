import ClientSection from '~/components/landing/client-section'
import HeroSection from '~/components/landing/hero-section'

import Particles from '~/components/ui/particles'
import { SphereMask } from '~/components/ui/sphere-mask'

export default async function Page() {
   return (
      <>

         <SphereMask />

         <Particles
            className="absolute inset-0 -z-10"
            quantity={50}
            ease={70}
            size={0.05}
            staticity={40}
            color="#ffffff"
         />
      </>
   )
}
