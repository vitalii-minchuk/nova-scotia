'use server';

import { EAnimalType } from '@/emuns';
import type {TActionsGenericResponse, ICatDogResponse} from './types';
import { DEFAULT_ITEMS_PER_PAGE } from '@/constants';

export default async function getDogBreedsAction(
    limit?: number
): Promise<ICatDogResponse[] | TActionsGenericResponse> {
    try {
        const apiUrl = process.env.DOG_API_URL
        const key = process.env.DOG_API_KEY!
        const itemsPerPage = limit ?? DEFAULT_ITEMS_PER_PAGE
        const url = `${apiUrl}images/search?limit=${itemsPerPage}&has_breeds=true`

        const fetchData = async () => {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    ['x-api-key']: key
                }
            })

            return await response.json() as ICatDogResponse[]
        }

        const result = await fetchData();

        return result?.map(el => ({...el, type: EAnimalType.DOG}));
    } catch (error) {
        console.log(error);
        return {success: false, message: 'dbIssues'};
    }
}