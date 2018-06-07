const Employee =require('../models/employee')
const employeeCtrl = {}

employeeCtrl.getEmployees= async (req,res) => {
   const employees= await Employee.find();
   res.json(employees)

}

employeeCtrl.createEmploee=async (req,res) => {
    const employee = new Employee(req.body)
    await employee.save()
    res.json({
        'status':'employee save'
    })
    

    
}

employeeCtrl.getEmplyoee= async (req,res) => {
    const employee = await Employee.findById(req.params.id)
    res.json(employee)  
}

employeeCtrl.editEmplyoee= async (req,res) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(id,{$set: employee})
    res.json({status:'employee update'})
}

employeeCtrl.deleteEmplyoee= async (req,res) => {
    await Employee.findByIdAndRemove(req.params.id)
    res.json({ststus:'employee deleted'})
}


module.exports = employeeCtrl;