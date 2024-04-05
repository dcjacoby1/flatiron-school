import {useState} from "react"
export default function Form({luckyNumber}) {
    const [get, setGet] = useState({name: "", movie: ""})
    
    function handleChange(event) {
        setGet({
            ...get,
            //for an object, using brackets allows you to put in a variable
            //in this case, we differentiate between the name and movie by identifying by name =
            [event.target.name] : event.target.value
        })
    }

    return (
        <form>
            <label><strong>Name </strong>
                <input name="name" value={get.name} onChange={handleChange} />
            </label>
            <br/><br/>
            <label><strong>Movie </strong>
            {/* name allows us to differentiate between the 2 */}
                <input name="movie" value={get.movie} onChange={handleChange}/>
            </label>
            <br/><br/>
            <em>Your lucky number is</em> <strong>{luckyNumber}</strong>!
            <br/><br/>
            <input type="submit" value="Sign Up"/>
            <h2>Members</h2>
            <sub>Fill out the form to add your first member!</sub>
        </form>
    )
}
