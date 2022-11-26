import { contacts } from "@/models"
import { motion } from "framer-motion"

const Footer = () => (
  <div className="sticky bottom-0 w-full border-t dark:border-none h-12 flex justify-center items-center bg-white bg-opacity-70 backdrop-blur dark:bg-slate-800 dark:border-t-slate-700">
    <div className="flex items-center justify-around w-80 overflow-hidden h-full">
      {contacts.map(({ href, icon }, i) => (
        <motion.div
          className="flex justify-center items-center dark:hover:bg-slate-700 hover:bg-slate-50 rounded-full"
          key={i}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            duration: 0.3,
          }}
        >
          <motion.a
            className="hover:underline p-2.5 rounded-full"
            href={href}
            target={"_blank"}
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              duration: 0.3,
              delay: i * 0.1 + 0.6,
            }}
          >
            {icon}
          </motion.a>
        </motion.div>
      ))}
    </div>
  </div>
)

export default Footer
