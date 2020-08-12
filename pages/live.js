import { useState, useEffect } from "react";
import Head from 'next/head';
import ms from 'ms'
import { NextSeo } from 'next-seo';

const liveTime = 1597338000000;
const title = "Exploring GraphQL"
const calendarLink = 'https://bit.ly/2DCdgsI';

function getLiveTag() {
    const d = new Date(liveTime)
    const year = d.getUTCFullYear()
    const month = d.getUTCMonth() + 1
    const date = d.getUTCDate()

    return `live-${year}-${month}-${date}`
}

function findDateDiff(diff) {
    let time = diff;
    const days = Math.floor(time / ms('1day'))
    time -= days * ms('1day')

    const hours = Math.floor(time / ms('1hour'))
    time -= hours * ms('1hour')

    const mins = Math.floor(time / ms('1min'))
    time -= mins * ms('1min')

    const secs = Math.floor(time / ms('1sec'))
    time -= secs * ms('1sec')

    return { days, hours, mins, secs }
}

function pad(val) {
    return val < 10 ? `0${val}` : String(val)
}

function getTimerValue() {
    const { days, hours, mins, secs } = findDateDiff(liveTime - Date.now())
    return `${pad(days)}:${pad(hours)}:${pad(mins)}:${pad(secs)}`
}

