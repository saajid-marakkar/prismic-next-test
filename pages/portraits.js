import React from 'react';
import Link from 'next/link'

function Portraits() {
    return (
        <div className="container">
            <div className="portraits-page">
                <div className="portraits-page-menu">
                    <div className="portraits-page-menu-item">
                        <Link href="indoor">
                            <div>
                                <img src="assets/images/indoor.jpeg" />
                                <div className="centered-text">
                                    <h1>INDOOR</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="portraits-page-menu-item">
                        <Link href="outdoor">
                            <div>
                                <img src="assets/images/outdoor.jpeg" />
                                <div className="centered-text">
                                    <h1>OUTDOOR</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        // <div class="container">
        //     <div className="portraits-page">
        //         <div class="row portraits-page-menu">
        //             <div class="col-12 portraits-page-menu-item col-md-6">
        //                 <Link href="indoor">
        //                     <img src="assets/images/indoor.jpeg" />
        //                 </Link>
        //                 <div>
        //                     <h1>INDOOR</h1>
        //                 </div>
        //             </div>
        //             <div class="col-12 portraits-page-menu-item col-md-6">
        //                 <Link href="indoor">
        //                     <img src="assets/images/outdoor.jpeg" />
        //                 </Link>
        //                 <div>
        //                     <h1>OUTDOOR</h1>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Portraits


