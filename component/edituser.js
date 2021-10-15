import React,{useState,useEffect} from 'react'
import { FormGroup,FormControl,InputLabel ,makeStyles,Button} from '@material-ui/core'
import { editData ,getupdateData} from '../api/api'
import { useHistory,useParams } from 'react-router'


const initalValue={First_name:'',
                   Last_name:'',
                  Email:'',
                 Employee_id:''
}
const useStyle=makeStyles({container:{width:'50%',margin:'5% 0% 0% 25%',padding:'3%', border:'solid','&>*':{marginTop:25}}})


const Edituser = () => {
    const classes=useStyle()
    const history=useHistory()
    const {id}=useParams()
    const[info,setInfo]=useState(initalValue)
    const {First_name,Last_name,Email,Employee_id}=info
    console.log(info)

    useEffect(()=>{
        loadData()
    },[])

const loadData=async()=>{
    let response =await getupdateData(id)
    setInfo(response.data)
}
   const submit=async ()=>{
       await editData(id,info)
        history.push('/')}
    return (
        <div>
        
            <FormGroup className={classes.container}>
            <h2>Edit USER</h2>
            <FormControl>
            <InputLabel htmlFor="my_input" >First_name</InputLabel>
            <input id="my_input" name="First_name" value={First_name} onChange={(e)=>{setInfo({...info,[e.target.name]:e.target.value})}}/>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my_input" >Last_name</InputLabel>
            <input id="my_input" name="Last_name" value={Last_name} onChange={(e)=>{setInfo({...info,[e.target.name]:e.target.value})}}/>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my_input"  >Email</InputLabel>
            <input id="my_input" name="Email" value={Email} onChange={(e)=>{setInfo({...info,[e.target.name]:e.target.value})}}/>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my_input" >Employee_id</InputLabel>
            <input id="my_input" name="Employee_id" value={Employee_id} onChange={(e)=>{setInfo({...info,[e.target.name]:e.target.value})}}/>
            </FormControl>
            <FormControl>
            <Button variant='contained' color='primary' onClick={()=>submit()}>Edit user</Button>
            </FormControl>
            </FormGroup>
        </div>
    )
}

export default Edituser
