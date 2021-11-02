import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const dataAwal = [
    {
      id : 1,
      username : 'alief',
      email : 'alief@gmail.com',
      exp : '90',
      lvl : 10
    },
    {
      id : 2,
      username : 'uzan',
      email : 'uzan@gmail.com',
      exp : '80',
      lvl : 10
    }
  ]

  const addData = () => {
    // let dataBaru = {
    //   username : '',
    //   email : '',
    //   exp : '',
    //   lvl : 1
    // }
    setPlayer([...player, formPlayer])
    setFormPlayer({
      username : '',
      email : '',
      exp : '',
      lvl : 1
    })
  }

  const [formPlayer, setFormPlayer] = useState({
      username : '',
      email : '',
      exp : '',
      lvl : 10
  })

  const [formEditPlayer, setFormEditPlayer] = useState({
    id : '',
    username : '',
    email : '',
    exp : '',
    lvl : ''
})

  const [player, setPlayer] = useState([
    {
      id : 1,
      username : 'alief',
      email : 'alief@gmail.com',
      exp : '90',
      lvl : 10
    },
    {
      id : 2,
      username : 'uzan',
      email : 'uzan@gmail.com',
      exp : '80',
      lvl : 10
    }
  ])

  const changeHandler = (e) => {
    // console.log(e.target.value)
    setFormPlayer({
      ...formPlayer, [e.target.name] : e.target.value
    })
  }

  const changeHandlerEdit = (e) => {
    // console.log(e.target.value)
    setFormEditPlayer({
      ...formEditPlayer, [e.target.name] : e.target.value
    })
  }

  const [search, setSearch] = useState("")

  const searchHandler = (e) => {
    setSearch(e.target.value)
  }

  const searchClick = (e) => {
    let playerTemp = dataAwal
    let playerFinal = playerTemp.filter((el) => {
      if(el.username.search(search) >= 0 || el.email.search(search) >= 0 || el.exp.search(search) >= 0){
        console.log(el.username.search(search))
        return el
      }
    })
    if(search == ""){
      setPlayer(dataAwal)
    }else{
      setPlayer(playerFinal)
    }
  }

  const editData = (id) => {
    player.filter((el) => {
      if(el.id === id){
        console.log('ini data yang mau diedit', el)
        setFormEditPlayer(el)
      }
    })
  }

  const btnEditData = () => {
    let playerTemp = player
    let find = player.findIndex((el) => el.id == formEditPlayer.id)
    playerTemp[find].username = formEditPlayer.username
    playerTemp[find].email = formEditPlayer.email
    playerTemp[find].exp = formEditPlayer.exp
    playerTemp[find].lvl = formEditPlayer.lvl
    setPlayer(playerTemp)
    setFormEditPlayer({
      username : '',
      email : '',
      exp : '',
      lvl : ''
    })
  }

  return (
    <div className="App">
      <input type="text" value={search} onChange={searchHandler}/>
      <button onClick={searchClick}>Search</button>
      {
        player.map((item, index) => {
          return(
            <>
              <h5>Username : {item.username}</h5>
              <h5>Email : {item.email}</h5>
              <h5>Exp : {item.exp}</h5>
              <h5>Level : {item.lvl}</h5>
              <button onClick={() =>editData(item.id)}>Edit</button>
            </>
          )
        })
      }
      <br></br>
      <input type="text" name ="username" value={formPlayer.username} onChange={changeHandler}></input>
      <button onClick={addData}>Tambah</button>

      <hr />
      <input type="text" name ="username" value={formEditPlayer.username} onChange={changeHandlerEdit}></input>
      <input type="text" name ="email" value={formEditPlayer.email} onChange={changeHandlerEdit}></input>
      <input type="text" name ="exp" value={formEditPlayer.exp} onChange={changeHandlerEdit}></input>
      <input type="text" name ="lvl" value={formEditPlayer.lvl} onChange={changeHandlerEdit}></input>
      <button onClick={btnEditData}>Submit</button>
    </div>
  );
}

export default App;
