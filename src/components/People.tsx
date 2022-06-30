import React, {useMemo, useState} from "react";
import {ResourceResponse, ResourceType} from "../@types/People";
import {Person} from "./Person";
import Error from "./Error";
import {useGetResourceQuery} from '../services/People'
import {Loader} from "./Loader";
import "./People.scss";


const People: React.FunctionComponent  = () => {
    const [page, setPage] = useState<number>(1);
    const [search, setSearch] = useState('');
    const [data, setData] = useState<ResourceResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const updateSearch = (val: string) => {
        setPage(1)
        setSearch(val)
    }

    const peopleData =  useGetResourceQuery(`people?search=${search}&page=${page}`)
    const planetsData =  useGetResourceQuery(`planets?search=${search}&page=${page}`, {skip: !search.length})
    const shipData = useGetResourceQuery(`starships?search=${search}&page=${page}`, {skip: !search.length})

    useMemo(() => {
        let responses: ResourceResponse = {
            count: 0,
            next: null,
            previous: null,
            results: []
        }
        let validData = search.length ?  [peopleData, planetsData, shipData] : [peopleData]
        for (const { currentData:data, error:err, isLoading, isFetching } of validData) {
            console.log(err, 'err')
            if(isLoading || isFetching && !loading) {
                setLoading(true)
            }
            if(err && !error) {
                setLoading(error)
            }
            if(data) {
                if(data?.next) {
                    responses.next = data.next
                }
                setLoading(false)
                setError(false)
                responses.results = [...responses.results, ...data.results]
            }
        }
        setData(responses as ResourceResponse)
    }, [peopleData.data, planetsData.data, shipData.data])

    if (error) {return <Error />}

    return (
        <div className='PeopleContainer'>
            <div className="search">
                <input className={'searchInput'} value={search} placeholder="Search People/Planet/StarShips.." onChange={(e) =>  updateSearch((e.target as HTMLInputElement).value)}/>
            </div>
            {
                loading ?  <Loader size={100} className={'inline'}/> :
                <div className="people">
                    {data?.results?.map((person: ResourceType) => (
                        <Person key={person.url} person={person} />
                    ))}
                </div>
            }
                <div className="paginate">
                    <button  onClick={() => setPage((old) => Math.max(old - 1, 1))}  disabled={page === 1}>
                        {loading ? <Loader size={10} /> : 'Previous'}
                    </button>
                    <button onClick={() => setPage((old) => old + 1)} disabled={!data?.next} >
                        {loading ? <Loader size={10} />: 'Next'}
                    </button>
                </div>
        </div>
    );
};

export default People;
