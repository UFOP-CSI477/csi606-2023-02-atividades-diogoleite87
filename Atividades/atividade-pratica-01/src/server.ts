import { personRoutes } from "./routes/person.routes";
import { stateRoutes } from "./routes/state.routes";
import { cityRoutes } from "./routes/city.routes";
import fastify, { FastifyInstance } from "fastify";

const app: FastifyInstance = fastify();

app.register(personRoutes, {
    prefix: '/person'
})

app.register(stateRoutes, {
    prefix: '/state'
})

app.register(cityRoutes, {
    prefix: '/city'
})

app.listen({
    port: 3100,
}, () => console.log('Server Up!'))