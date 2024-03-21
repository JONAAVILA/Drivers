import { useState } from 'react';
import './Form.css';
import { useSelector } from 'react-redux';

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

    const handleTeams = (event)=>{
        const value = event.target.value
        const valueFound = profile.team.find(team => team === value)
        if(valueFound){
            window.alert(`${value} is already found`)
        }else{
            setProfile(prevProfile =>({
                ...prevProfile,
                team: [...prevProfile.team, value]
            }))
        }
    }   
    console.log(profile)
    

    return(
        <div className="conteiner_form" >
            <div>
                <div>
                    <h2>Driver details</h2>
                    <input placeholder="Name" value={profile.name.forename} id='name' type="text"/>
                    <input placeholder="Lastname" value={profile.lastname} type="text"/>
                    <input placeholder="Nationality" type="text"/>
                    <input placeholder='Url image' type="url"/>
                    <input type="date" />
                    <input placeholder="Description" type="text"/>
                    <div>
                        <select onChange={handleTeams} id="teams">
                            <option value="">Select team</option>
                            {teams.map(team =>{
                            return(
                                <option key={team.id} value={team.name}>{team.name}</option>
                                )
                            })}
                        </select>    
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