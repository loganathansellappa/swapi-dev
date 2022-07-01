import React from 'react';
import { AnyResourceType, ResourceType } from '../@types/People';
import { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../states/People';
import { Link } from 'react-router-dom';
import { faClover, faHeart } from '@fortawesome/free-solid-svg-icons';
import { capitalize } from '../utils/HelperUtils';
import './Person.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PersonProps {
  person: ResourceType;
}

export const Person = ({ person }: PersonProps) => {
  const dispatch = useDispatch();
  const isFavourite = useSelector((state: RootState) =>
    state.favoritePeople.favourites?.find((p) => p.url === person.url)
  );

  const resourceId = person.url?.match(/\d/g).join('');
  const setFavourite = () => {
    if (isFavourite) {
      dispatch(remove(person.url));
      return;
    }
    dispatch(add(person));
  };

  const typeInfo = (data: AnyResourceType) => {
    if (data.episode_id) {
      return 'Film';
    }
    if (data.rotation_period) {
      return 'Planet';
    }
    if (data.manufacturer) {
      return 'StarShip';
    }
    if (data.vehicle_class) {
      return 'Vehicle';
    }
    return 'People';
  };

  return (
    <div className="personInfo">
      <Link className={'name'} to={`resource/people/${resourceId}`}>
        <h3>{person.name}</h3>
        <p>{typeInfo(person)}</p>
      </Link>

      <div className="propContainer">
        <div className="props">
          <div className="label">Gender</div>
          <div className="value">{capitalize(person.gender)}</div>
        </div>
        <div className="props">
          <div className="label">Height</div>
          <div className="value">{person.height || 'N/A'}</div>
        </div>
      </div>
      <div className="favourite" onClick={setFavourite}>
        <div>Mark favourite</div>
        <div>
          <FontAwesomeIcon
            className={'favouriteIcon'}
            icon={faHeart}
            color={isFavourite ? 'red' : 'white'}
          />
        </div>
      </div>
    </div>
  );
};
