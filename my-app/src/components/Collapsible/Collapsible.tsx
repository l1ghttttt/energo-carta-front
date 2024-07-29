import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import Profile from "../Profile/Profile";
import useStore from "../Store";
import About from "../About/About";
import Guide from "../Guide/Guide";
import Api from "../Api/Api";

const Collapsible = () => {

    const Visible = useStore((state:any) => state.Visible)

    return (
        <div className={`absolute flex flex-col items-center justify-center z-[5] top-[15%] left-[40%] gap-[50px]`}>
            <AnimatePresence>
                {Visible === `about` && (
                    <motion.div
                        initial={{ transform: "translateY(-500px)", opacity: 0 }}
                        animate={{ transform: "translateY(0)", opacity: 1 }}
                        exit={{ transform: "translateY(500px)", opacity: 0 }}
                        transition={{duration: .5}}>
                        <About/>
                    </motion.div>
                )}
                {Visible === `guide` && (
                    <motion.div
                        initial={{ transform: "translateY(-500px)", opacity: 0 }}
                        animate={{ transform: "translateY(0)", opacity: 1 }}
                        exit={{ transform: "translateY(500px)", opacity: 0 }}
                        transition={{duration: .5}}>
                        <Guide/>
                    </motion.div>
                )}
                {Visible === `api` && (
                    <motion.div
                        initial={{ transform: "translateY(-500px)", opacity: 0 }}
                        animate={{ transform: "translateY(0)", opacity: 1 }}
                        exit={{ transform: "translateY(500px)", opacity: 0 }}
                        transition={{duration: .5}}>
                        <Api/>
                    </motion.div>
                )}
                {Visible === `profile` && (
                    <motion.div
                        initial={{ transform: "translateY(-500px)", opacity: 0 }}
                        animate={{ transform: "translateY(0)", opacity: 1 }}
                        exit={{ transform: "translateY(500px)", opacity: 0 }}
                        transition={{duration: .5}}>
                        <Profile/>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>

            </AnimatePresence>

            <AnimatePresence>

            </AnimatePresence>

            <AnimatePresence>

            </AnimatePresence>
        </div>
    );
};

export default Collapsible;