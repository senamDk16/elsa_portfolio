export function Reseau ({id,link,image}){

    return (
        <a key={id} href={link} target="_blank">
            <img src={image} alt="reseau" className="w-6 h-6 text-white"/>
        </a> 
    )
}