import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../Fire key/Firekey';
import Loading from '../Loading/Loading';





const Checkout = () => {

    // state change
    const [quantity , setQuantity] = useState(0)
    console.log(quantity)

    const { id } = useParams()

    // user handel 
    const [user] = useAuthState(auth)
    // react hook form
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    //  


    const { data: idwiseproduct, isLoading , refetch  } = useQuery([ id,'products'], () =>
    fetch(`http://localhost:8000/products/${id}`).then(res =>
      res.json()
    )
  )

  if(isLoading){
      return <Loading></Loading>
  }

  console.log(quantity , idwiseproduct.price)


//   submit handel
const submit = (event) => {
    event.preventDefault();
    const details= {
        email : event.target.email.value,
        productname: event.target.productname.value,
        order: event.target.order.value,
        totalprice: event.target.totalprice.value
    }
    console.log(event.target , event.target);

    fetch("http://localhost:8000/orders", {
        method: 'POST', 
        headers: {                    
            'Content-Type': 'application/json' ,            
        },
        body: JSON.stringify(details),
    })
    .then(res=> res.json())
    .then(data => {
        if(data.insertedId){
            Swal.fire({
                icon: 'success',
                title: 'Products add done',

            })
            refetch()
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Try again',

            })
            refetch()
        }
        
       })
}

    return (
        <div>
        <div className="card lg:card-side bg-base-100 shadow-xl container w-[70%] mt-[150px]">
            <figure><img className='shrink-0' src={idwiseproduct.img} alt="Album" /></figure>
            <div className="card-body basis-2/3">
                <h2 className="card-title text-extrabold text-2xl font-serif"> {idwiseproduct.pname} </h2>
                <p className='text-left'> {idwiseproduct.description} </p>
                <p className='text-left font-extrabold font-serif text-2xl mt-2 text-[#FC5A34]'> price: $ {idwiseproduct.price} </p>
                <p className='text-left font-extrabold font-serif text-2xl mt-2 text-[#E81938]'> minimumQuantity : {idwiseproduct.minimumQuantity} </p>
                <p className='text-left font-extrabold font-serif text-2xl mt-2 text-[#6e1825]'> in Stock : {idwiseproduct.qunatity
} </p>

                <form  onSubmit={submit} >
                        <input
                            type="text"
                            value={user?.email}
                            readOnly
                            className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            name='email'
                            required
                        />
                           <input
                            type="text"
                            placeholder="Type your products name"
                            readOnly
                           value={idwiseproduct?.pname}
                            className="mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            name='productname'
                            
                        />
                           <input
                           required
                            type="number"
                            onChange={ (e)=> setQuantity(e.target.value)}
                            placeholder="Type your products quantity"
                            className="mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            min={idwiseproduct?.minimumQuantity}
                            name='order'
                            
                        /> 
                           <input
                            type="totalprice"
                            value={+quantity * +idwiseproduct.price}
                           placeholder="price"
                            className="mt-3 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            name='totalprice'
                           required
                        />
                        {console.log(+quantity * +idwiseproduct.price)}
                        <input
                                        className='w-40 mt-4 className="w-full flex justify-center bg-gradient-to-r from-[#FC5A34] to-[#BB1D34]  hover:bg-gradient-to-l hover:from-[#FC5A34] hover:to-[#E81938]  text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"'
                                        type="submit" />
                    </form>

            </div>

        </div>
        </div>
    );
};

export default Checkout;




// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
// import { useQuery } from 'react-query';
// import { useParams } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import auth from '../Fire key/Firekey';
// import Loading from '../Loading/Loading';





// const Checkout = () => {

//     const { id } = useParams()

//     // user handel 
//     const [user] = useAuthState(auth)
//     // react hook form
//     const { register, formState: { errors }, handleSubmit, reset } = useForm();
//     //  


//     const { data: idwiseproduct, isLoading, refetch } = useQuery([id, 'products'], () =>
//         fetch(`http://localhost:8000/products/${id}`).then(res =>
//             res.json()
//         )
//     )

//     if (isLoading) {
//         return <Loading></Loading>
//     }


//     // 
//     const [quantity, setQuantity] = useState(0)

// 	// useEffect(() => setQuantity(minOrderQuantity), [minOrderQuantity])

// 	// const [err, setErr] = useState("This product is available soon")


// 	const handlePurchase = (event) => {
// 		event.preventDefault()
// 		const bookingInfo = {
// 			title: "",
// 			partTitle: "",
// 			// partId: partId,
// 			quantity: event.target.quantity.value,
// 			totalPrice: +price * +quantity,
// 			userEmail: user.email,
// 			address: event.target.address.value,
// 			phone: event.target.phone.value,
// 			paid: false,
// 			// imageUrl,
// 			// category,
// 		}
// 		({
// 			method: "POST",
// 			url: "https://manufacturer-website-server.herokuapp.com/booking",
// 			data: bookingInfo,
// 		}).then(({ data }) => {
// 			if (data?.data?._id) {
				
			
// 			}
// 		})
// 	}


