import React from 'react';
import '../../App.css'
import Footer from '../Footer';

function Home() {
    return (
        <>
            <div className='home'>
                <div className='home-text'>
                    <br />
                    <b>P R E S E N T A T I O N</b>
                    <br />

                    <blockquote className='indent'>
                        Piraya är Umeås Datavetares festeri.
                        Vi verkar främst för att underhålla linjens medlemmar, men vi arrangerar
                        även fester för andra. Ett bra exempel på detta är Otympliga Spelen! Vi
                        hoppas verkligen att ni alla har lust att deltaga i dessa underbara
                        tävlingar.
                        <br />
                        <br />
                        Andra evenmang vi ordnar är bland annat chilisittning, gröt och glögg,
                        och lagar ärtsoppa. Vi medverkar också på ett hörn på mottagningen.
                    </blockquote>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;