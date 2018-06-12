module.exports = {
    getComments(req, res) {
        res.status(200).send(req.store.posts[req.params.postId].comments)
    }, 
    addComment(req, res) {
        let newComment = req.body
        let id = req.store.posts[req.params.postId].comments.length
        req.store.posts[req.params.postId].comments.push(newComment)
        res.status(201).send({id: id})
    },
    updateComment(req, res) {
        //esta línea comentada sustituye todo el elemento por lo que viene en el argumento
        //req.store.posts[req.params.postId].comments[req.params.commentId] = req.body
        //al usar Object.assign solo se actualizan los campos que vengan en la cadena JSON
        req.store.posts[req.params.postId].comments[req.params.commentId] = Object.assign(req.store.posts[req.params.postId].comments[req.params.commentId], req.body)
        res.status(200).send(store.posts[req.params.postId])
    },
    removeComment(req, res) {
        req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
        res.status(204).send()
    }  
  }