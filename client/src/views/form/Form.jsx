import { useState } from 'react';
import './Form.css';
import { useSelector } from 'react-redux';
import validate from './validate';

const Form = ()=>{
    const teams = useSelector(state => state.teams)
    const [ profile,setProfile ] = useState({
        name: {
            forename: ''
        },
        lastname: '',
        nationality: '',
        image: '',
        release: '',
        description: '',
        team: []
    })
    const [ selectTeam, setSelectedTeam ] = useState("")

    const handleTeams = ()=>{
        const valueFound = profile.team.find(team => team === selectTeam)
        if(valueFound ){
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
    
    const handleInfoDriver = (event)=>{

    }
    

    return(
        <div className="conteiner_form" >
            <div>
                <div>
                    <h2>Driver details</h2>
                    <input placeholder="Name" id='name' type="text"/>
                    <input placeholder="Lastname" id='lastname' type="text"/>
                    <input placeholder="Nationality" id='nationality' type="text"/>
                    <input placeholder='Url image' id='image' type="url"/>
                    <input type="date" id='release' />
                    <input placeholder="Description" id='description' type="text"/>
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
                    <div className='box_teams_map' >
                        {profile.team.map(team =>{
                            return(
                                <p>{team}</p>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <button>Create</button>
                </div>
            </div>
            <div>
                <h2>Preview</h2>
                <div>
                <div className="box_card">
                                <div className="image_back_profile" style={{backgroundImage:`url()`,
                                                                            backgroundSize: 'cover',
                                                                            backgroundRepeat: 'no-repeat',
                                                                            backgroundPosition: 'center', 
                                                                        }} ></div>
                                {profile.image.url?(<img  alt="" />):(<svg  xmlns="http://www.w3.org/2000/svg"
                                                                                                 width="100" 
                                                                                                 height="100"
                                                                                                 viewBox="0 0 24 24"  
                                                                                                 fill="none"  
                                                                                                 stroke="currentColor" 
                                                                                                 >
                                                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                                                <path d="M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                                                                <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                                                                                                <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                                                                                                <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                                                                                                <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                                                                                                <path d="M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" />
                                                                                            </svg>)}
                                <h1>{profile.name.forename}</h1>
                                <div className="box_teams">
                                    <p>{profile.team.toString()}</p>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default Form;