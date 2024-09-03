import React from 'react';
import './HeaderSection.css';
import { Link } from 'react-router-dom';

export default function HeaderSection(props) {
  return (
    <>
      <div className="trending__header">
        <h2 className="treending__title">{props.title}</h2>
        <Link to={props.href} className='btn__link'>
        مشاهده همه
        </Link>

      </div>
    </>
  )
}
