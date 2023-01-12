import 'bootstrap'
import { useState } from 'react'
import { useNavigate , Link } from 'react-router-dom';
import App from '../views/App';
import '../style/navbar.css'

export const Navbar = () => {

    const [keyword, setKeyword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/search/${keyword}`)
    }

    const handleChange = (event) => {
        setKeyword(event.target.value)
    }
    return (
        <div>
            <div className="navbar">

                    <div className="title" onClick={() => navigate('/')}>
                        <img src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png' alt='Logo' />
                    </div>
                    <div className='navEnd'>
                        <div>
                            <form className="d-flex" onSubmit={handleSubmit} >
                                <input className="form-control me-2" type="text" placeholder="Ex. Charizard" aria-label="Search" onChange={handleChange} value={keyword} />
                                <button className="btn btn-warning" type="submit" >Search</button>
                            </form>
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
