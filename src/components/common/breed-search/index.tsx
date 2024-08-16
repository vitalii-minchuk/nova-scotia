"use client"

import { ChangeEventHandler, useEffect, useState } from 'react';
import {useDebounce} from 'use-debounce';

import { Input } from '@/components/ui/input';
import { DEFAULT_SEARCH_DEBOUNCE_DELAY } from '@/constants';
import { useCustomSearchParams } from '@/hooks';
import { EAppSearchParamsKey } from '@/emuns';
import { useSearchParams } from 'next/navigation';

export const BreedSearch = () => {
    const [search, setSearch] = useState('')

    const [debouncedSearch] = useDebounce(search, DEFAULT_SEARCH_DEBOUNCE_DELAY);
    const {addQueryParam, removeQueryParam} = useCustomSearchParams()
    const searchParams = useSearchParams()
    const initialSearch = searchParams?.get(EAppSearchParamsKey.SEARCH)

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearch(event.target.value)
    }

    useEffect(() => {
        debouncedSearch
            ? addQueryParam({key: EAppSearchParamsKey.SEARCH, value: debouncedSearch})
            : removeQueryParam(EAppSearchParamsKey.SEARCH)
    }, [addQueryParam, debouncedSearch, removeQueryParam]);

    useEffect(() => {
        initialSearch && setSearch(initialSearch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <Input
        value={search}
        onChange={handleChange}
        className=' max-w-[400px]'
        placeholder='Search...'
    />
  )
}
