import React from "react";
import Nav2 from "../Nav2/Nav2";
import HeroImg from "../../assets/images/hero-background.png"
import "./Hero.css"
import Button from "../Button/Button";
const Hero = () => {
    return (
        <>
        <Nav2 />
        <div style={{
            backgroundImage : `url(${HeroImg})`,
            height: "100vh"
            }} className="heroText">
                <div className="heroTextBody">
                    <h1 className="heroH1">
                        <span className="block">A tectonic shift in</span>
                        <span className="block">lending & borrowing</span>
                    </h1>
                    <p className="heroP">
                        Tectonic is a cross-chain money market for earning passive yield and accessing instant backed loans
                    </p>
                    <div id="twinButtons" >
                        <div className="heroB1">
                            <Button name="Enter App" />
                        </div>
                        <div className="heroB2">
                            <Button name="Whitepaper"/>
                        </div>
                        
                    </div>
                    <div className="heroSvg">
                        <svg  viewBox="0 0 114 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-[114px]"><path d="M13.776 0L0 8.002V24l13.776 8 13.773-8V8.002L13.776 0zm9.691 21.63l-9.691 5.627-9.694-5.628V10.373l9.694-5.628 9.691 5.628v11.256z" fill="#fff"></path><path d="M20.209 19.737l-6.433 3.736-6.435-3.736v-7.472l6.435-3.737 6.433 3.737-2.68 1.556-3.753-2.18-3.755 2.18v4.358l3.755 2.18 3.753-2.18 2.68 1.558zM53.368 13.603v-2.777h-2.833v12.328h2.833v-4.693c0-3.27 1.719-4.881 4.179-4.881h.162v-2.989c-2.16-.093-3.57 1.167-4.341 3.012zm12.236-3.035c-3.761 0-6.546 2.92-6.546 6.444v.047c0 3.5 2.762 6.381 6.5 6.381 3.784 0 6.571-2.919 6.571-6.422v-.046c0-3.532-2.756-6.404-6.525-6.404zm3.716 6.49c0 2.125-1.441 3.9-3.716 3.9-2.182 0-3.736-1.797-3.736-3.946v-.046c0-2.149 1.44-3.923 3.69-3.923 2.205 0 3.761 1.797 3.761 3.969v.047zm-26.216 3.9c-2.16 0-3.668-1.75-3.668-3.946v-.046c0-2.149 1.509-3.923 3.553-3.923 1.391 0 2.297.654 3.156 1.542l1.766-1.892c-1.161-1.262-2.602-2.125-4.9-2.125-3.693 0-6.381 2.942-6.381 6.444v.047c0 3.5 2.692 6.381 6.338 6.381 2.392 0 3.808-.957 5.015-2.311l-1.694-1.682c-.91.904-1.861 1.51-3.185 1.51zm66.491-5.089c-1.441-.467-2.763-.842-2.763-1.752v-.047c0-.677.628-1.215 1.719-1.215 1.029 0 2.275.445 3.459 1.168l1.115-2.008a8.464 8.464 0 00-4.504-1.401c-2.439 0-4.366 1.424-4.366 3.783v.048c0 2.334 2.019 3.087 3.831 3.594 1.441.444 2.74.772 2.74 1.729v.047c0 .824-.696 1.33-1.904 1.33-1.254 0-2.676-.512-4.017-1.517l-1.253 1.914a8.438 8.438 0 005.2 1.853c2.554 0 4.551-1.284 4.551-3.876v-.047c-.01-2.226-2.036-3.043-3.818-3.603h.01zm-27.968-5.3c-1.904 0-3.042 1.002-3.83 2.146v-1.89h-2.833v12.33h2.833v-6.96c0-1.915 1.136-3.06 2.762-3.06 1.672 0 2.625 1.1 2.625 3.014v7h2.808v-7.865c0-2.849-1.592-4.716-4.365-4.716zm13.63 0c-3.76 0-6.546 2.918-6.546 6.443v.047c0 3.5 2.763 6.381 6.5 6.381 3.784 0 6.572-2.919 6.572-6.422v-.046c0-3.532-2.767-6.404-6.526-6.404zm3.716 6.49c0 2.124-1.441 3.899-3.716 3.899-2.182 0-3.738-1.797-3.738-3.946v-.046c0-2.149 1.44-3.923 3.693-3.923 2.204 0 3.76 1.797 3.76 3.969v.047z" fill="#fff"></path><path d="M37.167.352h1.853c1.074 0 1.727.638 1.727 1.56v.013c0 1.043-.824 1.585-1.824 1.585h-.756v1.354h-.992L37.167.352zm1.779 2.275c.496 0 .786-.297.786-.684v-.012c0-.445-.309-.683-.805-.683h-.768v1.379h.787zM41.17 3.156v-.013a1.813 1.813 0 011.876-1.799A1.795 1.795 0 0144.9 3.13v.014a1.871 1.871 0 01-3.738.013h.01zm2.772 0v-.013a.917.917 0 00-1.263-.885.885.885 0 00-.54.871v.014a.917.917 0 001.263.884.885.885 0 00.54-.871zM45.175 1.408h.992l.562 2.092.65-2.108h.845l.658 2.114.566-2.102h.974l-1.077 3.48h-.883l-.663-2.12-.677 2.12h-.877l-1.07-3.476zM50.68 3.156v-.013c0-.986.701-1.799 1.708-1.799 1.153 0 1.682.896 1.682 1.876 0 .078 0 .168-.013.259h-2.404a.799.799 0 00.844.675 1.13 1.13 0 00.838-.354l.56.496a1.824 1.824 0 01-3.216-1.14zm2.43-.29c-.06-.439-.317-.735-.728-.735-.412 0-.671.29-.748.735h1.476zM54.798 1.408h.988v.698c.206-.478.523-.787 1.102-.762v1.03h-.052c-.65 0-1.05.393-1.05 1.218v1.276h-.988v-3.46zM57.227 3.156v-.013c0-.986.703-1.799 1.707-1.799 1.155 0 1.684.896 1.684 1.876 0 .078 0 .168-.015.259h-2.4a.799.799 0 00.844.675 1.137 1.137 0 00.838-.354l.56.496a1.823 1.823 0 01-3.218-1.14zm2.436-.29c-.058-.439-.315-.735-.729-.735s-.669.29-.747.735h1.476zM61.194 3.144v-.015c0-1.153.754-1.785 1.573-1.785a1.328 1.328 0 011.077.509V.159h.977v4.706h-.977v-.497a1.272 1.272 0 01-1.077.56c-.805 0-1.573-.632-1.573-1.784zm2.662 0v-.015c0-.572-.38-.953-.838-.953-.457 0-.85.375-.85.953v.015c0 .572.385.953.844.953.46 0 .844-.381.844-.953zM68.613 4.414v.45h-.98V.16h.98v1.747a1.27 1.27 0 011.077-.562c.805 0 1.573.632 1.573 1.785v.015c0 1.152-.754 1.784-1.573 1.784a1.33 1.33 0 01-1.077-.514zm1.67-1.27v-.015c0-.572-.387-.953-.844-.953-.457 0-.838.38-.838.953v.015c0 .572.38.953.838.953.457 0 .844-.373.844-.953zM74.093 1.408h1.017l-1.328 3.533c-.263.702-.547.965-1.134.965a1.618 1.618 0 01-.869-.239l.328-.708a.908.908 0 00.411.136.327.327 0 00.342-.226l-1.346-3.46h1.029l.786 2.352.764-2.353z" fill="#fff" fill-opacity="0.6"></path></svg>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Hero