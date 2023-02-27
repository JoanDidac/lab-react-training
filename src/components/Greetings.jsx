
// import IdCard from './components/IdCard';
// import usersArray from './components/Data.jsx';

const Greeting = (props) => {

    const { language, children } = props; //children = firstName?
    

let lang = '';

    switch (language) {
        case "de":
            lang='Hallo';
        break;
        case "en":  
           lang =  "Hello";
        break;
        case "sp":
           lang =  "Hola";
        break;
        case "fr":
            lang = "Bonjour";
        break;
         default:
        break;
        
    };

    return (
        <div className='card-container' >
            <div className='card'>
                <h2>{lang} {children}</h2>
                


            </div>

        </div>
    )
}

export default Greeting;