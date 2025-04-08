import { Section } from "../components/Section";
import photoProfil from "../assets/elsa2.jpg";
import cv from "../assets/cv.png";
import email from "../assets/email-1.svg";
import facebook from "../assets/facebook-1.svg";
import instagram from "../assets/instagram-1.svg";
import tikTok from "../assets/tiktok-1.svg";
import whatsapp from "../assets/whatsapp-1.svg";
import { Reseau } from "../components/Reseau.jsx";
import { Card } from "../components/Card.jsx";
import Headers from "../components/Headers.jsx";

export function HomePages() {

    const listReseau = [
        {
            id: 1,
            link: "https://www.facebook.com/profile.php?id=100075832762195&sk=photos",
            image: facebook
        },
        {
            id: 2,
            link: "https://mail.google.com/mail/?view=cm&to=elsagodly@gmail.com",
            image: email
        },
        {
            id: 3,
            link: "https://www.instagram.com/elsaby_him/",
            image: instagram
        },
        {
            id: 4,
            link: "https://www.tiktok.com/@atideka1",
            image: tikTok
        },
        {
            id: 5,
            link: " https://wa.me/228706849",
            image: whatsapp
        },
    ]

    const listSkills = [
        {
            id: 1,
            titre: "Communication",
            contenu: "Je vous accompagne dans la création d’une image de marque forte, la gestion de vos réseaux sociaux et le développement de votre visibilité en ligne. Créativité, clarté et impact sont mes maîtres-mots."
        },
        {
            id: 2,
            titre: "Capcut",
            contenu: "Création de vidéos dynamiques et percutantes pour réseaux sociaux, promos, stories ou contenus YouTube. Transitions fluides, effets modernes et storytelling visuel au rendez-vous."
        },
        {
            id: 3,
            titre: "Canva",
            contenu: "Visuels professionnels pour vos publications, flyers, présentations et identités visuelles. Simples, efficaces, toujours au goût du jour."
        }
    ]


    const listService = [
        {
            "id": 1,
            "titre": "Projet vidéos",
            "description": "Création et montage de contenus vidéos engageants pour réseaux sociaux, événements ou campagnes promotionnelles."
        },
        {
            "id": 2,
            "titre": "Gestion de communauté",
            "description": "Animation des réseaux sociaux, modération, interaction avec la communauté et création de contenu adapté à chaque audience."
        },
        {
            "id": 3,
            "titre": "Communication Interne",
            "description": "Mise en place de supports et stratégies pour améliorer la circulation de l'information au sein d'une organisation."
        },
        {
            "id": 4,
            "titre": "Analyse de Données",
            "description": "Collecte et interprétation de données pour optimiser les performances des actions de communication et marketing."
        }
    ]


    return (
        <>
            <Headers />
            <Section id="home">
                <div className="w-full px-4 sm:px-12 mt-24 sm:mt-32 flex flex-col-reverse sm:flex-row items-center justify-between gap-10">


                    <div className="flex-1 text-center sm:text-left space-y-4">
                        <p className="text-lg text-gray-600">I'm</p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-pink-600">Elsa TASSOU</h1>
                        <p className="text-base sm:text-lg text-white">
                            Étudiante en psychologie, social media manager et vidéaste passionnée par l’image et la communication.
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">

                            <a
                                href=" https://wa.me/228706849"
                                className="px-6 py-3 bg-green-400 text-black font-semibold rounded-xl shadow-md hover:bg-green-500 transition"
                            >
                                Hire Me
                            </a>


                            <a
                                href={cv} 
                                download
                                className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-xl shadow-md hover:bg-pink-700 transition"
                            >
                                Télécharger mon CV
                            </a>
                        </div>



                        <div className="mt-6 flex justify-center sm:justify-start gap-4">
                            {listReseau.map(item => (
                                <Reseau key={item.id} id={item.id} link={item.link} image={item.image} />
                            ))}
                        </div>
                    </div>


                    <div className="flex-1 w-full max-w-sm rounded-3xl overflow-hidden shadow-lg shadow-pink-600">
                        <img src={photoProfil} alt="Elsa TASSOU portrait" className="w-full h-full object-cover" />
                    </div>
                </div>

            </Section>

            <Section>
                <section id="aboutMe" className="w-full px-4 sm:px-10 py-10 bg-black">
                    <h2 className="text-center mb-6 text-3xl font-bold text-pink-500">About Me</h2>

                    <div className="max-w-3xl mx-auto text-center text-white text-sm sm:text-base">
                        <p>
                            Étudiante en psychologie passionnée par la communication, je souhaite mettre à profit mes compétences en community management, en création de contenu vidéo et en gestion de projets créatifs pour contribuer au succès d’une organisation dynamique. Mon expérience et mes aptitudes en communication me rendent apte à exceller dans un poste en communication.
                        </p>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-center mb-6 text-2xl font-bold text-pink-500">Skills</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {listSkills.map(item => (
                                <Card key={item.id} id={item.id} titre={item.titre} contenu={item.contenu} />
                            ))}
                        </div>
                    </div>
                </section>

            </Section>
            <Section id="service">
                <h2 className="text-center mb-6 text-3xl font-bold text-pink-500">Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {listService.map(item => (
                        <Card key={item.id} id={item.id} titre={item.titre} contenu={item.description} />
                    ))}
                </div>
            </Section>

            <Section id="contact">
                <h2 className="text-center mb-6 text-3xl font-bold text-pink-500">Contact</h2>
                <form className="max-w-4xl mx-auto p-6 bg-black rounded-2xl shadow-md space-y-6">
                    <h2 className="text-2xl font-semibold text-green-400 text-center">Contactez-moi</h2>

                    {/* Nom */}
                    <div className="w-full">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    {/* Email */}
                    <div className="w-full">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    {/* Message */}
                    <div className="w-full">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500"
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="cursor-pointer mt-4 px-6 py-3 bg-pink-500 text-white font-semibold rounded-xl hover:bg-pink-700 transition-colors"
                        >
                            Envoyer
                        </button>
                    </div>
                </form>
            </Section>

            {/* Footer */}
            <footer className="bg-black text-white py-8 mt-12 border-t border-t-pink-400">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Section 1 */}
                    <div>
                        <h3 className="text-xl font-bold mb-2">Mon Portfolio</h3>
                        <p className="text-sm text-gray-400">Créatif, curieux et passionné par la communication et le digital.</p>
                    </div>

                    {/* Section 2: Navigation */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Navigation</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#about" className="hover:text-pink-400 transition">À propos</a></li>
                            <li><a href="#projects" className="hover:text-pink-400 transition">Projets</a></li>
                            <li><a href="#contact" className="hover:text-pink-400 transition">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </footer>


        </>
    )
} 