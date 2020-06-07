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
                <span className="title">URL:</span>
                <span className="url"><a href={src} target="_blank">{src}</a></span>
                <span className="reload" onClick={reloadSrc}>Reload</span>
            </div>
            <iframe key={reloadKey} src={src} />
            <style jsx>{`
                .container {
                    border: 2px solid #8BC34A;
                }

                .url-bar {
                    border-bottom: 1px solid #8BC34A;
                    padding: 3px 10px;
                    font-size: 12px;
                    position: relative;
                    user-select: none;
                }

                .url-bar .title {
                    text-transform: uppercase;
                    font-weight: bold;
                    margin-right: 10px;
                }

                .url-bar a {
                    border-bottom: 0;
                }

                .url-bar .reload {
                    text-transform: uppercase;
                    font-weight: bold;
                    float: right;
                    cursor: pointer;
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