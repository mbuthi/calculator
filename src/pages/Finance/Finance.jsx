import React from "react";
import Hero from "../../components/Hero/Hero";
import totalValImg from "../../assets/images/total-value-background.png"
import introBgImg from "../../assets/images/introduction-background.png"
import featuresBgImg from "../../assets/images/features-background.png"
import faqImg from "../../assets/images/faq-background.png"
import Button from "../../components/Button/Button";
import "./Finance.css"
const Finance = () => {
    return (
        <>
        <Hero />
        <div className="tallyAmmount" 
        style={{
            backgroundImage : `url(${totalValImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh"
            }}>
            <div className="tally">
                <div className="tallyText">
                    <span>Total supplied</span>
                </div>
                <div className="tallyNumber">
                    <h2>$188,717,579</h2>
                </div>
            </div>
            <div className="tally">
                <div className="tallyText">
                    <span>Total borrowed</span>
                </div>
                <div className="tallyNumber">
                    <h2>$67,902,492</h2>
                </div>
            </div>
        </div>
        <div className="savingsLoans"
        style={{
            backgroundImage : `url(${introBgImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",    
            }}
        >
            <div className="savings flex">
                <div className="sText left">
                    <span>Savings</span>
                </div>
                <div className="shText left">
                    <h3>Generate passive yield on your assets</h3>
                </div>
                <div className="sDescription left">
                    <p>
                        Crypto assets deposited into Tectonic earn attractive APYs based on a dynamic rate according to market demands. Earnings are available immediately with no lockup.
                    </p>
                </div>
                <div id="sButton">
                    <Button
                    name="Start saving" />
                </div>
            </div>
            <div className="loans flex">
                <div className="sText left">
                    <span>Instant loans</span>
                </div>
                <div className="shText left">
                    <h3>Instant liquidity at your fingertips</h3>
                </div>
                <div className="sDescription left">
                    <p>
                    Get an instant loan to unlock liquidity from idle crypto assets into Tectonic
                    </p>
                </div>
                <div id="sButton">
                    <Button
                    name="Start borrowing" />
                </div>
            </div>
        </div>
        <div className="features"
            style={{
                backgroundImage : `url(${featuresBgImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",  
                height: "100vh"  
                }}
            >
            <div className="featuresBody">
                <div className="featuresHeading">
                    <h2 className="textHeading2">
                        Keeping your funds safe is our top priority
                    </h2>
                </div>
                <div className="featureItems">
                    <div className="item">
                        <div className="itemImg">
                            <svg  viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[128px] h-[128px]"><path d="M44 29.8h19.4V18.5h-6v-4H28.6v4h-6v11.3H44z" stroke="#F4F499" stroke-width="7" stroke-miterlimit="10"></path><path d="M22.6 26.4H7.3V112h71.4V26.4H63.4" stroke="#F4F499" stroke-width="7" stroke-miterlimit="10"></path><path d="M29.3 77.5l6.6 6.6 29.8-29.8M25.3 73.5l-5-4.9" stroke="#F4F499" stroke-width="7" stroke-miterlimit="10"></path></svg>
                        </div>
                        <div className="itemHeading">
                            <h3 className="textHeading3">Audited smart contracts</h3>
                        </div>
                        <div className="itemText">
                            <p className="textBody">Our smart contracts have been audited by leading blockchain security auditors Slowmist.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemImg">
                            <svg  viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[128px] h-[128px]"><path d="M88.4 46.2V20.8L47.8 15 7.3 20.8v54.3L47.8 113l2.7-2.8 37.9-35.1v-22M7.3 42.6h81.1M47.8 15v98" stroke="#F4F499" stroke-width="7" stroke-miterlimit="10"></path></svg>
                        </div>
                        <div className="itemHeading">
                            <h3 className="textHeading3 fontBold">Audited smart contracts</h3>
                        </div>
                        <div className="itemText">
                            <p className="textBody">10% of the interest paid by borrowers goes to an insurance fund used in the event that undercollateralized loans are not properly liquidated.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemImg">
                            <svg  viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[128px] h-[128px]"><path d="M97.3 86.2V24.3h-90v79.4h90V93.2" stroke="#F4F499" stroke-width="7" stroke-miterlimit="10"></path><path d="M41.5 55.5l-19.1 8.3v.3l6.2 2.5 13.2 5.1M63.1 55.5l19.2 8.3v.3l-6.2 2.5-13.3 5.1M58 45.4L46.6 82.6" stroke="#F4F499" stroke-width="7" stroke-miterlimit="10"></path></svg>
                        </div>
                        <div className="itemHeading">
                            <h3 className="textHeading3">Audited smart contracts</h3>
                        </div>
                        <div className="itemText">
                            <p className="textBody">Interoperability and open source are among the founding principles of DeFi, which Tectonic is proudly committed to.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Finance