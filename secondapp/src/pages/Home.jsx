import Footer from "../common/Footer"
import Header from "../common/Header"
import "./Home.css"
function Home() {
    return (
        <>
            <Header></Header>
            <section className="homeSection">
                <div>
                    <h1>Home Page</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dignissimos laboriosam et cupiditate unde rerum cum sapiente alias natus doloremque, quidem distinctio hic quaerat adipisci id, ex, quod dolor iste.
                    </p>
                </div>
            </section>
            <section className="productSection">
                <h1>Our Products</h1>
                <div className="productMid">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home

function ProductItem() {
    return (
        <div className="productItems">
            <img src="https://uptownskylla.in/wp-content/uploads/2022/09/01-1-2048x1497.jpg" alt="" />
            <h3>Iphone</h3>
        </div>
    )
}