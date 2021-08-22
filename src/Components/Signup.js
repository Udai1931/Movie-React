import React,{useState,useEffect,useContext} from 'react'
import {AuthContext} from '../Context/AuthProvider';
import {database } from '../firebase';
import { useHistory } from 'react-router-dom';
function Signup() {
    const [email,setEmail] =useState('');
    const[password,setPassword] = useState('');
    const [name,setName] =useState('');
    const[error,setError] = useState('');
    const[loading,setLoading] = useState(false);
    const history = useHistory();
    const {signup,currentUser} =useContext(AuthContext);
    const handleSignup =async (e)=>{
        e.preventDefault();
        try{
            setLoading(true);
            let res = await signup(email,password);
            let uid = res.user.uid;
            console.log(uid);
            await database.users.doc(uid).set({
                email:email,
                userId:uid,
                username:name,
                movies:[]
            })
            setLoading(false);
            console.log('User has Signed up');
            history.push('/');
        }
        catch(err){
            setError(err)
            setTimeout(()=>setError(''),2000);
            setLoading(false)
        }
    }
    useEffect(()=>{
        if(currentUser)
        {
          history.push('/')
        }
      },[])
    return (
        <div>
            <form onSubmit={handleSignup} >
                <div>
                    <label htmlFor=''>UserName</label>
                    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>

                </div>
                <div>
                <label htmlFor=''>Email</label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                <label htmlFor=''>Password</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type='submit' disabled={loading}>SignUp</button>
            </form>
        </div>
    )
}

export default Signup