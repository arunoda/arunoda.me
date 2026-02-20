import { useState, useEffect } from "react";
import Head from 'next/head';
import ms from 'ms'
import { generateNextSeo as NextSeo } from 'next-seo/pages';
import styles from './live.module.css';

const liveTime = 1598374800000;
const title = "Adding Tracing Support for Next.js"
const calendarLink = 'https://bit.ly/3arxlgZ';

function getLiveTag() {
    const d = new Date(liveTime)
    const year = d.getUTCFullYear()
    const month = d.getUTCMonth() + 1
    const date = d.getUTCDate()

    return `live-${year}-${month}-${date}`
}

function findDateDiff(diff: number) {
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

function pad(val: number) {
    return val < 10 ? `0${val}` : String(val)
}

function getTimerValue() {
    const { days, hours, mins, secs } = findDateDiff(liveTime - Date.now())
    return `${pad(days)}:${pad(hours)}:${pad(mins)}:${pad(secs)}`
}

export default function Live() {
    const [timerValue, setTimerValue] = useState(getTimerValue())
    const [email, setEmail] = useState<string | null>(null)
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

    const handleSubscribe = async (e: any) => {
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

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value)
    }

    return (
        <div className={styles.container}>
            <Head>
                {NextSeo({
                    title: "Arunoda Live 🔴",
                    description: title,
                    openGraph: {
                        type: 'website',
                        title: "Arunoda Live 🔴",
                        description: title,
                        url: 'https://arunoda.me/live',
                        images: [
                            {
                                url: 'https://arunoda.me/images/arunoda-live-tw-card.png'
                            }
                        ]
                    },
                    twitter: {
                        handle: '@arunoda',
                        cardType: 'summary_large_image',
                    }
                })}
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.heading}>
                <div className={styles.caption}>Arunoda Live</div>
                <div className={styles.circle}></div>
            </div>
            <div className={styles.title}>{title}</div>
            {isLiveNow ? (
                <a className={styles.liveNow} href="https://twitch.tv/arunodas">
                    Visit <img src="/images/twitch-logo.png" alt="Twitch Logo" /> for 🔴
                </a>
            ) : (
                <>
                    <div className={styles.countdown}>
                        <div className={styles.caption}>Starts In</div>
                        <div className={styles.timer}>{timerValue}</div>
                    </div>
                </>
            )}
            <form className={styles.form} onSubmit={handleSubscribe}>
                {showThanks ? (
                    <div className="thanks">Thanks. I'll remind you!</div>
                ) : (
                    <>
                        <input
                            className="email"
                            placeholder="Enter your email"
                            onChange={handleEmailChange}
                            value={email || ''}
                            disabled={subscribing}
                        />
                        <button disabled={subscribing}>
                            {subscribing ? '...' : 'Remind Me'}
                        </button>
                    </>
                )}
            </form>
            <div className={styles.twitch}>
                <img src="/images/twitch-logo-black.png" alt="Twitch Black Logo" />
                <a
                    href="https://twitch.tv/arunodas"
                    target="_blank"
                    rel="noreferrer"
                >
                    Find me on Twitch
                </a>
            </div>
        </div>
    )
}