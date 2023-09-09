import React from "react";
import Hero from "../../components/Hero/Hero";
import totalValImg from "../../assets/images/total-value-background.png"
import introBgImg from "../../assets/images/introduction-background.png"
import featuresBgImg from "../../assets/images/features-background.png"
import faqImg from "../../assets/images/faq-background.png"
import communityImg from "../../assets/images/community-background.png"
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
        <div className="faqs"
        style={{
            backgroundImage : `url(${faqImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",  
            height: "100vh"  
            }}
        >
            <div className="faqBody p5020">
                <div className="faqHeading">
                    <h2 className="textHeading2 fontBold mb2">
                        Frequently asked questions
                    </h2>
                </div>
                <div className="mb2">
                    <h3>What is Tectonic?</h3>            
                </div>
                <div className="mb2">
                    <p className="textBody">
                    Tectonic is a decentralized non-custodial algorithmic money market protocol. Users can deposit assets to earn passive income or borrow funds to unlock liquidity in their assets.
                    </p>
                </div>
                <div className="mb2">
                    <h3>How does Tectonic work?</h3>            
                </div>
                <div className="mb2">
                    <p className="textBody">
                    Funds deposited by users are provided as liquidity to borrowers, who may borrow at variable interest rates. Tectonic's smart contracts adjust these rates based on each market's utilization rates.
                    </p>
                </div>
                <div className="mb2">
                    <h3>What is TONIC?</h3>            
                </div>
                <div className="mb2">
                    <p className="textBody">
                    TONIC is Tectonic's protocol token with two key use cases: governance and staking into the Community Insurance Pool to secure the protocol and earn more rewards.
                    </p>
                </div>
            </div>
        </div>
        <div className="community"
        style={{
            backgroundImage : `url(${communityImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",  
            height: "70vh"  
            }}
        >
            <div className="communityBody ">
                <div className="mb2">
                    <h2 className="textHeading2">Join the community</h2>
                </div>
                <div className="mb2">
                    <p className="textBody">Learn more about Tectonic, stay up to date on all the latest protocol news and connect with others in the community.</p>
                </div>
                <div className="socials">
                    <a href="" className="twitter" target="_blank">
                        <svg width="1em" height="1em" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.486 18.658L0 1.5h10.682l8.325 10.605L27.9 1.548h5.883L21.85 15.728 36 33.751H25.35l-9.014-11.468-9.624 11.436H.797l12.69-15.061zm13.416 11.914L6.55 4.679h2.578l20.327 25.893h-2.553z" fill="#F4F499"></path></svg>
                    </a>
                    <a href="" className="telegram" target="_blank">
                        <svg width="1em" height="1em" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.44 8.53L21.61.66A1.049 1.049 0 0123 1.87l-3.48 16.44c-.03.15-.1.29-.19.42-.35.48-1.03.59-1.51.23l-5.2-3.82-2.65 2.71a.883.883 0 01-1.47-.35l-1.88-6.07L1.5 9.92a.755.755 0 01-.49-.45.73.73 0 01.43-.94zm8.21 4.08l9.4-8.29c.04-.06.06-.14.03-.21a.257.257 0 00-.3-.18L7.76 10.79c-.21.1-.32.34-.25.57l1.41 4.77c.01.03.04.06.07.07.06.02.11-.01.13-.07l.36-3.2c.02-.12.08-.24.17-.32z" fill="#F4F499"></path></svg>
                    </a>
                    <a href="" className="discord">
                        <svg width="1em" height="1em" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.216 14.293s-.403-.47-.73-.864c1.45-.403 2.007-1.277 2.007-1.277-.451.298-.883.5-1.267.643a8.553 8.553 0 01-1.604.47 7.966 7.966 0 01-2.87-.009 7.624 7.624 0 01-1.622-.47 7.29 7.29 0 01-.807-.365c-.038-.02-.067-.029-.096-.058a.162.162 0 00-.048-.019c-.201-.106-.307-.182-.307-.182s.528.854 1.94 1.267c-.337.413-.74.893-.74.893-2.448-.077-3.38-1.642-3.38-1.642 0-3.466 1.594-6.278 1.594-6.278C6.88 5.24 8.387 5.269 8.387 5.269l.115.134c-2.016.538-2.918 1.402-2.918 1.402s.24-.125.653-.307c1.18-.51 2.121-.644 2.515-.682.067-.01.125-.02.192-.02a9.331 9.331 0 015.568 1.008s-.874-.815-2.755-1.372l.153-.173s1.517-.029 3.101 1.133c0 0 1.594 2.813 1.594 6.278-.02-.019-.941 1.546-3.389 1.623zM17.488.229H2.656C1.408.229.39 1.227.39 2.456V17.01c0 1.228 1.018 2.227 2.266 2.227h12.547l-.585-1.987 1.42 1.276 1.335 1.2 2.39 2.036V2.456c-.01-1.229-1.027-2.227-2.275-2.227z" fill="#F4F499"></path></svg>
                    </a>
                    <a href="" className="medium">
                        <svg width="1em" height="1em" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.372 3.264a.784.784 0 00-.252-.658L.252.339V0H6.05l4.482 9.905L14.472 0H20v.339L18.403 1.88a.472.472 0 00-.177.452v11.334a.473.473 0 00.177.452l1.56 1.542V16h-7.844v-.339l1.616-1.58c.159-.16.159-.207.159-.451V4.468L9.402 15.962h-.606L3.566 4.468v7.704c-.043.323.064.65.29.884l2.101 2.568v.338H0v-.338l2.1-2.568a1.03 1.03 0 00.272-.884V3.264z" fill="#F4F499"></path></svg>
                    </a>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="capText">
                <a href="https://tectonic.gitbook.io/docs/introduction/what-is-tectonic" className="whitepaper">
                        Whitepaper
                </a>
            </div>
            <div className="capImg">
                <svg width={"114px"} viewBox="0 0 114 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-[114px]"><path d="M13.776 0L0 8.002V24l13.776 8 13.773-8V8.002L13.776 0zm9.691 21.63l-9.691 5.627-9.694-5.628V10.373l9.694-5.628 9.691 5.628v11.256z" fill="#fff"></path><path d="M20.209 19.737l-6.433 3.736-6.435-3.736v-7.472l6.435-3.737 6.433 3.737-2.68 1.556-3.753-2.18-3.755 2.18v4.358l3.755 2.18 3.753-2.18 2.68 1.558zM53.368 13.603v-2.777h-2.833v12.328h2.833v-4.693c0-3.27 1.719-4.881 4.179-4.881h.162v-2.989c-2.16-.093-3.57 1.167-4.341 3.012zm12.236-3.035c-3.761 0-6.546 2.92-6.546 6.444v.047c0 3.5 2.762 6.381 6.5 6.381 3.784 0 6.571-2.919 6.571-6.422v-.046c0-3.532-2.756-6.404-6.525-6.404zm3.716 6.49c0 2.125-1.441 3.9-3.716 3.9-2.182 0-3.736-1.797-3.736-3.946v-.046c0-2.149 1.44-3.923 3.69-3.923 2.205 0 3.761 1.797 3.761 3.969v.047zm-26.216 3.9c-2.16 0-3.668-1.75-3.668-3.946v-.046c0-2.149 1.509-3.923 3.553-3.923 1.391 0 2.297.654 3.156 1.542l1.766-1.892c-1.161-1.262-2.602-2.125-4.9-2.125-3.693 0-6.381 2.942-6.381 6.444v.047c0 3.5 2.692 6.381 6.338 6.381 2.392 0 3.808-.957 5.015-2.311l-1.694-1.682c-.91.904-1.861 1.51-3.185 1.51zm66.491-5.089c-1.441-.467-2.763-.842-2.763-1.752v-.047c0-.677.628-1.215 1.719-1.215 1.029 0 2.275.445 3.459 1.168l1.115-2.008a8.464 8.464 0 00-4.504-1.401c-2.439 0-4.366 1.424-4.366 3.783v.048c0 2.334 2.019 3.087 3.831 3.594 1.441.444 2.74.772 2.74 1.729v.047c0 .824-.696 1.33-1.904 1.33-1.254 0-2.676-.512-4.017-1.517l-1.253 1.914a8.438 8.438 0 005.2 1.853c2.554 0 4.551-1.284 4.551-3.876v-.047c-.01-2.226-2.036-3.043-3.818-3.603h.01zm-27.968-5.3c-1.904 0-3.042 1.002-3.83 2.146v-1.89h-2.833v12.33h2.833v-6.96c0-1.915 1.136-3.06 2.762-3.06 1.672 0 2.625 1.1 2.625 3.014v7h2.808v-7.865c0-2.849-1.592-4.716-4.365-4.716zm13.63 0c-3.76 0-6.546 2.918-6.546 6.443v.047c0 3.5 2.763 6.381 6.5 6.381 3.784 0 6.572-2.919 6.572-6.422v-.046c0-3.532-2.767-6.404-6.526-6.404zm3.716 6.49c0 2.124-1.441 3.899-3.716 3.899-2.182 0-3.738-1.797-3.738-3.946v-.046c0-2.149 1.44-3.923 3.693-3.923 2.204 0 3.76 1.797 3.76 3.969v.047z" fill="#fff"></path><path d="M37.167.352h1.853c1.074 0 1.727.638 1.727 1.56v.013c0 1.043-.824 1.585-1.824 1.585h-.756v1.354h-.992L37.167.352zm1.779 2.275c.496 0 .786-.297.786-.684v-.012c0-.445-.309-.683-.805-.683h-.768v1.379h.787zM41.17 3.156v-.013a1.813 1.813 0 011.876-1.799A1.795 1.795 0 0144.9 3.13v.014a1.871 1.871 0 01-3.738.013h.01zm2.772 0v-.013a.917.917 0 00-1.263-.885.885.885 0 00-.54.871v.014a.917.917 0 001.263.884.885.885 0 00.54-.871zM45.175 1.408h.992l.562 2.092.65-2.108h.845l.658 2.114.566-2.102h.974l-1.077 3.48h-.883l-.663-2.12-.677 2.12h-.877l-1.07-3.476zM50.68 3.156v-.013c0-.986.701-1.799 1.708-1.799 1.153 0 1.682.896 1.682 1.876 0 .078 0 .168-.013.259h-2.404a.799.799 0 00.844.675 1.13 1.13 0 00.838-.354l.56.496a1.824 1.824 0 01-3.216-1.14zm2.43-.29c-.06-.439-.317-.735-.728-.735-.412 0-.671.29-.748.735h1.476zM54.798 1.408h.988v.698c.206-.478.523-.787 1.102-.762v1.03h-.052c-.65 0-1.05.393-1.05 1.218v1.276h-.988v-3.46zM57.227 3.156v-.013c0-.986.703-1.799 1.707-1.799 1.155 0 1.684.896 1.684 1.876 0 .078 0 .168-.015.259h-2.4a.799.799 0 00.844.675 1.137 1.137 0 00.838-.354l.56.496a1.823 1.823 0 01-3.218-1.14zm2.436-.29c-.058-.439-.315-.735-.729-.735s-.669.29-.747.735h1.476zM61.194 3.144v-.015c0-1.153.754-1.785 1.573-1.785a1.328 1.328 0 011.077.509V.159h.977v4.706h-.977v-.497a1.272 1.272 0 01-1.077.56c-.805 0-1.573-.632-1.573-1.784zm2.662 0v-.015c0-.572-.38-.953-.838-.953-.457 0-.85.375-.85.953v.015c0 .572.385.953.844.953.46 0 .844-.381.844-.953zM68.613 4.414v.45h-.98V.16h.98v1.747a1.27 1.27 0 011.077-.562c.805 0 1.573.632 1.573 1.785v.015c0 1.152-.754 1.784-1.573 1.784a1.33 1.33 0 01-1.077-.514zm1.67-1.27v-.015c0-.572-.387-.953-.844-.953-.457 0-.838.38-.838.953v.015c0 .572.38.953.838.953.457 0 .844-.373.844-.953zM74.093 1.408h1.017l-1.328 3.533c-.263.702-.547.965-1.134.965a1.618 1.618 0 01-.869-.239l.328-.708a.908.908 0 00.411.136.327.327 0 00.342-.226l-1.346-3.46h1.029l.786 2.352.764-2.353z" fill="#fff" fill-opacity="0.6"></path></svg>
            </div>
        </div>
        </>
    )
}

export default Finance