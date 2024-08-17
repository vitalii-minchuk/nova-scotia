import getCatBreedsAction from '@/actions/getCatBreedsAction';
import getDogBreedsAction from '@/actions/getDogBreedsAction';
import { ICatDogResponse } from '@/actions/types';
import { BreedCard } from '@/components/common/breed-card';
import { BreedSearch } from '@/components/common/breed-search';
import { EAppSearchParamsKey } from '@/emuns';
import { isResponseTActionsGenericResponse, shuffleTwoArrays } from '@/utils';

interface Props {
  searchParams?: Record<string, string>;
}
export default async function HomePage({ searchParams }: Props) {
  const search = searchParams?.[EAppSearchParamsKey.SEARCH];
  const breedsData = await Promise.all([
    getDogBreedsAction(),
    getCatBreedsAction(),
  ]);

  const dogBreeds = isResponseTActionsGenericResponse(breedsData[1])
    ? []
    : breedsData[1];
  const catBreeds = isResponseTActionsGenericResponse(breedsData[0])
    ? []
    : breedsData[0];

  const breeds = shuffleTwoArrays(dogBreeds, catBreeds) as ICatDogResponse[];
  const filteredBreeds = search
    ? breeds.filter((el) =>
        el.breeds.some((breed) =>
          breed.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      )
    : breeds;

  return (
    <div className='flex flex-col gap-6'>
      <BreedSearch />
      <div className='grid-auto-columns-1/2 md:grid-auto-columns-1/3 grid grid-cols-2 gap-2 md:grid-cols-3'>
        {filteredBreeds?.map((el) => (
          <BreedCard
            id={el.id}
            key={el.id}
            url={el.url}
            width={el.width}
            height={el.height}
            breeds={el.breeds}
            type={el.type}
            isLink
          />
        ))}
      </div>
    </div>
  );
}
