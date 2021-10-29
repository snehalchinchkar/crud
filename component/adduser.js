 import React,{useState} from 'react'
import { FormGroup,FormControl,InputLabel ,makeStyles,Button} from '@material-ui/core'
import { postData } from '../api/api'
import { useHistory } from 'react-router'
import { Email } from '@material-ui/icons'


const initalValue={First_name:'',
                   Last_name:'',
                  Email:'',
                 Employee_id:''
}
const useStyle=makeStyles({container:{width:'50%',margin:'5% 0% 0% 25%',padding:'3%', border:'solid','&>*':{marginTop:25}}})


const Adduser = () => {
    const classes=useStyle()
    const history=useHistory()
    const[info,setInfo]=useState(initalValue)
    const[error,setError]=useState('')
    const[error1,setError1]=useState('')
    const[error2,setError2]=useState('')
    const[error3,setError3]=useState('')
    console.log(info)

    const valid=()=>{

        if(info.Email.indexOf('@')<=0 )
        {setError('Invalid Email')

  }
  
      else if(info.Email.charAt(info.Email.length-4)!='.')
      {
        setError('Invalid Email .')
     
  }
  
    else if(info.First_name=='')
      {setError1('mandetory filed')
      }
       
    else if(info.Last_name=='')
    {setError2('mandetory filed')}
     else if(info.Employee_id=='')
     {setError3('mandetory filed')}
  

      else{return true}

    }

   const submit=async ()=>{

       
    if(valid())
{
     await postData(info)
        history.push('./')}
        console.log(info.Email)
}
    return (
        <div>
        
            <FormGroup className={classes.container}>
            <h2>ADD USER</h2>
            <FormControl>
            <InputLabel htmlFor="my_input" >First_name</InputLabel>
            <span id='error2' style={{color:'red'}}>{error1}</span>
            <input id="my_input" name="First_name"  required onChange={(e)=>{setInfo({...info,[e.target.name]:e.target.value})}}/>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my_input" >Last_name</InputLabel>
            <span id='error3' style={{color:'red'}}>{error2}</span>
            <input id="my_input" name="Last_name" onChange={(e)=>{setInfo({...info,[e.target.name]:e.target.value})}}/>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my_input" >Email</InputLabel>
            
            <span id='error' style={{color:'red'}}>{error}</span>
            <input id="my_input"  name="Email" onChange={(e)=>{setInfo({...info,[e.target.name]:e.target.value})}}/>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my_input" >Employee_id</InputLabel>
            <span id='error4' style={{color:'red'}}>{error3}</span>
            <input id="my_input" name="Employee_id" onChange={(e)=>{setInfo({...info,[e.target.name]:e.target.value})}}/>
            </FormControl>
            <FormControl>
            <Button variant='contained' color='primary' onClick={()=>submit()}>Add user</Button>
            </FormControl>
            </FormGroup>
        </div>
    )
}

export default Adduser

