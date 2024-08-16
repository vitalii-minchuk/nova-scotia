'use server';

import type {TActionsGenericResponse, ICatDogResponse} from './types';
import { EAnimalType } from '@/emuns';

export default async function getBreedByIdAction(
    id: string,
    type?: number | string
): Promise<ICatDogResponse | TActionsGenericResponse> {
    if (typeof type === 'undefined') return {success: false, message: 'dbIssues'}

    try {
        const apiUrl = Number(type) === EAnimalType.DOG ? process.env.DOG_API_URL : process.env.CAT_API_URL
        const key = Number(type) === EAnimalType.DOG ? process.env.DOG_API_KEY! : process.env.CAT_API_KEY!
        const url = `${apiUrl}images/${id}`

        const fetchData = async () => {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    ['x-api-key']: key
                }
            })

            return await response.json() as ICatDogResponse
        }

        const result = await fetchData();

        return result;
    } catch (error) {
        console.log(error);
        return {success: false, message: 'dbIssues'};
    }
}