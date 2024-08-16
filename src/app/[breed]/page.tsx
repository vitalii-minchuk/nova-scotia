import getBreedByIdAction from "@/actions/getBreedByIdAction";
import { BreedCard } from "@/components/common/breed-card";
import { genericErrorMessage } from "@/constants";
import { EAnimalType, EAppSearchParamsKey } from "@/emuns";
import { isResponseTActionsGenericResponse } from "@/utils";

interface Props {
  params: {
    breed: string
  }
  searchParams: Record<string, string>
}

export default async function BreadPage({params: {breed}, searchParams}: Props) {
  const type = searchParams[EAppSearchParamsKey.TYPE]
  const breedData = await getBreedByIdAction(breed, type)

  const bredDetails = isResponseTActionsGenericResponse(breedData) ? null : breedData

if (!bredDetails) return <h2>{genericErrorMessage}</h2>

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <BreedCard
          id={bredDetails.id}
          key={bredDetails.id}
          url={bredDetails.url}
          width={bredDetails.width}
          height={bredDetails.height}
          breeds={bredDetails.breeds}
        />
        <pre id="json">{JSON.stringify(bredDetails, undefined, 2)}</pre>
      </main>
    );
  }
  