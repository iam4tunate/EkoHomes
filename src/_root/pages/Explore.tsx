import PropertyCard from "@/components/shared/PropertyCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { House, MapPin, Proportions, Search, Send, Wallet } from "lucide-react";

export default function Explore() {
  return (
    <main className="py-14">
      <div className="bg-accent pb-14">
        <div className="container padX">
          <form action="" className="-translate-y-8 -mb-8 padX">
            <div className="relative flex items-center bg-accent px-4 py-4 w-[70%] max-lg:w-full mx-auto rounded-t-lg">
              <Input
                className="w-full py-6 pr-[14rem] max-sm:pr-[5rem] max-lg:pr-[12rem]"
                placeholder="Search For A Property"
              />
              <Button
                disabled
                className="absolute right-6 flex items-center gap-x-1">
                <Search size={15} />
                <span className="max-sm:hidden">Find Property</span>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-4 bg-accent rounded-lg max-lg:rounded-t-none px-4 pb-3 w-fit mx-auto">
              <Select>
                <SelectTrigger className="w-[200px] max-sm:w-full max-md:w-[250px] flex items-center justify-between">
                  <div className="flex items-center">
                    <MapPin size={17} className="mr-2 text-primary" />
                    <SelectValue placeholder="Location" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[200px] max-sm:w-full max-md:w-[250px] flex items-center justify-between">
                  <div className="flex items-center">
                    <House size={17} className="mr-2 text-primary" />
                    <SelectValue placeholder="Property type" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[200px] max-sm:w-full max-md:w-[250px] flex items-center justify-between">
                  <div className="flex items-center">
                    <Wallet size={17} className="mr-2 text-primary" />
                    <SelectValue placeholder="Pricing range" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[200px] max-sm:w-full max-md:w-[250px] flex items-center justify-between">
                  <div className="flex items-center">
                    <Proportions size={17} className="mr-2 text-primary" />
                    <SelectValue placeholder="Property size" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-6 gap-y-8 pt-12">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>
      </div>

      <div className="pt-14 container padX">
        <SectionHeading
          icon="green"
          title="Didn't find what you're looking for yet?"
          paragraph="Ready to take the first step toward your dream property? Fill out
            the form below, and our real estate wizards will work their magic to
            find your perfect match. Don't wait; let's embark on this
            exciting journey together."
        />
        <div className="border-primary bg-accent rounded-xl px-12 max-md:px-8 max-sm:px-4 py-8">
          <form
            action=""
            className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-y-6 gap-x-4">
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
              <Label htmlFor="email">Preferred State</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Pick State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="">
              <Label htmlFor="email">Preferred LGA</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Pick LGA" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="">
              <Label htmlFor="email">Preferred City</Label>
              <Input type="text" />
            </div>
            <div className="">
              <Label htmlFor="email">Property Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Pick Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="">
              <Label htmlFor="email">No of Bathrooms</Label>
              <Input type="text" />
            </div>
            <div className="">
              <Label htmlFor="email">No of Bedrooms</Label>
              <Input type="text" />
            </div>
            <div className="">
              <Label htmlFor="email">Budget</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Pick Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="">
              <Label htmlFor="email">Preferred Contact Method</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Pick Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Whatsapp</SelectItem>
                  <SelectItem value="dark">Phone call</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-4 max-lg:col-span-3 max-md:col-span-2 max-sm:col-span-1">
              <Label htmlFor="email">Message</Label>
              <Textarea className="" />
            </div>
            <Button
              disabled
              size="lg"
              className="col-start-4 max-lg:col-start-3 max-md:col-start-2 max-sm:col-start-1 flex items-center gap-x-1">
              <Send size={17} />
              <span>Send</span>
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
