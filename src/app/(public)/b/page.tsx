import type { Metadata } from 'next'
import ClientPage from './ClientPage'


export const metadata: Metadata = {
    title: 'Blocks',
}

export default function BlocksPage() {
    return <ClientPage/>
}
