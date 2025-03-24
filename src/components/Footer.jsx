import {FaFacebook,FaInstagram,FaTwitter,FaEnvelope,FaMobileAlt,FaAddressCard} from "react-icons/fa";

const Footer=()=>{
    return(
       <footer className="bg-gray-800 px-4 md:px-16 lg:px-28 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div > 
            <div>
                <h2 className="text-lg font-bold mb-4 text-white">
                    About Us
                </h2>
                <p className="text-gray-300">
                    We are a team dedicated to providing the best 
                    Hotels and services to our customers.
                </p>
                
            </div>

            <div className="mt-6 pt-6">
                <h2 className="text-lg font-bold mb-4 text-white">
                     Follow Us
                </h2>
                <ul className="flex space-x-4">
                    <li>
                        {" "}
                        <FaFacebook className="text-blue-500"/>
                        {" "}
                        <a href="https://www.facebook.com/" target="_blank" className="hover:underline text-gray-300">Facebook</a>
                    </li>
                    <li>
                        <FaTwitter className="text-sky-500"/>
                        <a href="https://x.com/" target="_blank" className="hover:underline text-gray-300">Twitter</a>
                    </li>
                    <li>
                        <FaInstagram className="text-orange-500"/>
                        <a href="https://www.instagram.com/" target="_blank" className="hover:underline text-gray-300">Instagram</a>
                    </li>
                </ul>
            </div> 


            </div>
            
            <div>
                <h2 className="text-lg font-bold mb-4 text-white">
                    Contact Us
                </h2>
                <ul>
                  <li className="ptmt-4 pt-6=6">
                    <FaEnvelope className="text-blue-500"/>
                    <a href="mailto:unwind@gmail.com" className="hover:underline text-gray-300">Unwind@gmail.com</a>
                  </li>
                  <li className="mt-4 pt-6=6">
                    <FaMobileAlt className="text-blue-500"/><a href="tel:7058637155" className="hover:underline text-gray-300">8787656545</a>
                  </li>
                  <li className="pt=mt-4 pt-6">
                    <FaAddressCard className="text-blue-500"/><a href="https://maps.app.goo.gl/4B1ubfrfcbsbfD828" target="_blank" className="hover:underline text-gray-300">KUNAL PLAZA, off Mumbai Pune Highway, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019</a>
                  </li>

                </ul>
            </div>
            <div>
                <h2 className="text-lg font-bold mb-4 text-white">
                     Quick Links
                </h2>
                <ul>
                    <li><a href="#" className="hover:underline text-gray-300">Home</a></li>
                    <li><a href="#" className="hover:underline text-gray-300">Services</a></li>
                    <li><a href="#" className="hover:underline text-gray-300">Contact</a></li>
                    <li><a href="#" className="hover:underline text-gray-300">About</a></li>
                </ul>
            </div>
        </div>
        <div className="border-t border-gray-600 pt-6 text-gray-300 text-center mt-6">
            <p>© 2025 Code With UnWind Hotels Booking. All Rights Reserved.</p>
        </div>
       </footer>
    )
}
export default Footer;