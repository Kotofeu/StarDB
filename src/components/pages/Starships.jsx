import React from 'react'
import { useEffect, useState } from 'react'
import StarshipsList from '../StarshipsList'
import Servive from '../../API/Service'
import Title from '../UI/Title/Title'
import Selector from '../UI/Selector/Selector'
import Loader from '../UI/Loader/Loader'

export default function StarshipsPage() {
    const [starships, setStarships] = useState([]);
    const [selectedSort, setSelectedSort] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchStarship()
    }, [])
    async function fetchStarship() {
        try {
            setIsLoading(true)
            const response = await Servive.getAllStarships();
            setStarships([...response.data.results].sort((a, b) => a['name'].localeCompare(b['name'])))
            setSelectedSort('name');
        } catch (e) {

        } finally {
            setIsLoading(false)
        }
    }
    const sortList = (sort) => {
        setSelectedSort(sort);
        if (sort === 'name') {
            setStarships([...starships].sort((a, b) => a[sort].localeCompare(b[sort])))
        }
        else {
            setStarships([...starships].sort((a, b) => b[sort].localeCompare(a[sort], undefined, { numeric: true })))
        }
    }
    return (
        <section className='starships'>
            <div className='container'>
                <div className='starships__inner'>
                    <Title children='Starships' />
                    <div className='starships__selector'>
                        <h6 className='starships__sort-title'>Sort by:</h6>
                        <Selector
                            value={selectedSort}
                            onChange={sort => sortList(sort)}
                            defaultValue=''
                            options={[
                                { value: 'name', name: 'Name' },
                                { value: 'cost_in_credits', name: 'Cost' }
                            ]}
                        />
                    </div>
                    {isLoading
                        ? <Loader></Loader>
                        : <StarshipsList starships={starships}></StarshipsList>
                    }
                </div>
            </div>
        </section>)
}
