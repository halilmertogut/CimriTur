import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modal = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

const PromotionModal = ({ isOpen, onClose }) => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigateRegister = () => {
        navigate('/register');
        onClose();  // Close the modal when navigating
    };

    const handleBackdropClick = (event) => {
        if (event.currentTarget === event.target) {
            onClose();  // Only close if the event's target is the component itself (backdrop), not children
        }
    };

    const handleLoginClick = () => {
        setIsLoginOpen(true);
        onClose();  // Close the PromotionModal when opening the Login modal
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="fixed inset-0 z-50 flex items-center justify-center font-montserrat"
                        style={{ background: 'rgba(0, 0, 0, 0.8)' }}
                        onClick={handleBackdropClick} // Handle clicks on the backdrop
                    >
                        <motion.div
                            variants={modal}
                            className="mt-60 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                            onClick={(e) => e.stopPropagation()} // Prevent clicks within the modal from propagating to the backdrop
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                            PROMOSYONLARI GÖRMEK İÇİN TIKLA!
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center w-full rounded-md border border-transparent px-6 py-3 bg-red-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                        onClick={handleNavigateRegister}
                                    >
                                        ŞİMDİ ÜYE OL
                                    </button>
                                </span>
                                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                    <button onClick={handleLoginClick} className="flex items-center justify-center text-sm px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-blue-900 transition duration-300 transform hover:scale-105">
                                        Giriş Yap
                                    </button>
                                </span>
                                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto sm:mr-auto">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center w-full rounded-md border border-gray-300 px-6 py-3 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                        onClick={onClose}
                                    >
                                        Kapat
                                    </button>
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <Login open={isLoginOpen} setOpen={setIsLoginOpen} />
        </>
    );
};

export default PromotionModal;
