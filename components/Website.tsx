import { useState } from "react"
import { nanoid } from 'nanoid'

export default function Website({src, height=500}) {
    const [reloadKey, setReloadKey] = useState(nanoid(20));
    const reloadSrc = () => {
        setReloadKey(nanoid(20))
    }

    return (
        <div className="container">
            <div className="url-bar">
                <span className="title">🌎</span>
                <span className="url"><a href={src} target="_blank">{src}</a></span>
                <span className="reload" onClick={reloadSrc}>🔄</span>
            </div>
            <iframe key={reloadKey} src={src} />
            <style jsx>{`
                .container {
                    margin: 50px 0;
                    border: 1px solid #CCC;
                    border-radius: 4px;
                }

                .url-bar {
                    border-bottom: 1px solid #EEE;
                    padding: 3px 10px;
                    font-size: 12px;
                    position: relative;
                    user-select: none;
                    height: 28px;
                }

                .url-bar .title {
                    position: absolute;
                    text-transform: uppercase;
                    font-weight: bold;
                    left: 0;
                    width: 30px;
                    text-align: center;
                }

                .url-bar .url {
                    position: absolute;
                    padding: 0 20px;
                    white-space: nowrap;
                }

                .url-bar .reload {
                    position: absolute;
                    text-transform: uppercase;
                    font-weight: bold;
                    cursor: pointer;
                    font-size: 16px;
                    right: 0px;
                    background-color: #FFF;
                    width: 30px;
                    text-align: center;
                }

                .url-bar a {
                    border-bottom: 0;
                }

                .url-bar .reload:hover {
                    opacity: 0.8;
                }

                iframe {
                    border: 0;
                    width: 100%;
                    height: ${height}px;
                }
            `}</style>
        </div>
    )
}