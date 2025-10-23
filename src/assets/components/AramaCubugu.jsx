export default function AramaCubugu({aramaMetni, setAramaMetni}) {
    const handleChange = (event) => {
        setAramaMetni(event.target.value);
        localStorage.setItem("aramaMetni", event.target.value);
    }

    return (
        <input className="arama" type="text" placeholder="Kitap veya yazar ara..." value={aramaMetni}
               onChange={handleChange}/>
    )
}