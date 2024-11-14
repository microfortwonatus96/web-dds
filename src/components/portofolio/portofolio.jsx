import React from 'react'
import productData from './productData'
import '../portofolio/portofolio.css'
import { useState } from 'react'
import {AiFillCloseCircle} from "react-icons/ai"

const Portofolio = () => {
    const [detail, setDetail] = useState([]);
    const [close, setClose] = useState(false);
    const detailPage = (Portofolio) => {
        setDetail([{...Portofolio}])
        setClose(true)
    }
  return (
    <section className="portofolio section" id="portofolio">
        <h2 className="section__title">Portofolio</h2>
        <span className="section__subtitle"></span>
        {
            close ?
        
        <div className="detail__container">
            <div className="detail__content">
                <button className='close' onClick={() => setClose(false)}><AiFillCloseCircle /></button>
                
                {
                    detail.map((x) =>{
                        return (
                            <>
                            <div className="detail__info">
                                <div className="img-box">
                                    <img src={x.img}></img>
                                    <img src={x.img}></img>
                                    <img src={x.img}></img>
                                </div>
                                <div className="portofolio__detail">
                                    <h2>{x.Title}</h2>
                                    <p>{x.des}</p>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div> :null
        }

        <div className="portofolio__container">
            {
                productData.map((item) => {
                    console.log('cek', item);
                    return (
                        <>
                            <div className="box">
                                <div className="content">
                                    <div className="img-box">
                                        {/* <img src={item.img}></img> */}
                                        <img src={item.img}></img>
                                        
                                    </div>
                                    <div className="detail">
                                        <div className="info">
                                            <h3>{item.Title}</h3>
                                        </div>
                                        <button onClick={() => detailPage(item)}>View</button>
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