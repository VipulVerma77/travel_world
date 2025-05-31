import React, { useEffect } from 'react'
import { redirect, useNavigate } from 'react-router';
import { getExistingUser, logoutUser, storeUserData } from '~/appwrite/auth';
import { account } from '~/appwrite/client';



const PageLayout = () => {

   const navigate = useNavigate();

    // useEffect(() => {
    //     const checkUser = async () => {
    //         try {
    //             const user = await account.get();
                

    //             if (!user.$id) {
    //                 navigate('/sign-in');
    //                 return;
    //             }

    //             const existingUser = await getExistingUser(user.$id);
    //                 console.log(existingUser);
    //             if (existingUser?.status === 'admin') {
    //                 navigate('/dashboard');
    //                 return;
    //             }
    //             if (existingUser?.status === "user") {
    //                 navigate('/sign-in');
    //                 return;
    //             }

    //             if (!existingUser?.$id) {
    //                 await storeUserData();
    //             }
    //         } catch (e) {
    //             console.error('Error in useEffect', e);
    //             navigate('/sign-in');
    //         }
    //     };

    //     checkUser();
    // }, [navigate]);

    const handleLogout = async () => {
        await logoutUser();
        navigate('/sign-in')
    }
  return (
    <div className="travel-detail wrapper">
                    <button
                        onClick={handleLogout}
                        className="cursor-pointer"
                    >
                       Go Back to login
                    </button>
                    <button
                        onClick={()=>{navigate('/dashboard')}}
                        className="cursor-pointer"
                    >
                        Go to Dashboard 
                    </button>

                    This section is under development
                </div>
  )
}

export default PageLayout
