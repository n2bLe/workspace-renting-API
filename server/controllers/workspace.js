import Workspace from '../models/Workspace.js';



export const createWorkspace = async (req,res,next)=>{
    try{
        const workspace = new Workspace({
            city: req.body.city,
            address : req.body.address,
            type: req.body.type,
            desc : req.body.desc,
            access : req.body.access,
            featured : req.body.featured,
            unavailableDates: req.body.unavailableDates,
            price : req.body.price
        })
        if(req.body.features != null){
            workspace.features = req.body.features;
        }
        if(req.body.photos != null){
            workspace.photos = req.body.photos;
        }
        await workspace.save();
        res.status(201).send(workspace)
    }catch(err){
        throw err;
    }
}

export const updateWorkspace = async (req,res,next)=>{
     await Workspace.findByIdAndUpdate(req.params.id,req.body);
     const updated = await Workspace.findById(req.params.id);
    res.status(201).send(updated);
}


export const deleteWorkspace = async (req,res,next)=>{
    await Workspace.findByIdAndDelete(req.params.id);
    res.status(202).send("Workspace was deleted.");
}

export const getWorkspace = async (req,res,next)=>{
    const workspace = await Workspace.findById(req.params.id);
    res.status(200).send(workspace);
}

export const getWorkspaces = async (req,res,next)=>{
    const workspaces = await Workspace.find();
    res.status(200).send(workspaces);
}