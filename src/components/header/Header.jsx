import React, { useState } from "react";
import Canada from "../../assects/flag-canada.png";
import Language from "../../assects/icon-language.png";
import Logo from "../../assects/Logo.png";

import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
	
	return (
		<header className="header">
			<div className="trademark"></div>
			<nav className="nav">
				<div className="container">
					<div className="grid header_top alignment ">
						<div className="header_top-menu">
							<Link to="/notfound">About Us </Link>|
							<Link to="/notfound">Buy </Link>|
							<Link to="/notfound">Sell </Link>|
							<Link to="/notfound">FAQ </Link>|
							<Link to="/notfound">Contact Us </Link>|
							<Link to="/notfound">
								<img src={Canada} alt="" />{" "}
								<span>View Canada</span>
							</Link>
						</div>
						<div className="header_account">
							<div className="header_language">
								<img src={Language} alt="" />
								<select name="" id="languageSelect">
									<option value="">English</option>
									<option value="">Francais</option>
									<option value="">Deuthsch</option>
									<option value="">Italiano</option>
								</select>
								<svg
									className="icon-select"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 4 5"
								>
									<path
										fill="#343a40"
										d="M2 0L0 2h4zm0 5L0 3h4z"
									/>
								</svg>
							</div>
							<span className="signed-out">
								<Link to="/" className="signin">
									Sign In
								</Link>
								|
								<Link to="/notfound" className="register">
									Register
								</Link>
							</span>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="header_center alignment grid">
						<div className="header_center-left">
							<Link to="/">
								<img src={Logo} alt="" />
							</Link>
						</div>
						<div className="header_center-right">
							<div className="search-box">
								<input
									type="text"
									placeholder="Search Assets "
									className="search-input"
								/>
								<div>
									<i className="bx bx-search"></i>
								</div>
							</div>
							<a href="">Advanced Search</a>
						</div>
					</div>
				</div>
				<div className="header_bottom  container  grid ">
					<div className="header_bottom-menu alignment">
						<a href="">Shop By Category</a>
						<a href="">Location Search</a>
						<a href="">Closing Today</a>
						<a href="">New Listings</a>
						<a href="">View All</a>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
