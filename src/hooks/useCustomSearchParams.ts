import {useCallback} from 'react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import qs from 'qs';

interface IQueryParamsItem {
    key?: string;
    value?: string;
}

export const useCustomSearchParams = () => {
    const router = useRouter();
    const currentPath = usePathname();
    const searchParams = useSearchParams();


    const addQueryParam = useCallback(
        ({key, value}: IQueryParamsItem) => {
            const newParams = searchParams ? qs.parse(searchParams.toString()) : null;

            if (newParams && key && value) {
                newParams[key] = value;

                router.push(`${currentPath}?${qs.stringify(newParams)}`, {scroll: false});
            }
        },
        [currentPath, router, searchParams]
    );

    const removeQueryParam = useCallback(
        (param: string) => {
            const newParams = searchParams ? qs.parse(searchParams.toString()) : null;

            if (newParams) {
                delete newParams[param];

                router.replace(`${currentPath}?${qs.stringify(newParams)}`, {scroll: false});
            }
        },
        [currentPath, router, searchParams]
    );

    return {
        removeQueryParam,
        addQueryParam
    };
};