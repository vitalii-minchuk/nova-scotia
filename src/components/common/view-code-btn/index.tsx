'use client'

import { Button } from "@/components/ui/button"
import { DEFAULT_GIT_URL } from "@/constants"

export default function ViewCodeBtn() {
    const goToGit = () => {
        window?.open(DEFAULT_GIT_URL, '_blank')
    }

    return (
        <Button onClick={goToGit}>view code</Button>
    )
}
