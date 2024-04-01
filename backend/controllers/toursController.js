import Tour from "../models/Tour.js";


export const createTour = async (req,res)=> {
    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();

        res
        .status(200)
        .json({success:true, message: 'Successfully created',
    data:savedTour});
    } catch (err) {
        res.status(500).json({success:false, message: 'Failed to created.Try again'});
    }
}; 


//update tours

export const updateTour = async(req,res)=> {
    const id = req.params.id 
    try {
       const updatedTour = await Tour.findByIdAndUpdate(id, {
        $set: req.body
       }, {new:true})

       res
       .status(200)
       .json({success:true, message: 'Successfully updated',
   data: updatedTour,});
    } catch (err) {
        res
        .status(500)
        .json({success:false, message: 'Failed to update',
    });  
    }
};
//delete tours

export const deleteTour = async(req,res)=> {
    const id = req.params.id 
    try {
        await Tour.findByIdAndDelete(id);

       res
       .status(200)
       .json({success:true, message: 'Successfully deleted',
 
});
    } catch (err) {
        res
        .status(500)
        .json({success:false, message: 'Failed to delete',
    });  
    }
};

//getSingle tours

export const getSingleTour = async(req,res)=> {
    const id = req.params.id 
    try {
      const tour =  await Tour.findById(id).populate('reviews');

       res
       .status(200)
       .json({success:true, message: 'Successfully Get a Single Tour',
       data:tour
 
});
    } catch (err) {
        res
        .status(404)
        .json({success:false, message: 'not found',
    });  
    }
}
//getAll tours

export const getAllTour = async(req,res)=> {

   //for pagination
   const page = parseInt(req.query.page) 
   

    try {
     const tours = await Tour.find({}).populate('reviews')
     .skip(page * 8)
     .limit(8);
     
     res.status(200).json({success:true, count:tours.length, 
        message: 'Successful',
     data:tours,})
    } catch (err) {
        res
        .status(404)
        .json({success:false, message: 'not found',
    });   
    }
}

//get tour by search
export const getTourBySearch = async(req,res)=>{

    //here 'i' means case sensitive
    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try {

        //gte mean grater than or equal
        const tours = await Tour.find({ city, distance:{$gte:distance},maxGroupSize:{$gte:maxGroupSize}
        }).populate('reviews');

        res.status(200).json({success:true,  
            message: 'Successful',
         data:tours,});
    } catch (err) {  
        res.status(404)
        .json({success:false, message: 'not found',
    });   
        
    }
}


//get featured tours

export const getFeaturedTour = async(req,res)=> {

  
 
     try {
      const tours = await Tour.find({featured:true}).populate('reviews').limit(8);
      
      res.status(200).json({success:true,  
         message: 'Successful',
      data:tours,})
     } catch (err) {
         res
         .status(404)
         .json({success:false, message: 'not found',
     });   
     }
 }

 //get tour counts

 export const getTourCount = async(req,res)=>{
    try {
        const tourCount = await Tour.estimatedDocumentCount()

        res.status(200).json({success:true, date: tourCount});

    } catch (err) {
        res.status(500).json({success:false, message:"failed to fetch"});  
    }
 };