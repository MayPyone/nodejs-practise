const express = require('express')
const router = express.Router()
const {people} = require('./expressTutorial/data')

  router.get('/',(req,res)=>{
    res.status(200).json({success:true, data: people})
  })
  
  router.post('/',(req,res)=>{
    const { name, id } = req.body
    if(!name && !id) {
      return res.status(400).json({success: false, data: 'please provide name'})
    }
    people.push({name, id})
    res.status(200).json({success:true, person: people})
  })
  
  router.put('/:id',(req,res)=> {
    const {id} = req.params
    const {name} = req.body
    const person = people.find((p)=> p.id === Number(id))
    if(!person) {
      res.status(400).json({success: false, msg: 'this person is not here'})
    }
  
    const newPerson= people.map((person)=> {
        if(person.id === Number(id)){
          person.name = name
        }
        return person
    })
  
    res.status(200).json({success: true, data: newPerson})
  })
  
  router.delete('/:id',(req,res)=> {
    const person = people.find((p)=>p.id===Number(req.params.id))
    if(!person){
      res.status(404).json({success: false, msg: "This person is not found here"})
    }
  
    const deletePerson = people.filter((person)=>person.id !==Number(req.params.id))
  
    res.status(200).json({success: true, data: deletePerson});
  })

  module.exports = router