export function Card({ id, titre, contenu }) {
    return (
        <div
            key={id}
            className="w-full max-w-sm bg-black border border-green-400 rounded-2xl p-5 shadow-md shadow-green-200 hover:shadow-lg transition-shadow duration-300"
        >
            <h1 className="text-xl font-semibold text-pink-500 mb-2">{titre}</h1>
            <p className="text-sm text-white leading-relaxed">{contenu}</p>
        </div>

    )
}