export default function Live() {
    const [timerValue, setTimerValue] = useState(getTimerValue())
    const [email, setEmail] = useState(null)
    const [subscribing, setSubscribing] = useState(false)
    const [showThanks, setShowThanks] = useState(false)

    const isLiveNow = liveTime < Date.now()

    useEffect(() => {
        const handler = setInterval(() => {
            if (isLiveNow) {
                clearInterval(handler)
            }
            setTimerValue(getTimerValue())
        }, 200)

        return () => clearInterval(handler)
    }, [])

    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
            setSubscribing(true)
            const fetchRes = await fetch(
                '/api/subscribe',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email,
                        tags: ['live', getLiveTag()]
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            if (!fetchRes.ok) {
                throw new Error(`Error: ${await fetchRes.text()}`)
            }

            setShowThanks(true)
        } catch (err) {
            alert(err.message)
        } finally {
            setEmail('')
            setSubscribing(false)
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div className="container">
            <NextSeo
                title="Arunoda Live 🔴"
                description={title}
                openGraph={{
                    type: 'website',
                    title: "Arunoda Live 🔴",
                    description: title,
                    url: 'https://arunoda.me/live',
                    images: [
                        {
                            url: 'https://arunoda.me/images/arunoda-live-tw-card.png'
                        }
                    ]
                }}
                twitter={{
                    handle: '@arunoda',
                    cardType: 'summary_large_image',
                }}
            />
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
            </Head>
            <div className="heading">
                <div className="caption">Arunoda Live</div>
                <div className="circle"></div>
            </div>
            <div className="title">{title}</div>
            {isLiveNow? (
                <a className="live-now" href="https://twitch.tv/arunodas">
                    Visit <img src="/images/twitch-logo.png" /> for 🔴
                </a>
            ) : (
                <>
                    <div className="countdown">
                        <div className="caption">Starts In</div>
                        <div className="timer">{timerValue}</div>
                    </div>
                    <div className="add-to-cal">
                        <a href={calendarLink} target="_blank">Add to Calender</a>
                    </div>
                </>
            )}
            <form className="form" onSubmit={handleSubscribe}>
                {showThanks ? (
                    <div className="thanks">Thanks. I'll remind you!</div>
                ) : (
                        <>
                            <input
                                className="email"
                                placeholder="Enter your email"
                                onChange={handleEmailChange}
                                value={email}
                                disabled={subscribing}
                            />
                            <button disabled={subscribing}>
                                {subscribing ? '...' : 'Remind Me'}
                            </button>
                        </>
                    )}
            </form>
            <div className="twitch">
                <img src="/images/twitch-logo-black.png" />
                <a
                    className="link"
                    href="https://twitch.tv/arunodas"
                    target="_blank"
                >
                    Find me on Twitch
                </a>
            </div>
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                }
            `}</style>
            <style jsx>{`
                .container {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                    padding: 100px 0;
                }

                .heading {
                    font-size: 80px;
                    font-weight: 600;
                    letter-spacing: 1px;
                    display: flex;
                    margin: 100px 0 80px 0;
                    justify-content: center;
                    align-items: center;
                    color: hsl(0deg, 0%, 10%);
                }

                .heading .caption {
                    margin-right: 20px;
                }

                .heading .circle {
                    width: 70px;
                    height: 70px;
                    background-color: hsl(0deg, 100%, 50%);
                    border-radius: 50%;
                }

                .title {
                    border-top: 10px solid hsl(0deg, 100%, 50%);
                    padding: 20px 0;
                    text-align: center;
                    font-size: 30px;
                    color: hsl(0deg, 0%, 80%);
                    background-color: hsl(0deg, 0%, 10%);
                    font-weight: 400;
                    letter-spacing: 1px;
                    margin: 0 0 80px 0;
                }

                .countdown {
                    text-align: center;
                    margin: 0 0 10px 0;
                }

                .countdown .caption {
                    text-transform: uppercase;
                    font-size: 20px;
                    font-weight: 400;
                    letter-spacing: 4px;
                    color: hsl(0deg, 0%, 30%);
                }

                .countdown .timer {
                    margin-top: 10px;
                    font-size: 60px;
                    color: hsl(0deg, 0%, 10%);
                    letter-spacing: 2px;
                    font-family: 'Roboto Mono';
                }

                .add-to-cal {
                    text-align: center;
                    margin: 0 0 80px 0;
                }
                
                .add-to-cal a {
                    color: hsl(0deg, 0%, 10%);
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: 12px;
                }

                .live-now {
                    justify-content: center;
                    display: flex;
                    align-items: center;
                    font-size: 30px;
                    text-transform: uppercase;
                    letter-spacing: 8px;
                    margin: 0 0 80px 0;
                    text-decoration: none;
                    color: hsl(0deg, 0%, 10%);
                }

                .live-now img {
                    width: 30px;
                    height: 35px;
                    margin: 0 10px;
                }

                .form {
                    display: flex;
                    justify-content: center;
                    margin: 0 0 20px 0;
                }

                .form input {
                    border: 1px solid hsl(0deg, 100%, 0%);
                    padding: 10px 15px;
                    font-size: 18px;
                    width: 300px;
                    outline: 0;
                    -webkit-appearance: none;
                    border-radius: 0;
                }

                .form button:focus,
                .form input:focus {
                    box-shadow: 5px 10px 0 0 hsl(0deg, 0%, 40%);
                }

                .form button {
                    border: 0;
                    background-color: hsl(0deg, 100%, 0%);
                    color: hsl(0deg, 100%, 100%);
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    width: 150px;
                    font-weight: 600;
                    cursor: pointer;
                    outline: 0;
                }

                .form button:hover {
                    color: hsl(0deg, 100%, 50%);
                }

                .twitch {
                    display: flex;
                    justify-content: center;
                    opacity: 0.6;
                }

                .twitch:hover {
                    opacity: 1;
                }

                .twitch img {
                    width: 20px;
                    height: 23px;
                    margin-right: 10px;
                }

                .twitch a {
                    text-decoration: none;
                    color: hsl(0deg, 0%, 10%);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: 12px;
                    font-weight: 600;
                }

                @media only screen and (max-width: 400px) {
                    .heading {
                        font-size: 35px;
                        margin: 50px 0 80px 0;
                    }

                    .heading .caption {
                        margin-left: 10px;
                    }

                    .heading .circle {
                        width: 40px;
                        height: 40px;
                    }

                    .title {
                        font-size: 20px;
                        line-height: 30px;
                        font-weight: 400;
                        padding: 20px;
                    }

                    .countdown .timer {
                        font-size: 40px;
                    }

                    .form {
                        padding: 0 20px;
                    }

                    .form input {
                        font-size: 16px;
                        width: 200px;
                    }

                    .form button {
                        font-size: 10px;
                        line-height: 15px;
                    }
                }
            `}</style>
        </div>
    )
}