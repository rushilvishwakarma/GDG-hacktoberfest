import { DiscordLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'



export function SiteFooter() {
   return (
      <footer>
         <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
            <div className="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
               <div className="mb-12 flex flex-col gap-4">
                  <Link href="/" className="flex items-center gap-2 ">
                     <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
               <img
                        src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-goog/contentbuilder/logo_dark_QmPdj9K.svg"
                        className="text-primary size-6 w-max "
                     />
                     </span>
                  </Link>
                  <p className="max-w-full">Code, Create, Collaborate – Open Source for All!</p>
               </div>

            </div>

            
            </div>
         {/*   <SiteBanner /> */}
      </footer>
   )
}
