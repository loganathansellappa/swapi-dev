import React, {ReactElement, useCallback, useMemo} from "react";
import {useParams, useNavigate, Link} from 'react-router-dom';
import Error from "./Error";
import {useGetResourceQuery} from "../services/People";
import {capitalize} from "../utils/HelperUtils";
import {Loader} from "./Loader";
import {AnyResourceType, ResourceType} from "../@types/People";
import "./PersonInfo.scss";

export const PersonInfo = () => {
    const { id = 1, type = 'people'} = useParams();
    const navigate = useNavigate();
    const { data: person, error, isLoading, isFetching } = useGetResourceQuery(`${type}/${id}`)

    if (isLoading || isFetching) {return <Loader size={100} />}

    if (error) {return <Error  />}

    const getProperties =(person: ResourceType) => {
        let props = []
        let urls = ['planets', 'species', 'starships', 'vehicles', 'homeworld', 'films', 'people', 'residents', 'characters']
        let peopleType = ['people', 'residents', 'characters']
        for (const key in person) {
            if([...urls, ...peopleType].includes(key) && person[key as keyof ResourceType]) {
                let links = []
                if(Array.isArray(person[key as keyof ResourceType])) {
                    let resourceKey  = peopleType.includes(key) ? 'people' : key
                    person[key as keyof ResourceType].forEach<AnyResourceType>((resourceUrl: string, index: number) =>
                        links.push(<Link className={'resourceLink'} to = {`/resource/${resourceKey}/${resourceUrl.match(/\d/g).join('')}`}>{capitalize(key)}{index+1}</Link>))
                } else {
                    links.push(<Link className={'todo'} to = {`/resource/${key}/${person[key as keyof ResourceType].match(/\d/g).join('')}`} />)
                }
                props.push(<div className="propContainer">
                    <div className='label'>{capitalize(key)}</div>
                    <div className='value'>{links}</div>
                </div>)
            } else {
                props.push(<div className="propContainer">
                    <div className='label'>{capitalize(key)}</div>
                    <div className='value'>{person[key as keyof ResourceType]}</div>
                </div>)
            }
        }
        return props
    }

    return(
        <div className='container'>
            <div className='topLinks'>
                <button  onClick={() =>  navigate(-1)}> Previous Page </button>
                <button onClick={() =>  navigate('/')}>Back to Home</button>
            </div>
            <div className="personDetail">{getProperties(person as unknown as ResourceType)}</div>
        </div>
    )
}