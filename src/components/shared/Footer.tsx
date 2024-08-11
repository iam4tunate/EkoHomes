import { Link } from "react-router-dom";
import Logo from "./Logo";
import {
  FacebookIcon,
  InstagramIcon,
  Mail,
  MapPin,
  Phone,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary pt-12 pb-8">
      <div className="container padX text-white text-opacity-90">
        <div className="grid grid-cols-[2fr_1fr_2fr_1fr] max-lg:grid-cols-2 max-sm:grid-cols-1 gap-y-8 max-lg:gap-x-24 gap-x-16 mb-12">
          <div>
            <div className="w-fit">
              <Logo bg />
            </div>
            <p className="text-sm w-full pt-4">
              At KOA, we don&apos;t just sell properties; we create homes,
              curate communities, and build dreams.
            </p>
          </div>
          <div className="">
            <span className="text-lg max-sm:text-base font-geist500">Navigation</span>
            <ul className="pt-3 space-y-5 flex flex-col text-sm">
              <Link to="/" className="underline w-fit">
                Home
              </Link>
              <Link to="/about" className="underline w-fit">
                About
              </Link>
              <Link to="/services" className="underline w-fit">
                Services
              </Link>
              <Link to="/explore" className="underline w-fit">
                Explore
              </Link>
              <Link to="/contact" className="underline w-fit">
                Contact
              </Link>
            </ul>
          </div>
          <div className="">
            <span className="text-lg max-sm:text-base font-geist500">Contact Info</span>
            <div className="grid grid-cols-[auto_1fr] items-start gap-x-2 pt-3 pb-3">
              <MapPin size={20} />
              <div className="flex flex-col gap-y-2.5">
                <p className="text-sm">
                  29 Awolowo Avenue, Opposite Domino’s Pizza, Old Bodija Estate,
                  Ibadan.
                </p>
                <p className="text-sm">
                  3B Wendy Way, Tarneit VIC 3029, Melbourne, Australia.
                </p>
              </div>
            </div>
            <span className="flex items-center gap-x-5 pt-3 pl-4">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YoutubeIcon />
            </span>
          </div>
          <div className="">
            <span className="text-lg max-sm:text-base font-geist500">Get In Touch</span>
            <div className="flex items-start gap-x-2 pt-3 pb-5">
              <Phone size={20} />
              <ul className="text-sm space-y-1">
                <li>(+234) 803 498 3792</li>
                <li>(+234) 813 325 5577</li>
                <li>(+61) 420 216 441</li>
              </ul>
            </div>
            <div className="flex items-start gap-x-2">
              <Mail size={20} />
              <span className="text-sm">hello@propertyspace.ng</span>
            </div>
          </div>
        </div>
        <hr className="opacity-70 mb-5" />
        <div className="flex max-lg:flex-col gap-y-3 items-center max-lg:items-start justify-between text-sm max-sm:text-xs">
          <span className="">
            Copyright © 2024 Propertyspace. All Rights Reserved
          </span>
          {/* <div className="flex items-center flex-wrap gap-x-2">
            <span>Privacy Policy</span> | <span>Terms & Conditions</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
