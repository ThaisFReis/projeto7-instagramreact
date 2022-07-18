import Content from "./Content";
import Footer from "./Footer";

function Body(){
    return (
        <div className="body">
            <div className="container-body">
                <Content />
                <Footer />
            </div>
        </div>
    )
}

export default Body