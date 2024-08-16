import Image from "next/image"
import Link from "next/link"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EAppSearchParamsKey } from "@/emuns"

interface Props {
    url?: string
    width?: number
    height?: number
    id?: string
    breeds?: any
    type?: number
    isLink?: boolean
}

export const BreedCard = ({url, width, height, id, breeds, type, isLink = false}: Props) => {
    if (!url || !width || !height || !id) return null

    const name = breeds?.[0].name ?? ''

    return (
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>
            {isLink && <Link href={{pathname: id, query: { [EAppSearchParamsKey.TYPE]: String(type)}}}>
              View Details
            </Link>}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
        <Image className=" w-full" src={url} width={width} height={height} alt={id ?? ''} />
        </CardContent>
      </Card>
    )
}
