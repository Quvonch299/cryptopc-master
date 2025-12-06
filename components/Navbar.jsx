'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (name, href) =>
    `px-4 py-2 rounded-[10px] font-manrope text-[20px] transition-colors duration-300
     ${pathname === href ? "bg-[#5D5D5F] text-white" : "text-[#CBCBCB] hover:text-white"}`;

  // Havolalar ro'yxati
  const navLinks = [
    { name: "Главная", href: "/" },
    { name: "FAQ", href: "/faq" },
    { name: "Реферальная программа", href: "/referral" },
    { name: "Контакты", href: "/contact" },
  ];

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
     <div className="relative z-50 max-sm:pl-[10px] max-sm:pr-[10px]">
      <div className="max-w-7xl mx-auto mt-8 flex justify-between items-center px-6 py-4 bg-black rounded-2xl">
        <Link href="/" className="text-white font-bold text-2xl font-manrope">
          Crypto T Bank
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={linkClass(link.name, link.href)}>
              {link.name}
            </Link>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-gray-600 text-white px-5 h-12 rounded-lg text-lg hover:bg-gray-700 transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Меню
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white font-medium text-lg w-[208px] h-12 rounded-lg hover:bg-orange-600 transition-colors duration-300"
          >
            Открыть кошелек
          </motion.button>
        </div>
        <div className="md:hidden">
          <motion.button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoClose className="text-white text-3xl" />
            ) : (
              <IoMenu className="text-white text-3xl" />
            )}
          </motion.button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-black mt-2 rounded-2xl px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={linkClass(link.name, link.href)}>
              {link.name}
            </Link>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white font-medium text-lg w-full h-12 rounded-lg hover:bg-orange-600 transition-colors duration-300"
          >
            Открыть кошелек
          </motion.button>
        </div>
      )}
    </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={handleMenuClose}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute left-1/2 top-[30px] -translate-x-1/2 w-[90%] max-w-7xl bg-[#0C0C0C] text-white p-[30px] rounded-[20px] shadow-xl z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-[25px]">
              <h2 className="text-[20px] font-bold text-[#E2E2E2]">
                Crypto T Bank
              </h2>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 px-4 py-2 text-[20px] rounded-[10px] transition-colors duration-300 hover:bg-orange-600"
                >
                  Открыть кошелек
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#5D5D5F] px-4 text-[20px] py-2 flex items-center gap-1 rounded-[10px] transition-colors duration-300 hover:bg-[#4a4a4c]"
                  onClick={handleMenuClose}
                >
                  Закрыть <IoClose size={24} />
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-1">
              <div>
                <h3 className="text-[24px] mb-[30px] text-[#FFF] font-bold">Кошелек</h3>
                <ul className="space-y-3 text-[#E7E7E7]">
                  {[
                    { name: "Главная страница", href: "/" },
                    { name: "Как платить по QR коду", href: "/" },
                    { name: "Безопасность", href: "/" },
                    { name: "Дополнительные функции", href: "/" },
                    { name: "FAQ", href: "/faq" },
                    { name: "Реферальная программа", href: "/referral" },
                  ].map((item) => (
                    <motion.li
                      key={item.name}
                      whileHover={{ x: 5 }}
                      className={`text-[20px] hover:text-white transition-colors duration-300 ${pathname === item.href ? "text-white" : "text-[#A6A6A7]"
                        }`}
                    >
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="block"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[24px] mb-[30px] text-[#FFF] font-bold">Компания</h3>
                <ul className="space-y-3 text-[#E7E7E7]">
                  {[
                    { name: "О компании", href: "/company" },
                    { name: "Контакты", href: "/contact" },
                    { name: "Политика AML", href: "/policy" },
                    { name: "Техподдержка", href: "/" },
                  ].map((item) => (
                    <motion.li
                      key={item.name}
                      whileHover={{ x: 5 }}
                      className={`text-[20px] hover:text-white transition-colors duration-300 ${pathname === item.href ? "text-white" : "text-[#A6A6A7]"
                        }`}
                    >
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="block"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[24px] mb-[30px] text-[#FFF] font-bold">Соц сети</h3>
                <ul className="space-y-3 text-[#E7E7E7]">
                  <motion.li
                    whileHover={{ x: 5 }}
                    className="text-[#A6A6A7] flex gap-[10px] items-center text-[20px] hover:text-white transition-colors duration-300"
                  >
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-[10px]"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_515_662)">
                          <path d="M12 2.16276C15.206 2.16276 15.5824 2.17705 16.8496 2.23422C18.0215 2.28662 18.655 2.48194 19.079 2.64867C19.6411 2.8678 20.0413 3.12505 20.4605 3.54426C20.8797 3.96348 21.1417 4.36364 21.3561 4.92576C21.5181 5.34974 21.7182 5.98333 21.7706 7.15522C21.8277 8.42239 21.842 8.79873 21.842 12.0048C21.842 15.2108 21.8277 15.5871 21.7706 16.8543C21.7182 18.0262 21.5228 18.6598 21.3561 19.0838C21.137 19.6459 20.8797 20.046 20.4605 20.4653C20.0413 20.8845 19.6411 21.1465 19.079 21.3609C18.655 21.5228 18.0215 21.7229 16.8496 21.7753C15.5824 21.8325 15.206 21.8468 12 21.8468C8.79397 21.8468 8.41763 21.8325 7.15046 21.7753C5.97857 21.7229 5.34498 21.5276 4.921 21.3609C4.35888 21.1417 3.95872 20.8845 3.5395 20.4653C3.12029 20.046 2.85828 19.6459 2.64391 19.0838C2.48194 18.6598 2.28186 18.0262 2.22946 16.8543C2.17229 15.5871 2.158 15.2108 2.158 12.0048C2.158 8.79873 2.17229 8.42239 2.22946 7.15522C2.28186 5.98333 2.47718 5.34974 2.64391 4.92576C2.86304 4.36364 3.12029 3.96348 3.5395 3.54426C3.95872 3.12505 4.35888 2.86304 4.921 2.64867C5.34498 2.4867 5.97857 2.28662 7.15046 2.23422C8.41763 2.17229 8.79874 2.16276 12 2.16276ZM12 0C8.74157 0 8.33188 0.0142914 7.05042 0.0714569C5.77372 0.128622 4.90195 0.333466 4.13974 0.628821C3.34895 0.933704 2.68202 1.34815 2.01509 2.01509C1.34816 2.68202 0.938468 3.35371 0.628821 4.13974C0.333466 4.90195 0.128623 5.77372 0.071457 7.05518C0.0142914 8.33188 0 8.74156 0 12C0 15.2584 0.0142914 15.6681 0.071457 16.9496C0.128623 18.2263 0.333466 19.0981 0.628821 19.865C0.933705 20.6558 1.34816 21.3227 2.01509 21.9897C2.68202 22.6566 3.35371 23.0663 4.13974 23.3759C4.90195 23.6713 5.77372 23.8761 7.05519 23.9333C8.33665 23.9905 8.74157 24.0048 12.0048 24.0048C15.268 24.0048 15.6729 23.9905 16.9544 23.9333C18.2311 23.8761 19.1028 23.6713 19.8698 23.3759C20.6606 23.0711 21.3275 22.6566 21.9945 21.9897C22.6614 21.3227 23.0711 20.6511 23.3807 19.865C23.6761 19.1028 23.8809 18.231 23.9381 16.9496C23.9953 15.6681 24.0095 15.2632 24.0095 12C24.0095 8.7368 23.9953 8.33188 23.9381 7.05042C23.8809 5.77372 23.6761 4.90194 23.3807 4.13497C23.0758 3.34418 22.6614 2.67725 21.9945 2.01032C21.3275 1.34339 20.6558 0.933704 19.8698 0.624057C19.1076 0.328702 18.2358 0.123859 16.9544 0.0666931C15.6681 0.0142914 15.2584 0 12 0Z" fill="#FBFBFD" />
                          <path d="M12 2.16276C15.206 2.16276 15.5824 2.17705 16.8496 2.23422C18.0215 2.28662 18.655 2.48194 19.079 2.64867C19.6411 2.8678 20.0413 3.12505 20.4605 3.54426C20.8797 3.96348 21.1417 4.36364 21.3561 4.92576C21.5181 5.34974 21.7182 5.98333 21.7706 7.15522C21.8277 8.42239 21.842 8.79873 21.842 12.0048C21.842 15.2108 21.8277 15.5871 21.7706 16.8543C21.7182 18.0262 21.5228 18.6598 21.3561 19.0838C21.137 19.6459 20.8797 20.046 20.4605 20.4653C20.0413 20.8845 19.6411 21.1465 19.079 21.3609C18.655 21.5228 18.0215 21.7229 16.8496 21.7753C15.5824 21.8325 15.206 21.8468 12 21.8468C8.79397 21.8468 8.41763 21.8325 7.15046 21.7753C5.97857 21.7229 5.34498 21.5276 4.921 21.3609C4.35888 21.1417 3.95872 20.8845 3.5395 20.4653C3.12029 20.046 2.85828 19.6459 2.64391 19.0838C2.48194 18.6598 2.28186 18.0262 2.22946 16.8543C2.17229 15.5871 2.158 15.2108 2.158 12.0048C2.158 8.79873 2.17229 8.42239 2.22946 7.15522C2.28186 5.98333 2.47718 5.34974 2.64391 4.92576C2.86304 4.36364 3.12029 3.96348 3.5395 3.54426C3.95872 3.12505 4.35888 2.86304 4.921 2.64867C5.34498 2.4867 5.97857 2.28662 7.15046 2.23422C8.41763 2.17229 8.79874 2.16276 12 2.16276Z" fill="#FBFBFD" />
                          <path d="M12.0003 5.84042C8.59894 5.84042 5.83594 8.59866 5.83594 12.0048C5.83594 15.4109 8.59417 18.1691 12.0003 18.1691C15.4064 18.1691 18.1646 15.4109 18.1646 12.0048C18.1646 8.59866 15.4064 5.84042 12.0003 5.84042ZM12.0003 16.0016C9.78989 16.0016 7.9987 14.2104 7.9987 12C7.9987 9.78961 9.78989 7.99842 12.0003 7.99842C14.2107 7.99842 16.0019 9.78961 16.0019 12C16.0019 14.2104 14.2107 16.0016 12.0003 16.0016Z" fill="#5D5D5F" />
                          <path d="M18.4074 7.03135C19.202 7.03135 19.8461 6.38724 19.8461 5.59269C19.8461 4.79814 19.202 4.15402 18.4074 4.15402C17.6129 4.15402 16.9688 4.79814 16.9688 5.59269C16.9688 6.38724 17.6129 7.03135 18.4074 7.03135Z" fill="#5D5D5F" />
                        </g>
                        <defs>
                          <clipPath id="clip0_515_662">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <h2>Нельзяграм</h2>
                    </a>
                  </motion.li>

                  <motion.li
                    whileHover={{ x: 5 }}
                    className="text-[#A6A6A7] flex gap-[10px] items-center text-[20px] hover:text-white transition-colors duration-300"
                  >
                    <a
                      href="https://telegram.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-[10px]"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.03739 11.2933C8.23887 8.59141 12.3742 6.81016 14.4433 5.94955C20.351 3.49233 21.5786 3.06548 22.3787 3.05139C22.5547 3.04829 22.9481 3.0919 23.203 3.29872C23.4182 3.47334 23.4774 3.70924 23.5058 3.87481C23.5341 4.04038 23.5694 4.41755 23.5413 4.71225C23.2212 8.076 21.8359 16.2389 21.1312 20.0064C20.833 21.6005 20.2458 22.135 19.6774 22.1873C18.442 22.301 17.504 21.3709 16.3075 20.5866C14.4352 19.3593 13.3774 18.5953 11.5601 17.3977C9.45976 16.0136 10.8213 15.2529 12.0183 14.0097C12.3315 13.6843 17.7745 8.7335 17.8799 8.28438C17.893 8.22821 17.9053 8.01884 17.7809 7.90828C17.6565 7.79772 17.4729 7.83553 17.3404 7.8656C17.1527 7.90822 14.1616 9.88516 8.3674 13.7964C7.51841 14.3794 6.74943 14.6635 6.06044 14.6486C5.30089 14.6322 3.83981 14.2191 2.75365 13.866C1.42144 13.433 0.362616 13.204 0.454816 12.4686C0.502839 12.0855 1.03036 11.6937 2.03739 11.2933Z" fill="#FBFBFD" />
                      </svg>
                      <h2>Telegram</h2>
                    </a>
                  </motion.li>

                  <motion.li
                    whileHover={{ x: 5 }}
                    className="text-[#A6A6A7] flex gap-[10px] items-center text-[20px] hover:text-white transition-colors duration-300"
                  >
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-[10px]"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.2137 13.3281L17.8356 9.23299H13.9452V6.57667C13.9452 5.45604 14.4877 4.36308 16.2301 4.36308H18V0.876675C18 0.876675 16.3945 0.599976 14.8603 0.599976C11.6548 0.599976 9.56164 2.56177 9.56164 6.11182V9.23299H6V13.3281H9.56164V23.2284C10.2767 23.3419 11.0082 23.4 11.7534 23.4C12.4986 23.4 13.2301 23.3419 13.9452 23.2284V13.3281H17.2137Z" fill="#F3F3F3" />
                      </svg>
                      <h2>FaceBook</h2>
                    </a>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;