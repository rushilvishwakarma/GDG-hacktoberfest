import { DiscordLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const footerSocials = [
   {
      href: 'https://www.instagram.com/gdg.rait/',
      icon: <InstagramLogoIcon className="h-8 w-8" />,
   },
   // You can add more social links here if needed
   // {
   //    href: 'https://twitter.com/your_account',
   //    icon: <TwitterLogoIcon className="h-8 w-8" />,
   // },
   // {
   //    href: 'https://discord.com/your_account',
   //    icon: <DiscordLogoIcon className="h-8 w-8" />,
   // },
];

export function SiteFooter() {
   return (
      <footer>
         <div className="mx-auto w-full max-w-screen-xl px-8 py-16">
            <div className="flex flex-col items-start gap-8 md:flex-row md:justify-between">
               <div className="flex flex-col gap-4">
                  <Link href="/" className="flex items-center gap-2">
                     <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                        <img
                           src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-goog/contentbuilder/logo_dark_QmPdj9K.svg"
                           className="text-primary w-max"
                           alt="Logo"
                        />
                     </span>
                  </Link>
                  <p className="max-w-full text-gray-700 dark:text-gray-300">
                     Code, Create, Collaborate – Open Source for All!
                  </p>
               </div>
               <div className="flex space-x-5 mt-4 md:mt-0">
                  {footerSocials.map((social, index) => (
                     <Link
                        key={social.href} // Use href as the key for uniqueness
                        href={social.href}
                        className="flex items-center fill-gray-500 text-gray-500 hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600"
                     >
                        {social.icon}
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </footer>
   );
}
