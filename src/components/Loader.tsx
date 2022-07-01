import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Loader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LoaderProps {
  color?: string;
  className?: string;
}

export const Loader = ({
  color = 'white',
  className = 'inline',
}: LoaderProps) => (
  <div>
    <FontAwesomeIcon
      icon={faSpinner}
      spin={true}
      color={color}
      className={className}
    />
  </div>
);
