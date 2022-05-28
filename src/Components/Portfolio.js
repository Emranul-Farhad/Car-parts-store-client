import React from 'react';




const Portfolio = () => {
    return (
        <div className='mt-[100px]'>
            <div>
                <h1 className='text-2xl font-bold text-slate-600'> Name  : Emranul Farhad </h1>
                <p className='text-center'> (MernStack developer , Student) </p>
                <h1 className='text-2xl font-bold text-slate-600 mb-2'> Email : emranulfarhad@gmail.comm </h1>
            </div>
            <div>
                <h1 className='text-2xl font-bold text-slate-600'>Educational background :</h1>
                <ul>
                    <li> JSC : (GPA: 4.75) </li>
                  <li>SSC: GPA(4.45) </li>
                </ul>
            </div>
            <h1 className='text-2xl font-bold text-slate-600'> Technology Taht I Know : </h1>
            <ul>
                <li>Javascript</li>
                <li>React.Js</li>
                <li>Node.js</li>
                <li>Mongodn</li>
                <li>Html,css</li>
                <li>Bootstrap 5</li>
                <li>Tailwind</li>
            </ul>
            <div>
                <h1 className='text-2xl font-bold text-slate-600'> My Best 3 projects : </h1>
                <ul>
                    <li><a target="blank" href="https://doctor-porta-74bcf.firebaseapp.com/"> Perfume site </a></li>
                    <li><a target="blank" href="https://doctor-porta-74bcf.firebaseapp.com/"> Car site </a></li>
                    <li><a target="blank" href="https://doctor-porta-74bcf.firebaseapp.com/"> Instructory Clone </a></li>
                </ul>
            </div>
        </div>
    );
};

export default Portfolio;