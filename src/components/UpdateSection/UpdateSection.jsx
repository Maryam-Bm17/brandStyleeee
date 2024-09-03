import React from 'react'
import './UpdateSection.css';
import UpdateBox from '../UpdateBox/UpdateBox';

export default function UpdateSection() {
    return (
        <>
            <section className="update">
                <div className="container">
                    <div className="row margin-right">

                        <UpdateBox className="update__item item1" img="./images/update22.png"/>



                        <UpdateBox className="update__item item2" img="./images/update44.png"/>


                    </div>
                </div>
            </section>
        </>
    )
}
