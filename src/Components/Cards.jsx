import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import "./Card.css"

const Cards = () => {
    const [card, setCard] = useState([])
    const navigate = useNavigate()
    const getCard = async () => {
        try {
            const res = await axios.get("https://child.onrender.com/api/sciencefiction")
            console.log("res", res)
            setCard(res.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getCard()
    }, [])

    console.log("show card", card)

    return (
        <>
            <section className='card-summary py-5'>
                <div className='container '>
                    <div className="row gy-4 ">
                        {
                            card.map((item) => {
                                return (
                                    <>
                                        <div className="col-md-3" onClick={() => navigate(`/viewcard/${item._id}`)}>
                                            <div class="card" >
                                                <img src={`https://ik.imagekit.io/dev24/${item?.Image}`} className="card-img-top" />
                                                <div class="card-body d-grid">
                                                    <div className="title"><h4>{item.Title}</h4></div>
                                                    <button className='btn cardbtn'> {item.Status}</button>
                                                </div>
                                            </div>
                                        </div>


                                    </>
                                )
                            })
                        }

                    </div>
                </div >
            </section>

        </>

    )
}

export default Cards