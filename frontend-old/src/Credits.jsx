import React from 'react';
import Navbar from './components/Navbar'

export default function Credits() {
    return (
        <div>
            <Navbar name="Credits" />

            <div className="credits-flex">
                <h1 className="animation-header">{'Sponsors'}</h1>
                <div className="discord-embed">
                    <img alt="" src="https://cdn.discordapp.com/icons/742737352799289375/17309814bec081a43520d9c55fe27fac.webp?size=128" />
                    <p>{'ChemistryHelp Discord Server '}<a href="https://discord.gg/teFD7JGbJa"><button>{'Join'}</button></a></p>
                </div>
                <h1 className="animation-header">Animations</h1>
                <ul>
                    <li>{'Cookie Animation'}</li>
                    <ul>
                        <li><a href="https://lottiefiles.com/34674-cookie-policy" rel="noopener noreferrer" target="_blank">{'Animation by Arnau Sebastià'}</a></li>
                    </ul>
                    <li>Flag Animation</li>
                    <ul>
                        <li><a href="https://lottiefiles.com/50529-misson" rel="noopener noreferrer" target="_blank">Animation by Vinicius Faria Martins</a></li>
                    </ul>
                    <li>School Bus Animation</li>
                    <ul>
                        <li><a href="https://lottiefiles.com/43223-camp-waterfalls-website-animation" rel="noopener noreferrer" target="_blank">{'Animation by Bradley Conners'}</a></li>
                    </ul>
                    <li>{'Dashboard Money Animation'}</li>
                    <ul>
                        <li><a href="https://lottiefiles.com/9888-money-money-money" rel="noopener noreferrer" target="_blank">{'Animation by Ana Lario'}</a></li>
                    </ul>
                    <li>{'Transfer Animation'}</li>
                    <ul>
                        <li><a href="https://lottiefiles.com/15570-banking-finance-icon-02" rel="noopener noreferrer" target="_blank">{'Animation by Sherry Sun'}</a></li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}