import React from 'react'
import productData from './productData'
import '../portofolio/portofolio.css'
import { Link } from 'react-router-dom'
import Test from '../../assets/portofolio/top-sosmed/about-transformed.png'

const Portofolio = () => {
  return (
    <section className="portofolio">
        <h2 className="section__title">Portofolio</h2>
        <span className="section__subtitle"></span>

        <div className="img__con"> 
            <div className="box__hero">
                <div className="detail_hero">
                    <div className="teks__hero">
                        <p className='title__hero'>David Digital Solution</p>
                        <p className='title__hero'>Grow Your Bussines!</p>
                        <p className='subtitle__hero'> David Digital Solution adalah agensi media sosial multi-platform yang didedikasikan untuk membantu UMKM bersaing di era digital.</p>
                    </div>
                    <img src={Test} className="img__hero" />
                </div>
            </div>

        </div>
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