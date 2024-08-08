import { Button } from "../ui/button";

export default function Cta() {
  return (
    <div className="padX padY container">
      <div className="bg-primary text-white rounded-lg py-8 px-6 max-md:px-4 flex max-lg:flex-col max-lg:gap-y-6 max-lg:items-start items-center justify-between">
        <div className="">
          <h4 className="text-3xl max-md:text-2xl">
            Start Your Real Estate Journey Today
          </h4>
          <p className="w-[60%] max-lg:w-[80%] max-sm:w-full leading-snug pt-2 text-sm">
            Your dream property is just a click away. Whether you&apos;re
            looking for a new home, a strategic investment, or expert real
            estate advice, KOA is here to assist you every step of the way.
          </p>
        </div>
        <Button variant="secondary" size="lg">
          Explore Properties
        </Button>
      </div>
    </div>
  );
}
