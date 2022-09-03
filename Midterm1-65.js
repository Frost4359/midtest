module.exports ={

    add1 (req,res){
        input = parseInt(JSON.stringify(req.body['input']))
        console.log('input = '%2 )
        output = x%2
        res.send(output.toString())
    }

}