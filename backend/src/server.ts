import express from 'express'
import { getRepository } from 'typeorm'

import Orphanage from './models/Orphanage'

import './database/connection'

const app = express()

app.use(express.json())

app.post('/orphanages', async (req, res) => {
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    } = req.body

    const orphanagesRepository = getRepository(Orphanage)

    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    })

    await orphanagesRepository.save(orphanage)

    return res.json({ message: 'Hello there!' })
})

app.listen(3333)
