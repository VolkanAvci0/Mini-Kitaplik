export default function KategoriFiltre({ kategori, handleKategori, turler }) {
    return (
        <select className="kategori" value={kategori} onChange={handleKategori}>
            <option value="tum">Tümü</option>
            {
                turler.map(tur => <option key={tur} value={tur}>{tur}</option>)
            }
        </select>
    )
}