//     return (
//         <div>
//             <div className="card lg:card-side bg-base-100 shadow-xl container w-[70%] mt-[150px]">
//                 <figure><img className='shrink-0' src={idwiseproduct.img} alt="Album" /></figure>
//                 <div className="card-body basis-2/3">
//                     <h2 className="card-title text-extrabold text-2xl font-serif"> {idwiseproduct.pname} </h2>
//                     <p className='text-left'> {idwiseproduct.description} </p>
//                     <p className='text-left font-extrabold font-serif text-2xl mt-2 text-[#FC5A34]'> price: $ {idwiseproduct.price} </p>
//                     <p className='text-left font-extrabold font-serif text-2xl mt-2 text-[#E81938]'> minimumQuantity : {idwiseproduct.minimumQuantity} </p>
                
//                     <form onSubmit={handlePurchase} className="">
// 						<div className="w-full p-4 px-5 py-5">
// 							<div className="flex flex-row mb-8">
// 								<h2 className="text-3xl font-semibold">
// 									Spark
// 								</h2>
// 								<h2 className="text-3xl text-green-400 font-semibold ml-4">
// 									Manufacturer
// 								</h2>
// 							</div>
// 							<span>Customer Information</span>

// 							<div className="mt-4">
// 								<div className="flex items-center justify-between">
// 									<label
// 										htmlFor="email"
// 										className="block text-sm   dark:text-gray-200"
// 									>
// 										Email
// 									</label>
// 								</div>

// 								<input
// 									type="text"
// 									name="email"
// 									defaultValue={user?.email}
// 									disabled
// 									className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
// 								/>
// 							</div>
// 							<div className="mt-4">
// 								<div className="flex items-center justify-between">
// 									<label
// 										htmlFor="password"
// 										className="block text-sm   dark:text-gray-200"
// 									>
// 										Full name
// 									</label>
// 								</div>

// 								<input
// 									type="text"
// 									name="name"
// 									defaultValue={user?.displayName}
// 									disabled
// 									className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
// 								/>
// 							</div>
// 							<span className="pt-6 pb-2 block">
// 								Shipping Address
// 							</span>
// 							<div className="grid md:grid-cols-2 md:gap-2"></div>
// 							<div  className="mt-4">
// 								<div className="flex items-center justify-between">
// 									<label
// 										htmlFor="part_name"
// 										className="block text-sm   dark:text-gray-200"
// 									>
// 										Parts name
// 									</label>
// 								</div>

// 								<input
// 									type="text"
// 									name="part_name"
// 									// defaultValue={title}
// 									disabled
// 									className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
// 								/>
// 							</div>
// 							<div className="mt-4">
// 								<div className="flex items-center justify-between">
// 									<label
// 										htmlFor="part_name"
// 										className="block text-sm   dark:text-gray-200"
// 									>
// 										Category
// 									</label>
// 								</div>

// 								<input
// 									type="text"
// 									name="part_name"
// 									defaultValue={category}
// 									disabled
// 									className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
// 								/>
// 							</div>
// 							<div className="mt-4">
// 								<div className="flex items-center justify-between">
// 									<label
// 										htmlFor="quantity"
// 										className="block text-sm   dark:text-gray-200"
// 									>
// 										Quantity
// 									</label>
// 									<p className="block text-md font-bold   dark:text-gray-200">
// 										Available : {10000}
// 									</p>
// 								</div>

// 								<input
// 									type="number"
// 									name="quantity"
// 									onChange={(e) =>
// 										setQuantity(e.target.value)
// 									}
// 									defaultValue={minOrderQuantity}
// 									min={minOrderQuantity}
// 									max={availableQuantity}
// 									required
// 									className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
// 								/>


// 								<p className="block text-md font-bold   dark:text-gray-200">
// 									Price : {price}
// 								</p>
// 								<p className="text-red-600 text-sm ">{err}</p>
// 							</div>
// 							<div className="mt-4">
// 								<div className="flex items-center justify-between">
// 									<label
// 										htmlFor="password"
// 										className="block text-sm   dark:text-gray-200"
// 									>
// 										Address
// 									</label>
// 								</div>

// 								<input
// 									type="text"
// 									required
// 									name="address"
// 									className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
// 								/>
// 							</div>
// 							<div className="mt-4">
// 								<div className="flex items-center justify-between">
// 									<label
// 										htmlFor="password"
// 										className="block text-sm   dark:text-gray-200"
// 									>
// 										Phone
// 									</label>
// 								</div>

// 								<input
// 									required
// 									type="number"
// 									name="phone"
// 									className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
// 								/>
// 							</div>
// 							<p className="text-bold text-3xl text-center py-4 ">
// 								Total = ${+price * +quantity}
// 							</p>
// 							<div className="flex justify-between items-center pt-2">
// 								<button
// 									type="button"
									
// 									className="h-12 w-24 text-blue-500 text-xs font-medium"
// 								>
// 									Back
// 								</button>
// 								{/* <input
// 									disabled={err !== ""}
// 									type="submit"
// 									className="h-12 w-48 rounded btn btn-primary"
// 									value={"Confirm purchase"}
// 								/> */}
// 							</div>
// 						</div>
// 					</form>

//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Checkout;






