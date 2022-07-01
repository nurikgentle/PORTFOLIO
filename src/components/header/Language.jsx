import { useState } from "react";
import { Link } from "react-router-dom";


function Language({ selected, setSelected }) {

    


  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
            {selected}
        </div>
        {isActive && (
            <div id="remove" className="dropdown-content">
                <Link onClick={click => {
                    if(click) {
                        document.getElementById('remove').style.display = 'none'
                    }
                }} className="unique" to='/'>
                    <div onClick={e => setSelected(e.target.textContent)} className="dropdown-item">
                        Русский
                    </div>
                </Link>
                
                <Link onClick={click => {
                    if(click) {
                        document.getElementById('remove').style.display = 'none'
                    }
                }} className="unique" to='/en'>
                <div onClick={e => setSelected(e.target.textContent)} className="dropdown-item">
                    English
                </div>
                </Link>

                <Link onClick={click => {
                    if(click) {
                        document.getElementById('remove').style.display = 'none'
                    }
                }}  className="unique" to='/k'>
                <div onClick={e => setSelected(e.target.textContent)} className="dropdown-item">
                    Кыргызча
                </div>
                </Link>
            </div>
        )
        }
    </div>
  );
}

export default Language;
