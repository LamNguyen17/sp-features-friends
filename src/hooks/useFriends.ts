import { useEffect, useState } from 'react';

type FetchFriends = () => Promise<any[]>

export const useFriends = (fetchFriends?: FetchFriends) => {
    const [friends, setFriends] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const load = async () => {
            setLoading(true)

            try {
                if (fetchFriends) {
                    const data = await fetchFriends()
                    setFriends(data)
                } else {
                    // fallback mock
                    setTimeout(() => {
                        setFriends([
                            { id: '1', name: 'Lam Nguyen' },
                            { id: '2', name: 'John Doe' },
                            { id: '3', name: 'John Doe' },
                            { id: '4', name: 'Lam Nguyen' },
                        ])
                        setLoading(false)
                    }, 500)
                    return
                }
            } finally {
                setLoading(false)
            }
        }

        load()
    }, [])

    return { friends, loading }
}
