import express from 'express'
import cors from 'cors'
import 'express-async-errors'

import categoryRoutes from './routes/category.routes'
import userRoutes from './routes/user.routes'

import { errorMiddleware } from './middleware/error.middleware'
import { prisma } from './database/prisma-client'


prisma.$connect().then(() => {
    const app = express()

    app.use(express.json())
    app.use(cors())

    app.use('/category', categoryRoutes())
    app.use('/user', userRoutes())

    app.use(errorMiddleware)

    return app.listen(3000, () => {
        console.log('Server Up!')
    })
}).catch(() => {
    console.log("Não foi possivel inicializar a conexão com o banco de dados.")
})

