
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.5, 
            ease: "easeOut",
            delay: 0.2
          }}
          className="mb-6"
        >
          {/* Logo or Initials */}
          <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Hmmmmm
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
            <motion.div
              className="absolute inset-0 rounded-full border-t-2 border-primary"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.5,
                ease: "linear",
                repeat: Infinity,
              }}
            />
          </div>
          <motion.div 
            className="mt-4 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Loading...
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
