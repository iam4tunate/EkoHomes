import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Bath, Bed, Send, Scaling, Sparkle, MapPin } from "lucide-react";

export default function HomeDetails() {
  return (
    <div className="container padY padX">
      <div className="grid grid-cols-2 max-md:grid-cols-1">
        <div className="">{/* div for the slider */}</div>
        <div className="">
          <div className="pb-8">
            <div className="flex flex-wrap gap-x-8 gap-y-1 items-center justify-between">
              <h4>Seaside Serenity Villa</h4>
              <p className="text-xl font-geist600">5,000,000</p>
            </div>
            <p className="flex items-start gap-x-1 pt-3 pb-3 text-sm">
              <MapPin size={15} className="text-primary mt-0.5" />
              <span>
                Gold Crest Plaza Ikota Lekki Lagos, Lekki, Lagos, Nigeria
              </span>
            </p>
            <p className="text-sm w-[90%] max-lg:w-full">
              Discover your own piece of paradise with the Seaside Serenity
              Villa. T With an open floor plan, breathtaking ocean views from
              every room, and direct access to a pristine sandy beach, this
              property is the epitome of coastal living.
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-4 pt-5">
              <div className="border rounded-lg py-2 px-4">
                <div className="flex items-end gap-x-1 pb-1">
                  <Bed className="text-primary w-5 h-5" />
                  <span className="text-[13px]">Bedrooms</span>
                </div>
                <span className="font-geist500">4</span>
              </div>
              <div className="border rounded-lg py-2 px-4">
                <div className="flex items-end gap-x-1 pb-1">
                  <Bath className="text-primary w-5 h-5" />
                  <span className="text-[13px]">Bathrooms</span>
                </div>
                <span className="font-geist500">4</span>
              </div>
              <div className="border rounded-lg py-2 px-4">
                <div className="flex items-end gap-x-1 pb-1">
                  <Scaling className="text-primary w-5 h-5" />
                  <span className="text-[13px]">Area</span>
                </div>
                <span className="font-geist500">
                  2,500 ft<sup className="text-[10px]">2</sup>
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <div className="font-geist500 pb-1">Features & Amenities</div>
            <div className="space-y-3">
              <div className="flex items-center gap-x-2 bg-accent py-3 px-2">
                <Sparkle
                  size={20}
                  className="text-xs fill-primary text-primary"
                />
                <span className="text-sm">
                  Expansive oceanfront terrace for outdoor entertaining
                </span>
              </div>
              <div className="flex items-center gap-x-2 bg-accent py-3 px-2">
                <Sparkle
                  size={20}
                  className="text-xs fill-primary text-primary"
                />
                <span className="text-sm">
                  Expansive oceanfront terrace for outdoor entertaining
                </span>
              </div>
              <div className="flex items-center gap-x-2 bg-accent py-3 px-2">
                <Sparkle
                  size={20}
                  className="text-xs fill-primary text-primary"
                />
                <span className="text-sm">
                  Expansive oceanfront terrace for outdoor entertaining
                </span>
              </div>
              <div className="flex items-center gap-x-2 bg-accent py-3 px-2">
                <Sparkle
                  size={20}
                  className="text-xs fill-primary text-primary"
                />
                <span className="text-sm">
                  Expansive oceanfront terrace for outdoor entertaining
                </span>
              </div>
              <div className="flex items-center gap-x-2 bg-accent py-3 px-2">
                <Sparkle
                  size={20}
                  className="text-xs fill-primary text-primary"
                />
                <span className="text-sm">
                  Expansive oceanfront terrace for outdoor entertaining
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-14 grid grid-cols-[40%_60%] gap-x-12 gap-y-8 max-lg:grid-cols-1">
        <div className="max-lg:w-[70%] max-sm:w-full">
          <img
            src="/public/images/stars-green.svg"
            alt="stars"
            className="w-12 max-sm:w-10 mb-1 max-sm:mb-0.5"
          />
          <h3>Inquire about Seaside Serenity Villa.</h3>
          <p className="leading-snug pt-2 text-[15px]">
            Ready to take the first step toward your dream property? Fill out
            the form below, and our real estate wizards will work their magic to
            find your perfect match.
          </p>
        </div>
        <div className="border-primary bg-accent rounded-xl px-12 max-md:px-8 max-sm:px-4 py-8">
          {/* default values will be inputed in almost all fields */}
          <form
            action=""
            className="grid grid-cols-2 max-sm:grid-cols-1 gap-y-6 gap-x-4">
            <div className="">
              <Label htmlFor="email">First Name</Label>
              <Input type="text" />
            </div>
            <div className="">
              <Label htmlFor="email">Last Name</Label>
              <Input type="text" />
            </div>
            <div className="">
              <Label htmlFor="email">Email</Label>
              <Input type="text" />
            </div>
            <div className="">
              <Label htmlFor="email">Phone</Label>
              <Input type="text" />
            </div>
            <div className="">
              <Label htmlFor="email">Selected Property</Label>
              <Input type="text" />
            </div>
            <div className="">
              <Label htmlFor="email">Location</Label>
              <Input type="text" />
            </div>
            <div className="col-span-2 max-sm:col-span-1">
              <Label htmlFor="email">Message</Label>
              <Textarea className="" />
            </div>
            <Button disabled size="lg" className="space-x-1">
              <Send size={17} />
              <span>Send</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
