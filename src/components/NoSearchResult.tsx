import { Button } from './ui/button';

type NoSearchResultProps = {
  setPriceRange: React.Dispatch<React.SetStateAction<string>>;
  setLga: React.Dispatch<React.SetStateAction<string>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function NoSearchResult({
  setPriceRange,
  setLga,
  setSearchTerm,
  setSearchValue,
}: NoSearchResultProps) {
  function handleClearFilters() {
    setPriceRange('');
    setLga('');
    setSearchTerm('');
    setSearchValue('');
  }
  return (
    <div className='max-w-md mx-auto text-center padY padX'>
      <img
        src='/images/not-found.png'
        alt='Home not found'
        className='w-[8rem] mx-auto object-cover'
      />
      <h4>Sorry, we couldn't find any homes that match your search.</h4>
      <div className='w-fit mx-auto text-left pt-3'>
        <p className='text-[15px] pb-1 font-geist600'>
          Here are a few things you can try:
        </p>
        <ul className='text-sm space-y-1'>
          <li className='before:bg-primary before:w-1.5 before:h-1.5 before:inline-block before:rounded-full flex items-center gap-x-1'>
            Adjust your search filters
          </li>
          <li className='before:bg-primary before:w-1.5 before:h-1.5 before:inline-block before:rounded-full flex items-center gap-x-1'>
            Check the spelling of your search term
          </li>
        </ul>
      </div>
      <div className='p-3 space-x-2'>
        <Button
          size='sm'
          className='font-medium tracking-wide'
          onClick={handleClearFilters}>
          Clear all filters
        </Button>
      </div>
    </div>
  );
}
