import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";

export default function Custom404(){

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000);
    })

    return (
        <div>
            <p>Redirecting...</p>
        </div>
    )
}
