import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import validate from './validate';
import './Form.css';

const Form = ()=>{
    const teams = useSelector(state => state.teams)
    const [ profile,setProfile ] = useState({
        name: {
            forename: ''
        },
        lastname: '',
        nationality: '',
        url: '',
        release: '',
        text: '',
        team: []
    })
    const [ selectTeam, setSelectedTeam ] = useState("")
    const [ errors, setErrors ] = useState({})

    const handleTeams = ()=>{
        const valueFound = profile.team.find(team => team === selectTeam)
        if(profile.team.length === 12) return window.alert('Too many teams')
        if(valueFound){
            window.alert(`${selectTeam} is already found`)
        }else if(selectTeam.length === 0){
            window.alert('Selected a team')
        }else{
            setProfile(prevProfile =>({
                ...prevProfile,
                team: [...prevProfile.team, selectTeam]
            }))
        }
    } 
    
    const handleDeleteTeam = (event)=>{
        const { id } = event.target
        const teamsFiltered = profile.team.filter(t => t !== id)
        setProfile(prevProfile =>({
            ...prevProfile,
            team: teamsFiltered
        }))
        return
    }

    const handleDriver = (event)=>{
        const { id, value } = event.target
        const valueNew = value.trim() ? value.split(" ").map(w => w[0].toUpperCase()+w.slice(1)).join(" ") : '';

        const validateError = validate({[id]:value})
        if(validateError) setErrors(prevErrors => ({
            ...prevErrors,
            [id]: validateError ? validateError[id] : null
        }))
        if(id === 'name' && !validateError.name){
            setProfile(prevProfile =>({
                ...prevProfile,
                name:{forename: valueNew}
            }))
        }
        if(id === 'lastname' && !validateError.lastname){
            setProfile(prevProfile =>({
                ...prevProfile,
                [id]: valueNew
            }))
        }
        if(id === 'nationality' && !validateError.nationality){
            setProfile(prevProfile =>({
                ...prevProfile,
                [id]: valueNew
            }))
        }
        if(id === 'url' || id === 'text'){
            if(!validateError.text){
                setProfile(prevProfile =>({
                    ...prevProfile,
                    [id]: value
                }))
            }
        }
    }

    const handleSubmit = async (event)=>{
        try {
            event.preventDefault()
            const response = await axios.post('http://localhost:3001/drivers/create',)
        } catch (error) {
            return window.alert(error.message)
        }
    }

    return(
        <div className="conteiner_form" >
            <div className='box_inputs' >
                    <h2>Driver details</h2>
                    <input placeholder="Name"
                           onChange={handleDriver}
                           id='name'
                           type="text"/>
                           <div className='p_errors' >
                                {errors? (<p>{errors.name}</p>):(null)}
                           </div>
                    <input placeholder="Lastname"
                           onChange={handleDriver} 
                           id='lastname' 
                           type="text"/> 
                           <div className='p_errors' >
                                {errors? (<p className='p_errors' >{errors.lastname}</p>):(null)}
                           </div>
                    <input placeholder="Nationality" 
                           onChange={handleDriver} 
                           id='nationality' 
                           type="text"/> 
                           <div className='p_errors' >
                                {errors? (<p className='p_errors' >{errors.nationality}</p>):(null)}
                           </div>
                    <input placeholder='Url image'
                           onChange={handleDriver} 
                           id='url' 
                           type="url"/> 
                           <div className='p_errors' >
                                {errors? (<p className='p_errors' >{errors.url}</p>):(null)}
                           </div>
                    <input type="date" 
                           onChange={handleDriver} 
                           id='release' />
                    <div className='box_texarea' >
                        <textarea onChange={handleDriver}
                                  placeholder="Description"
                                  id='text'
                                  type="text"/>
                                  <div className='p_errors' >
                                        {errors? (<p className='p_errors' >{errors.text}</p>):(null) }
                                  </div>
                    </div>
                    <div>
                        <select value={selectTeam} onChange={(e) => setSelectedTeam(e.target.value)} id="team">
                            <option value="">Select Team</option>
                            {teams.map(team =>{
                            return(
                                <option key={team.id} value={team.name}>{team.name}</option>
                                )
                            })}
                        </select> 
                        <button onClick={handleTeams}>Select</button>  
                    </div>
                    <div>
                        <button onClick={handleSubmit} >Create</button>
                    </div>
                    <div className='box_teams_map' >
                        {profile.team?.map(team =>{
                            return(
                                <div className='team_map' >
                                    <p>{team}</p>
                                    <svg id={team} onClick={handleDeleteTeam}
                                         xmlns="http://www.w3.org/2000/svg"
                                         width="15"  
                                         height="15"  
                                         viewBox="0 0 24 24"  
                                         fill="none"  
                                         stroke="currentColor" 
                                         stroke-width="3"  
                                         stroke-linecap="round"  
                                         stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M18 6l-12 12" />
                                        <path d="M6 6l12 12" />
                                    </svg>
                                </div>
                            )
                        })}
                    </div>
            </div>
            <div className='box_preview' >
                <h2>Preview</h2>
                <div className="box_card_form">
                    <div className='back_image'
                         style={{backgroundImage:`url(${profile.url})`,
                                 backgroundSize: 'cover',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundPosition: 'center', 
                                }} ></div>
                    {profile.url?(<img src={profile.url}  alt="" />):
                    (<svg  xmlns="http://www.w3.org/2000/svg"
                           width="100" 
                           height="100"
                           viewBox="0 0 24 24"  
                           fill="none"  
                           stroke="currentColor">
                       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                       <path d="M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                       <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                       <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                       <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                       <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                       <path d="M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" />
                    </svg>)}
                    {profile.name.forename && <h1>{profile.name.forename}</h1>}
                    {profile.lastname && <h2>{profile.lastname}</h2>}
                    {profile.nationality && <h4>{profile.nationality}</h4>}
                    {profile.release && <h4>{profile.release}</h4>}
                    {profile.text && <p>{profile.text}</p>}
                    <div>
                        {profile.team && <p>{profile.team.toString()}</p>}
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default Form;