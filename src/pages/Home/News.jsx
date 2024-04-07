import { Link } from "react-router-dom";

const News = ({aNews}) => {
    const {title,image_url,details,_id} = aNews
  return (

    <div className="card w-full bg-base-100 my-1 border">
        <figure>
        <img
            src={image_url}
            alt="Shoes"
        />
        </figure>
        <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div>{
                details.length> 200 ? <p>{details.slice(0,200)} <Link className="text-blue-600 font-semibold" to={`/news/${_id}`}>Read more</Link></p> :
                <p>{details}</p>
            }</div>
        <div className="card-actions justify-end">
            <button className="btn btn-primary">Read</button>
        </div>
        </div>
    </div>

  );
};

export default News;
