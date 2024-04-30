// //admincontroller.js
// const User = require("../models/User")
// const Admin=require("../models/Admin")


//  const viewusers = async (request, response) => 
//  {
//     try 
    
//     {
//       const users = await User.find();
//       if(users.length==0)
//       {
//         response.send("DATA NOT FOUND");
//       }
//       else
//       {
//         response.json(users);
//       }
//     } 
//     catch (error) 
//     {
//       response.status(500).send(error.message);
//     }
//   };



//   const deleteusers = async (request, response) => 
//  {
//     try 
//     {
//       const email = request.params.email
//       const user = await User.findOne({"email":email})
//       if(user!=null)
//       {
//         await User.deleteOne({"email":email})
//         response.send("Deleted Successfully")
//       }
//       else
//       {
//         response.send("Email ID Not Found")
//       }

//     } 
//     catch (error) 
//     {
//       response.status(500).send(error.message);
//     }
//   };



//   const checkadminlogin = async (request, response) => 
//   {
//      try 
//      {
//        const input = request.body
//        console.log(input)
//        const admin = await Admin.findOne(input)
//        response.json(admin)
//      } 
//      catch (error) 
//      {
//        response.status(500).send(error.message);
//      }
//    };


//    const addusers = async (request, response) => {
//     try 
//     {
//       const input = request.body;
//       const user = new User(input);
//       await user.save();
//       response.send('Added Successfully');
//     } 
//     catch(e) 
//     {
//       response.status(500).send(e.message);
//     }
//   };




//   module.exports={viewusers,deleteusers,checkadminlogin,addusers}


const User = require("../models/User");
const Admin = require("../models/Admin");

const viewusers = async (request, response) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return response.status(404).send("No users found");
    }
    response.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    response.status(500).send("Internal Server Error");
  }
};

const deleteusers = async (request, response) => {
  try {
    const email = request.params.email;
    const user = await User.findOne({ "email":email });
    if (!user) {
      return response.status(404).send("User not found");
    }
    await User.deleteOne({ "email":email});
    response.send("User deleted successfully");
  } catch (error) {
    console.error("Error deleting user:", error);
    response.status(500).send("Internal Server Error");
  }
};

// const checkadminlogin = async (request, response) => 
//   {
//      try 
//      {
//        const input = request.body //takes form data
//        console.log(input)
//        const admin = await Admin.findOne(input) 
//        response.json(admin)
//      } 
//      catch (error) 
//      {
//        response.status(500).send(error.message); // 409 (duplicate) , 504(gateway error)
//      }
//    };
// admincontroller.js
const checkadminlogin = async (request, response) => {
  try {
    const input = request.body;
    const admin = await Admin.findOne(input);
    if (!admin) {
      return response.status(404).send("Admin not found");
    }
    response.json(admin); // Respond with the found admin
  } catch (error) {
    response.status(500).send("Internal Server Error: " + error.message);
  }
};

  

const addusers = async (request, response) => {
  try {
    const input = request.body;
    const user = new User(input);
    await user.save();
    response.send("User added successfully");
  } catch (error) {
    console.error("Error adding user:", error);
    response.status(500).send("Internal Server Error");
  }
};

module.exports = { viewusers, deleteusers, checkadminlogin, addusers };
