import { useParams } from "react-router-dom";
import productData from './productData'
import '../portofolio/portofolioDetail.css'
import test from '../../assets/portofolio/top-sosmed/DDS-Socmed-01_20240906-a.jpg'


const PortofolioDetail = () => {
    const {id} = useParams();
    return(
        <>
        <div className="detail__container">
           
            <div className="box-img">
                <img src={test}/>
            </div>
            <div className="detail__teks">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor suscipit, consectetur error dignissimos amet reprehenderit corrupti vitae, sed voluptatum debitis voluptatibus nihil. Alias accusamus debitis facere vero expedita minus incidunt culpa! Porro sit earum placeat cumque deserunt, mollitia velit! Nemo vel reiciendis voluptatum cumque odit dolore omnis ut eum assumenda quaerat excepturi, corporis, ducimus suscipit deleniti blanditiis, beatae consectetur ab ipsum dolor eius dignissimos? Magni eligendi doloribus officiis illo animi esse voluptas possimus. Ad sit enim eligendi autem voluptas recusandae rem quibusdam officiis quae cumque perspiciatis obcaecati ullam tempora qui, illum aut. Cupiditate suscipit error quos autem officia enim fugit commodi, deserunt sint quibusdam, voluptates, est dicta praesentium. Maxime repellat laborum cupiditate similique obcaecati soluta natus veniam id modi illo neque libero, voluptate recusandae sunt minus beatae iusto perferendis nobis dolorum sit impedit ducimus animi voluptas ratione. Nam placeat ipsam perferendis, voluptatem id aut incidunt sunt nemo! Voluptates nobis ratione veritatis velit mollitia ducimus eligendi maxime. Ab ipsum, corrupti enim amet inventore odit magnam rerum error obcaecati magni voluptatibus ipsa dignissimos? Ipsa mollitia veritatis quaerat molestias? Dolores quisquam quaerat impedit, aperiam quia corporis velit necessitatibus excepturi fuga placeat assumenda. Laborum ut non nesciunt a debitis? Velit aliquid maxime libero nulla.</p>
            </div>
        </div>
        </>
    )
}

export default PortofolioDetail;