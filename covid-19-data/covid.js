import React from 'react'
import './covid.css';
import { useEffect, useState } from 'react';

const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {

            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0])
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);


    return (
        <>
            <section className='page_background'>
                <p className='live_logo'>  🔴LIVE</p>
                <h2 className='header'>COVID-19 CORONAVIRUS TRACKES !</h2>

                <div className='main_div'>

                    <div className='card div_1'>
                        <div className='card__main'>
                            <div className='card__inner'>
                                <p className='card__name'><span className='total'>OUR</span>  COUNTRY</p>
                                <p className='card__total card__small'>INDIA</p>

                            </div>
                        </div>
                    </div>



                    <div className='card div_2'>
                        <div className='card__main'>
                            <div className='card__inner'>
                                <p className='card__name'><span className='total'>TOTAL</span>  RECOVERED</p>
                                <p className='card__total card__small'>{data.recovered}</p>

                            </div>
                        </div>
                    </div>



                    <div className='card div_3'>
                        <div className='card__main'>
                            <div className='card__inner'>
                                <p className='card__name'><span className='total'>TOTAL</span> CONFIRMED</p>
                                <p className='card__total card__small'> {data.confirmed}</p>

                            </div>
                        </div>
                    </div>
                </div>




                <div className='main_div'>

                    <div className='card div_4'>
                        <div className='card__main'>
                            <div className='card__inner'>
                                <p className='card__name'><span className='total'>TOTAL</span> DEATH</p>
                                <p className='card__total card__small'> {data.deaths}</p>

                            </div>
                        </div>
                    </div>


                    <div className='card div_5'>
                        <div className='card__main'>
                            <div className='card__inner'>
                                <p className='card__name'><span className='total'>TOTAL</span> ACTIVE</p>
                                <p className='card__total card__small'>{data.active}</p>

                            </div>
                        </div>
                    </div>


                    <div className='card  div_6'>
                        <div className='card__main'>
                            <div className='card__inner'>
                                <p className='card__name'><span className='total'>LAST</span> UPDATED</p>
                                <p className='card__total card__small'> {data.lastupdatedtime }</p>

                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}
export default Covid;