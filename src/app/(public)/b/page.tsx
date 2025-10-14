import type { Metadata } from 'next'
import ClientPage from './[id]/ClientPage'


export const metadata: Metadata = {
    title: 'Blocks',
}

export default function BlocksPage() {
    return <ClientPage/>
}
