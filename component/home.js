import react, {useState,useEffect} from 'react'
import {deleteData, getData} from '../api/api'
import {Table,TableHead,TableRow,TableBody,TableCell,Button,makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@material-ui/core';


const useStyle=makeStyles({table:{width:'90%',margin:'50px 0 0 50px'},
  tableh:{background:'black',color:'white',fontSize:'20px'},
clr:{background:'green'}})


const Home = () => {
    const [Users,setUsers]=useState([])
    const [search,setSearch]=useState('')
    const classes =useStyle()
console.log(search)
console.log(Users)
    useEffect(() => {
     getAlldata()
    }, [])

    const getAlldata=async()=>{
        let response=await getData()
        //console.log(response)
        setUsers(response.data)

    }

    const User=Users.filter((ele)=>ele.First_name.toLowerCase().indexOf(search)>=0 || ele.Last_name.toLowerCase().indexOf(search)>=0)

    const deleteuser=async(id)=>{
      await deleteData(id)
    getAlldata()
    }
    console.log(User)
    return (
        <div>
        <h1 style={{margin:'5%0%1%30%'}}>Employee Details</h1>
      <span style={{margin:'2%0%5%30%'}}>
     <TextField
        label="search"
        onChange={(e)=>{setSearch(e.target.value)}} value={search} InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
<Link to='/add' style={{textDecoration:'none'}}><Button variant='contained' color='primary' className={classes.clr}>Add Employee</Button></Link>
      </span><hr/>
        <Table className={classes.table}>
        <TableHead >
          <TableRow>
            <TableCell className={classes.tableh}>First name</TableCell>
            <TableCell className={classes.tableh}>Last name</TableCell>
            <TableCell className={classes.tableh}>Email id</TableCell>
            <TableCell className={classes.tableh}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {User.map((ele)=>{return <TableRow key={ele.id}>
          <TableCell>{ele.First_name}</TableCell> 
          <TableCell>{ele.Last_name}</TableCell>
          <TableCell>{ele.Email}</TableCell>
          <TableCell>
                  <Link to={`/edit/${ele.id}`} style={{textDecoration:'none'}}> <Button color="primary" variant="contained" style={{marginRight:'10px'}} >Edit</Button></Link>
                     <Button color="secondary" variant="contained" onClick={()=>deleteuser(ele.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        })}
          
        </TableBody>
      </Table>
        </div>
    )
}

export default Home
