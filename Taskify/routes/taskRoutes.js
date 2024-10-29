const taskRoutes = (req,res)=>{
    if(req.method == 'GET'){
        res.end('Get all tasks')
    }else if(req.method == 'Post'){
        res.end('create a new tast')
    }else if(req.method == 'PATCH'){
        res.end('Update a task');
    }else if(req.method == 'DELETE'){
        res.end('Delete a task');
    }else{
        res.writeHead(404,'Not Found', {'content-type':'application/json'});

        res.end(JSON.stringify({
            message : 'page not found'
        }))
    }
}