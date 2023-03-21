import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>ECOMMERCE</h3>
            <div>
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Ordenadores</button>
            </div>
            <CartWidget />
        </nav>

    )
}
export default NavBar