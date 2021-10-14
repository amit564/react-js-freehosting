import { useLocation, useParams } from "react-router";

const Post=()=>{
    const {id}=useParams();
   const query=new URLSearchParams (useLocation().search);

    return(<>
            <h1>Post Page</h1>
            <p>ID is :{id}</p>
            <p>{query.get("first")}</p>
            </>
    )
}
export default Post;