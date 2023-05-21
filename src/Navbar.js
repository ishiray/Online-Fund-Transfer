import './Navbar.css'

export const Navbar = () => {
    return (
        <header>
			<h3>LOGO</h3>
			<nav className='navbar'>
				<a href="/#">Transfer</a>
				<a href="/#">View Transactions</a>
				<a href="/#">View Balance</a>
				<a href="/#">Submit Complaints</a>
                <a href="/#">Logout</a>
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