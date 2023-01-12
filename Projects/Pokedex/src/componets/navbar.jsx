import 'bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/navbar.css'

export const Navbar = () => {

    const [find, setFind] = useState('')

    const navigate = useNavigate()

    let type = (event) => {
        if (event.key == 'Enter' && event.target.value != '') {
            let word = event.target.value
            setFind(word)
            event.target.value = ''
            //console.log(find , 'save')
            navigate('/search')
        }
    }

   let handleChange = (event) => {
        setFind(event.target.value)
    }

    let handleSubmit = (event) => {
        event.preventDefault()
        event.target.value = ''
        //console.log(find , 'save')
        
        navigate('/search')
    }
    return (
        <div>
            <div className="navbar">

                <div className="title">
                    <h1>Pokedex</h1>
                </div>

                <div className='navEnd'>
                    <div>
                        <div className="d-flex" >
                            <input className="form-control me-2" type="search" placeholder="Ex. Charizard" aria-label="Search" onKeyDown={type} onChange={handleChange} />
                            <button className="btn btn-warning" type="submit" onClick={handleSubmit }>Search</button>
                        </div>
                    </div>

                    <div className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pokeball" width="100" height="100" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="9" cy="9" r="9" transform="translate(3 3)" /> <circle cx="12" cy="12" r="3" /> <path d="M3 12h6m6 0h6" /> </svg>
                    </div>
                </div>
            </div>
            <div className='grayBar'></div>
        </div>
    )
}
