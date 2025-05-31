const express = require('express')  // mujhy node.js ka web framwork express chahye is liye express ko import kiya hai
                                    // require keyword ki help se.....
                                    // aur use express name ke vaiable mein store kiya hai

const app = express()   // calling express function
                        // app ek variable hai jisme Express ka object save kar liya gaya hai.
                        // routes set kar saktay ho (app.get(), app.post()),
                        // server start kar saktay ho (app.listen()),
                        // aur middleware lagaa saktay ho (app.use()).
                        // express object return karta hai
                        // us object ko app mein save kerte hain
                        // app ye main object hain 
                        // kun ke hum ne is variable mein ek function ko call kiya hai s liye ye object ban gaya hai
// console.log(app)

// app.listen ('3000' , ()=> {     // listen() Express ka method hai — iska kaam server ko start karna hota hai.
//                                 // ()=> { console.log("Hello Naddiya!") }
//                                 // Pehla part: Port number hota hai (yahan 3000)
//                                 // Doosra part: Callback function hota hai — wo tab run hota hai jab server successfully start ho jaye
// // console.log(`Server is running on http://localhost:3000`);
// console.log(hello)

// })
//     // Ye Express ka method hai jo route handle karta hai.
//     // '/' ka matlab hai: jab koi user website ka home page open kare (localhost:3000/)
//     // (req, res) → Request(user ki request ) aur Response(server ka response) objects miltay hain:
//     // 
//     // `` ye javascript ka tamplate literal hai is mein multiple lines add ker skty hain
// app.get('/',(req,res)=>{
//  res.send(`
//   <h2>Naddiya Sheraz</h2>
//   <p>Naddiya is a passionate Computer Science student.</p>
//   <p>She enjoys exploring web and mobile app development.</p>
//   <p>She is a morning person with a strong work ethic.</p>
//   <p>Naddiya loves to travel and discover new places.</p>
//   <p>She believes in continuous learning and self-growth.</p>
// `);
//  })

//  app.get('/about',(req,res)=>{
//     res.send(`
//         <p>Naddiya is a passionate Computer Science student.</p>
//         <p>She enjoys exploring web and mobile app development.</p>
//         <p>She is a morning person with a strong work ethic.</p>
//         <p>Naddiya loves to travel and discover new places.</p>
//         <p>She believes in continuous learning and self-growth.</p>
//         `);
//  }
// )

//  app.get('/contact',(req,res)=>{
//     res.send(`
//         <h2>contact to naddiya.</h2>
//         `);
//  }
// )


// // app.listen ('5000' , ()=> {  }),

// app.get('/contact/user/:id',(req,res)=>{
//     res.send(req.params);
//  }
// )

// app.get('/contact/:contactId/user/:userid',(req,res)=>{
//     res.send(req.params)
// })


// ///////////////////

// old path

app.listen('5000',()=>{
    console.log('hello world')
})
app.get('/',(req,res)=>{
    res.send(`dont go outside`)
})

app.get('/profile',(req,res)=>{
    res.send(`welcome to naddiya's profile`)
})

app.get('/product/:id', (req,res)=>{
    res.send(req.params)
})

app.get('/category/electronics/item/:id', (req,res)=>{
    res.send(req.params)
})

app.get('/admin/dashboard' , (req,res)=>{
    res.send('hello admin here, is dashboard')
})


// >>>>>>>>>>>>>>>> New Path<<<<<<<<<<<<<
app.listen('4000' , ()=>{

})
app.get('/user/info',(req,res)=>{
    res.send('<h2> user information page <h2/>')
})

app.get('/products/view/:id',(req,res)=>{
    res.send(`viewing product ID:${req.params.id}`)
})

app.get('/shop/:type/items/:itmeId',(req,res)=>{
    res.send(`shop:type ${req.params.type},<br> item ${req.params.itmeId}`)
})

app.get('/admin/panel/overview', (req,res)=>{
    res.send(  `<h2>Admin Panel Overviewn<h2/>`)
})