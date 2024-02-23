# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved heimport React from 'react'
import com1 from '../assests/envato.png';
import com2 from '../assests/google.png';
import com3 from '../assests/sketch.png';
import com4 from '../assests/google.png';
import footerimage from '../assests/footermobile.png';

import footersection from '../assests/footersection.png';
import { IoDiamond } from "react-icons/io5";

const Trustedcompany = () => {
  return (
    <div className='w-full h-[100vh]  flex flex-col justify-start items-center'>
    <div className=' flex flex-col gap-5 m-auto justify-start items-center'>
        <div className=' flex gap-12 px-5'>
            <img src={com2} alt='companies'></img>
            <img src={com3} alt='companies'></img>
            <img src={com4} alt='companies'></img>
            <img src={com1} alt='companies'></img>
        </div>
        <div className='flex gap-5 px-8'>
             <div className='w-[30px] h-[30px] bg-[#ffc107] shadow-[#ffc107]-xl flex justify-center items-center rounded-full'>
             <IoDiamond className='w-7 h-7 text-[white]'/>
             </div>
             <div className='flex flex-col justify-start'>
                <p className='font-bold'>Trusted by 12,00 companies!</p>
                <p className='font-semibold text-gray-600'>We have more than 1200+ trusted clients around World wide.</p>
             </div>
        </div>
       
        
        <img className='relative w-full md:h-[300px] h-[300px]' src={footersection} alt='footer'></img>
          <div className=' absolute w-full  m-auto grid md:grid-cols-3 grid-cols-1 '>
            <div className='relative w-full h-full col-span-2 flex flex-col items-center justify-center gap-3 md:top-0 top-[220px] p-5'  >
            <p className=' relative text-5xl font-bold text-[white] '>Subscribe to our newsletter</p>
            <div class='relative w-full max-w-[500px] h-[50px] bg-white rounded-full flex items-center p-2'>
           <input type="email" id="email" name="email" placeholder="Enter your email" class=" px-4 flex-grow appearance-none bg-transparent text-gray-700 focus:outline-none"></input>
           <button class="ml-2 px-7 py-4 bg-[red] rounded-full text-white">Subscribe Now</button>
             </div>
            <p className='relative text-[white] text-[15px] '>* Your mail address will be fully secure . We don’t share!</p>
            </div>
            <div className='hidden md:block'>
            <img className="relative top-[-0px]" src={footerimage} alt='mob'></img>
            </div>

            
        </div>
        </div>
    </div>
  )
}

export default Trustedcompanyre: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
