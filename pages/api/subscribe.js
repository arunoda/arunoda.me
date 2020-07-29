import axios from 'axios'

const buttonDown = axios.create({
    baseURL: 'https://api.buttondown.email',
    headers: {
        'Authorization': `token ${process.env.BUTTONDOWN_API_KEY}`
    }
});

export default async function subscribe(req, res) {
    const { email, tags } = req.body
    const subsSearch = await buttonDown.get(`v1/subscribers?email=${encodeURIComponent(email)}`)
    const [existingSubscriber] = subsSearch.data.results;

    if (existingSubscriber) {
        const newTags = Array.from(new Set([
            ...tags,
            ...existingSubscriber.tags
        ]))

        await buttonDown.delete(`v1/subscribers/${existingSubscriber.id}`)
        await buttonDown.post('/v1/subscribers', {
            email,
            tags: newTags
        })
        return res.send({})
    }

    await buttonDown.post('/v1/subscribers', {
        email,
        tags
    })

    return res.send({})
}