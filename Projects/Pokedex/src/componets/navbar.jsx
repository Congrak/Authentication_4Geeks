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
                            <form className="nes-field d-flex" onSubmit={handleSubmit} >
                                <input className="nes-input" type="text" placeholder="Ex. Charizard" aria-label="Search" onChange={handleChange} value={keyword} />
                                <button className="nes-btn is-warning" type="submit" >Search</button>
                            </form>
                        </div>

                        <div className="logo">
                        <i class="nes-pokeball"></i>
                        </div>
                    </div>
            </div>
            <div className='grayBar'></div>
        </div>
    )
}
