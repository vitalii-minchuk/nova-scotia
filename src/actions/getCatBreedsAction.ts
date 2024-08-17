'use server';

import type { TActionsGenericResponse, ICatDogResponse } from './types';
import { EAnimalType } from '@/emuns';
import { DEFAULT_ITEMS_PER_PAGE } from '@/constants';

export default async function getCatBreedsAction(
  limit?: number
): Promise<ICatDogResponse[] | TActionsGenericResponse> {
  try {
    const apiUrl = process.env.CAT_API_URL;
    const key = process.env.CAT_API_KEY!;
    const itemsPerPage = limit ?? DEFAULT_ITEMS_PER_PAGE;
    const url = `${apiUrl}images/search?limit=${itemsPerPage}&has_breeds=true`;

    const fetchData = async () => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          ['x-api-key']: key,
        },
      });
      const result = (await response.json()) as ICatDogResponse[];

      return result;
    };

    const result = await fetchData();

    return result?.map((el) => ({ ...el, type: EAnimalType.CAT }));
  } catch (error) {
    console.log(error);
    return { success: false, message: 'dbIssues' };
  }
}
