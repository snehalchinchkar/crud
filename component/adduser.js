import React,{useState} from 'react'
import { FormGroup,FormControl,InputLabel ,makeStyles,Button} from '@material-ui/core'
import { postData } from '../api/api'
import { useHistory } from 'react-router'


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
    console.log(info)

   const submit=async ()=>{
       await postData(info)
        history.push('./')}
    return (
        <div>
        
            <FormGroup className={classes.container}>
            <h2>ADD USER</h2>
            <FormControl>
            <InputLabel htmlFor="my_input" >First_name</InputLabel>
            <input id="my_input" name="First_name" onChange={(e)=>{setInfo({...info,[e.target.name]:e.target.value})}}/>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my_input" >Last_name</InputLabel>
            <input id="my_input" name="Last_name" onChange={(e)=>{setInfo({...info,[e.target.name]:e.target.value})}}/>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my_input" name="Email" >Email</InputLabel>
            <input id="my_input" onChange={(e)=>{setInfo({...info,[e.target.name]:e.target.value})}}/>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my_input" >Employee_id</InputLabel>
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
