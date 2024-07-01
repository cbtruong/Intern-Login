import React from "react";
import "./footer.css";
import GovernmentSurplus from "../../assects/GovernmentSurplus.png";
import ConsumerSurplus from "../../assects/ConsumerSurplus.png";
import MachinerySurplus from "../../assects/MachinerySurplus.png";
import PropertySurplus from "../../assects/PropertySurplus.png";
import RetailSurplus from "../../assects/RetailSurplus.png";
import SurplusAggregator from "../../assects/SurplusAggregator.png";

const Footer = () => {
	return (
		<div className="footer-wrapper  ">
			<div className="footer-content grid alignment">
				<div className="footer-more">
					<div className="more-frame">
						<p>Get to Know Us</p>
						<ul>
							<li>
								<a href="">Careers</a>
							</li>
							<li>
								<a href="">About GovDeals</a>
							</li>
							<li>
								<a href="">About Liquidity Services</a>
							</li>
							<li>
								<a href="">In The News</a>
							</li>
							<li>
								<a href="">Blog</a>
							</li>
						</ul>
					</div>
					<div className="more-frame">
						<p>Sell With Us</p>
						<ul>
							<li>
								<a href="">How To Sell</a>
							</li>
							<li>
								<a href="">Become A Seller</a>
							</li>
						</ul>
					</div>
					<div className="more-frame">
						<p>Buy From Us</p>
						<ul>
							<li>
								<a href="">How To Buy</a>
							</li>
							<li>
								<a href="">Why Buy</a>
							</li>
							<li>
								<a href="">Store Directory</a>
							</li>
						</ul>
					</div>
					<div className="more-frame">
						<p>Need Help?</p>
						<ul>
							<li>
								<a href="">Advanced Search</a>
							</li>
							<li>
								<a href="">Contact Us</a>
							</li>
							<li>
								<a href="">VPAT (PDF)</a>
							</li>
							<li>
								<a href="">Financing</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-right">
					<p>Liquidity Services Brands</p>
					<div className="footer-services">
						<div className="service">
							<img src={SurplusAggregator} alt="" />
							<a href="">Surplus Aggregator</a>
						</div>
						<div className="service">
							<img src={RetailSurplus} alt="" />
							<a href="">Retail Surplus</a>
						</div>
						<div className="service">
							<img src={PropertySurplus} alt="" />
							<a href="">Property Surplus</a>
						</div>
						<div className="service">
							<img src={MachinerySurplus} alt="" />
							<a href="">Machinery Surplus</a>
						</div>
						<div className="service">
							<img src={GovernmentSurplus} alt="" />
							<a href="">Government Surplus</a>
						</div>
						<div className="service">
							<img src={ConsumerSurplus} alt="" />
							<a href="">Consumer Surplus</a>
						</div>
					</div>
					<div className="footer-contacts ">
						<div className="contact">
							<p>Subscribe</p>
							<p>Follow Us</p>
						</div>
						<div className="contact">
							<span>Manage Preferences</span>
							<div className="contact-icons"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
