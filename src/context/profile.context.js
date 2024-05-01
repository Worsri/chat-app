import { createContext, useEffect ,useState,useContext} from "react";
import {auth, database} from '../misc/firebase';

const  ProfileContext = createContext();
export const ProfileProvider = ({children})=>{
  const [isLoading,setIsLoading]=useState(true)
  const [profile,setProfile] = useState(null);

  useEffect(() => {
    let userRef;
   const authUnsub = auth.onAuthStateChanged( authObj =>{
     
      if(authObj){
       userRef=database.ref(`/profiles/${authObj.uid}`);
        userRef.on('value',snap => {
          const  {name,createdAt}=snap.val();
            const data = {
              name,
              createdAt,
              uid: authObj.uid,
              email: authObj.email
            };
           setProfile(data);
           setIsLoading(false);
        console.log(data);
        }); 
       
      } else{
        if(userRef){
          userRef.off
        }
        setProfile(null);
        setIsLoading(false);
       
      }
    });
  return ()=>{
    authUnsub();
    if(userRef){
      userRef.off;
    }
  }
   
  }, [])
  
 
  return(

    <ProfileContext.Provider value={{isLoading,profile}}>
        {children}
    </ProfileContext.Provider>
  )
  
};

export const useProfile =  () => useContext(ProfileContext)