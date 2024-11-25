import { useParams } from "react-router-dom";

const PortofolioDetail = () => {
    const {id} = useParams();
    return(
        <>
            <div className="portofolioDetail">
                <h2>Portofolio Details {id}</h2>
            </div>
        </>
    )
}

export default PortofolioDetail;