import { Link } from "react-router-dom";

const Footer = () => {
    return (



        <footer className="bg-white border-t border-[#c3d6d6]">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/home" className="flex gap-5 px-2 justify-center md:block items-center space-x-1   rtl:space-x-reverse">
                            {/* <img
                                src="https://firebasestorage.googleapis.com/v0/b/prcqreq.appspot.com/o/logo1223.png?alt=media&token=e28897aa-dc80-4794-a449-bca82a02dad5"

                                className="h-16 w-32  rounded-s-2xl" alt="Trend mebel logo" /> */}
        <img className="h-16 w-32 " src="public/logotrendmebel.png" alt="Mebel trend logo" />

                            <div className="text-white">

                            </div>
                            <h6 className="md:text-[10px]  text-[#2c9599] ">Фабрика мягкой мебели</h6>
                        </Link>

                        

                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Компания</h2>
                            <ul className="text-gray-500  font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">О компании</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Вакансии</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Контакты</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="mailto:amirov007@mail.ru" type="email" className="hover:underline ">amirov007@mail.ru</a>
                                </li>
                                <li className="mb-4">
                                    <a type="tel" href="tel:5541251234" className="hover:underline ">+7(999)999 00 00</a>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Наши магазины</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="#map" className="hover:underline">Томск</a>
                                </li>
                                <li>
                                    <a href="#map" className="hover:underline">Северск &amp; Новосибирск</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center ">© 2024 <a href="/" className="hover:underline">TrendMebel™</a>. Все права защищены.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://www.instagram.com/mebel_trend_tomsk70" target="blank" className="mr-3 duration-200  text-gray-500/70 hover:text-gray-300/10 hover:bg-clip-text hover:bg-gradient-to-tl from-yellow-300 via-rose-400 to-purple-600">
                            <i className="bi bi-instagram text-xl  "></i>
                        </a>
                        <a href="vk.com" className="mr-3 rounded py-0.5 px-1 duration-200  text-gray-500/70 text-sm font-bold hover:bg-blue-400 hover:text-white">
                            vk
                        </a>
                        <a href="https://web.telegram.org/a/" className="mr-3 duration-300 text-gray-500/70  hover:text-cyan-300">
                            <i className="bi bi-telegram text-xl ">
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;