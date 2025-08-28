import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  buttonText?: string;
  onButtonClick?: () => void;
  type?: "success" | "error";
  children?: ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  title,
  message,
  buttonText = "Back to Home",
  onButtonClick,
  type = "success",
  children,
}: ModalProps) {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 400,
                duration: 0.4,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl overflow-hidden"
              style={{
                backgroundImage:
                  type === "success"
                    ? "url('/images/bg-modal-success.png')"
                    : "url('/images/bg-modal-error.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Content */}
              <div className="relative z-10 px-8 py-12 text-center">
                {/* Animated Icon with Circular Background */}

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    damping: 15,
                    stiffness: 300,
                  }}
                  className="mx-auto mb-8 relative"
                >
                  {/* Main Icon Circle */}
                  <div
                    className={`relative w-36 h-36 rounded-full flex items-center justify-center mx-auto shadow-lg`}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4, type: "spring", damping: 20 }}
                    >
                      {type === "success" ? (
                        <Image
                          src="/icons/icon-modal-success.png"
                          alt="Success"
                          width={144}
                          height={144}
                          className="w-36 h-36 object-contain"
                        />
                      ) : (
                        <Image
                          src="/icons/icon-modal-error.png"
                          alt="Error"
                          width={144}
                          height={144}
                          className="w-36 h-36 object-contain"
                        />
                      )}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-white mb-4"
                >
                  {title}
                </motion.h3>

                {/* Message */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300 text-base mb-8 leading-relaxed"
                >
                  {message}
                </motion.p>

                {/* Custom Children */}
                {children && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                  >
                    {children}
                  </motion.div>
                )}

                {/* Action Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleButtonClick}
                  className={`w-full py-4 px-6 text-white font-semibold rounded-2xl transition-all duration-200 shadow-lg ${
                    type === "success"
                      ? "bg-teal-600 hover:bg-teal-700"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  {buttonText}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Preset Success Modal
export function SuccessModal({
  isOpen,
  onClose,
  title = "Thanks for Reaching Out!",
  message = "I've received your message and will get back to you shortly.",
  buttonText = "Back to Home",
  onButtonClick,
}: Omit<ModalProps, "type" | "children">) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      type="success"
      title={title}
      message={message}
      buttonText={buttonText}
      onButtonClick={onButtonClick}
    />
  );
}

// Preset Error Modal
export function ErrorModal({
  isOpen,
  onClose,
  title = "Message Not Sent",
  message = "Something broke along the way. Let's try resending it.",
  buttonText = "Try Again",
  onButtonClick,
}: Omit<ModalProps, "type" | "children">) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      type="error"
      title={title}
      message={message}
      buttonText={buttonText}
      onButtonClick={onButtonClick}
    />
  );
}
