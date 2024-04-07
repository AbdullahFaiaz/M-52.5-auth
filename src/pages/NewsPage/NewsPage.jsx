import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useParams } from 'react-router-dom';


const NewsPage = () => {
    const {id} =useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">{id}</div>
                <div className=""><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default NewsPage;