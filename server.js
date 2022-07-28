import { createServer, Model } from "miragejs";

export default function () {
    let server = createServer({
        models: {
            todos: Model
        },
        seeds(server) {
            server.create('todo', {
                id: 1, 
                text: 'Walk the dog',
                complete: true
            }),
            server.create('todo', {
                id: 2,
                text: 'Take out the trash',
                complete: false
            }),
            server.create('todo', {
                id: 3,
                text: 'Work out',
                complete: false
            })
        },
        routes() {
            this.namespace = 'api/todos'
            this.get('/', (schema, request) => schema.todos.all())
            this.post('/', (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                return schema.todos.create(attrs)
            })
            this.patch('/:id', (schema, request) => {
                let newAttrs = JSON.parse(request.requestBody)
                let id = request.params.id
                return schema.todos.find(id).update(newAttrs)
            })
            this.delete('/:id', (scheme, request) => {
                let id = request.params.id
                return scheme.todos.find(id).destroy()
            })
        }
    })

    return server
}