import React from 'react'
import productData from './productData'
import '../portofolio/portofolio.css'
import { Link } from 'react-router-dom'
// import {db} from '../../../database/db.json'

const Portofolio = () => {
  return (
    <section className="portofolio">
        <h2 className="section__title">Portofolio</h2>
        <span className="section__subtitle"></span>
        <div className="portofolio__container">
            {
                productData.map((item) => {
                    return (
                        <>
                        <div className="content">
                            <div className="img-box">
                                <img src={item.img} alt={item.Title}/>
                                <div className="detail">
                                    <Link to={`/portofolio/${item.id}`}>                                  
                                      <h3>{item.Title}</h3>                                  
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Portofolio