module.exports = {
    getPosts(req, res) {
        res.status(200).send(req.store.posts)
    },
    addPost(req, res) {
        let newPost = req.body
        let id = req.store.posts.length
        req.store.posts.push(newPost)
        res.status(201).send({id: id})
    },
    updatePost(req, res) {
        //esta línea comentada sustituye todo el elemento por lo que viene en el argumento
        //req.store.posts[req.params.postId] = req.body
        //al usar Object.assign solo se actualizan los campos que vengan en la cadena JSON
        req.store.posts[req.params.postId] = Object.assign(req.store.posts[req.params.postId],req.body)
        res.status(200).send(req.store.posts[req.params.postId])
    },
    removePost(req, res) {
        req.store.posts.splice(req.params.postId, 1)
        res.status(204).send()
    }
  }