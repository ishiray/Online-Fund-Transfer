import './Navbar.css'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <header>
			<h3>TrustTransact</h3>
			<nav className='navbar'>
				<Link to = '/transfer'>Transfer</Link>
				<Link to = '/viewTransactions'>View Transactions</Link>
				<Link to = '/balance'>View Balance</Link>
				<Link to = '/submitComplaint' >Submit Complaints</Link>
                <Link to = '/'>Logout</Link>
				{/* <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button> */}
			</nav>
			{/* <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button> */}
		</header>
    )
}