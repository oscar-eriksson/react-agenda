import React from 'react';
import '../../App.css'
import Footer from '../Footer';

export default function Members() {
    return (
        <>
            <div className='members'>
            <blockquote>
                <font size="2">
                    Piraya är Umeås Datavetares festeri. 
                    Vi verkar främst för att underhålla linjens medlemmar, men vi arrangerar 
                    även fester för andra. Ett bra exempel på detta är Otympliga Spelen! Vi 
                    hoppas verkligen att ni alla har lust att deltaga i dessa underbara
                    tävlingar.
                    <br/>
                    Andra evenmang vi ordnar är bland annat chilisittning, gröt och glögg, 
                    och lagar ärtsoppa. Vi medverkar också på ett hörn på mottagningen.
                </font>
            </blockquote>
            </div>
            <Footer />
        </>
    );
}