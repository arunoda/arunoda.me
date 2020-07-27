export default async function subscribe(req, res) {
    const { email, tags } = req.body
    const apiUrl = `https://api.buttondown.email/v1/subscribers`
    const payload = {
        email,
        tags
    }

    const fetchRes = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${process.env.BUTTONDOWN_API_KEY}`
        },
        body: JSON.stringify(payload)
    })

    if (!fetchRes.ok) {
        throw new Error(`Buttondown Error: ${await fetchRes.text()}`)
    }

    res.send({})
}