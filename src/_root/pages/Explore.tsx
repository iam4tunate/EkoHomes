import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MapPin, Search, Wallet } from 'lucide-react';
import { HomeCard, Loader } from '@/components/shared';
import { useFilterHomes } from '@/lib/react-query/queries';
import { Models } from 'appwrite';
import { LGAs } from '@/lib/constants';
import { useState } from 'react';
import NoSearchResult from '@/components/NoSearchResult';

export default function Explore() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [state, setState] = useState<string>('Lagos');
  const [lga, setLga] = useState<string>('');
  const [priceRange, setPriceRange] = useState<string>('');

  const { data: homes, isPending: isLoading } = useFilterHomes({
    searchTerm,
    state,
    lga,
    priceRange,
  });
  console.log(homes);
  return (
    <div className='pt-14'>
      <div className='bg-accent pb-24'>
        <div className='container padX'>
          <form
            onSubmit={(e) => e.preventDefault()}
            className='-translate-y-8 -mb-8 padX'>
            <div className='relative flex items-center bg-accent px-4 pt-4 w-[70%] max-lg:w-full mx-auto rounded-t-lg h-12'>
              <Input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className='w-full py-6 pr-[13rem] max-sm:pr-[8rem] max-lg:pr-[11rem] h-12'
                placeholder='Please enter the name of the home'
              />
              <div className='absolute right-4 flex items-center'>
                {searchValue && (
                  <p
                    onClick={() => {
                      setSearchTerm('');
                      setSearchValue('');
                    }}
                    className='pr-3 text-sm font-geist500 text-destructive cursor-pointer'>
                    clear
                  </p>
                )}
                <Button
                  disabled={!searchValue}
                  onClick={() => setSearchTerm(searchValue)}
                  className='flex items-center gap-x-1 h-12 border-none disabled:opacity-70'>
                  <Search size={15} />
                  <span className='max-sm:hidden'>Search</span>
                </Button>
              </div>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-y-4 gap-x-4 bg-accent rounded-lg max-lg:rounded-t-none px-4 pb-3 pt-5 w-fit mx-auto'>
              <Select value={state} onValueChange={() => setState('Lagos')}>
                <SelectTrigger className='w-[200px] max-sm:w-full max-md:w-[250px] flex items-center justify-between'>
                  <div className='flex items-center'>
                    <MapPin size={17} className='mr-2 text-primary' />
                    <SelectValue placeholder='State' />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='Lagos'>Lagos</SelectItem>
                </SelectContent>
              </Select>
              <Select value={lga} onValueChange={(value) => setLga(value)}>
                <SelectTrigger className='w-[200px] max-sm:w-full max-md:w-[250px] flex items-center justify-between'>
                  <div className='flex items-center'>
                    <MapPin size={17} className='mr-2 text-primary' />
                    <SelectValue placeholder='Select LGA' />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {LGAs.map((lga) => (
                    <SelectItem key={lga.id} value={lga.name}>
                      {lga.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={priceRange}
                onValueChange={(value) => setPriceRange(value)}>
                <SelectTrigger className='w-[200px] max-sm:w-full max-md:w-[250px] flex items-center justify-between'>
                  <div className='flex items-center'>
                    <Wallet size={17} className='mr-2 text-primary' />
                    <SelectValue placeholder='Select price range' />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='1000000'>Less than 1 million</SelectItem>
                  <SelectItem value='10000000'>Less than 10 million</SelectItem>
                  <SelectItem value='20000000'>Less than 20 million</SelectItem>
                  <SelectItem value='30000000'>Less than 30 million</SelectItem>
                  <SelectItem value='40000000'>Less than 40 million</SelectItem>
                  <SelectItem value='50000000'>Less than 50 million</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>

          {isLoading ? (
            <div className='mt-16 flex items-center justify-center'>
              <Loader color='green' size={50} />
            </div>
          ) : !isLoading && homes?.total === 0 ? (
            <NoSearchResult setPriceRange={setPriceRange} setLga={setLga} setSearchTerm={setSearchTerm} setSearchValue={setSearchValue}/>
          ) : (
            <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-6 gap-y-8 pt-12'>
              {homes?.documents.map((home: Models.Document) => (
                <HomeCard key={home.$id} home={home} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* <div className='pt-14 container padX'>
        <SectionHeading
          icon='green'
          title="Didn't find what you're looking for yet?"
          paragraph="Ready to take the first step toward your dream property? Fill out
            the form below, and our real estate wizards will work their magic to
            find your perfect match. Don't wait; let's embark on this
            exciting journey together."
        />
        <div className='border-primary bg-accent rounded-xl px-12 max-md:px-8 max-sm:px-4 py-8'>
          <form
            action=''
            className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-y-6 gap-x-4'>
            <div className=''>
              <Label htmlFor='email'>First Name</Label>
              <Input type='text' />
            </div>
            <div className=''>
              <Label htmlFor='email'>Last Name</Label>
              <Input type='text' />
            </div>
            <div className=''>
              <Label htmlFor='email'>Email</Label>
              <Input type='text' />
            </div>
            <div className=''>
              <Label htmlFor='email'>Phone</Label>
              <Input type='text' />
            </div>
            <div className=''>
              <Label htmlFor='email'>Preferred State</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Pick State' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='light'>Light</SelectItem>
                  <SelectItem value='dark'>Dark</SelectItem>
                  <SelectItem value='system'>System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className=''>
              <Label htmlFor='email'>Preferred LGA</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Pick LGA' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='light'>Light</SelectItem>
                  <SelectItem value='dark'>Dark</SelectItem>
                  <SelectItem value='system'>System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className=''>
              <Label htmlFor='email'>Preferred City</Label>
              <Input type='text' />
            </div>
            <div className=''>
              <Label htmlFor='email'>Property Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Pick Type' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='light'>Light</SelectItem>
                  <SelectItem value='dark'>Dark</SelectItem>
                  <SelectItem value='system'>System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className=''>
              <Label htmlFor='email'>No of Bathrooms</Label>
              <Input type='text' />
            </div>
            <div className=''>
              <Label htmlFor='email'>No of Bedrooms</Label>
              <Input type='text' />
            </div>
            <div className=''>
              <Label htmlFor='email'>Budget</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Pick Range' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='light'>Light</SelectItem>
                  <SelectItem value='dark'>Dark</SelectItem>
                  <SelectItem value='system'>System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className=''>
              <Label htmlFor='email'>Preferred Contact Method</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Pick Method' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='light'>Whatsapp</SelectItem>
                  <SelectItem value='dark'>Phone call</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='col-span-4 max-lg:col-span-3 max-md:col-span-2 max-sm:col-span-1'>
              <Label htmlFor='email'>Message</Label>
              <Textarea className='' />
            </div>
            <Button
              disabled
              size='lg'
              className='col-start-4 max-lg:col-start-3 max-md:col-start-2 max-sm:col-start-1 flex items-center gap-x-1'>
              <Send size={17} />
              <span>Send</span>
            </Button>
          </form>
        </div>
      </div> */}
    </div>
  );
}
