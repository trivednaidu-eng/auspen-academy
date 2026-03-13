import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface AnimatedIntroProps {
  onComplete: () => void;
}

export function AnimatedIntro({ onComplete }: AnimatedIntroProps) {
  const [stage, setStage] = useState<"books" | "logo" | "complete">("books");

  useEffect(() => {
    // Book flipping stage - stays for 2 seconds
    const booksTimer = setTimeout(() => {
      setStage("logo");
    }, 2000);

    return () => clearTimeout(booksTimer);
  }, []);

  useEffect(() => {
    if (stage === "logo") {
      // Logo stays visible until page is loaded
      // We'll keep it visible longer
      const logoTimer = setTimeout(() => {
        setStage("complete");
        onComplete();
      }, 3000);
      return () => clearTimeout(logoTimer);
    }
  }, [stage, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'linear-gradient(to bottom right, #FFF9E6, #FFFEF0, #ffffff)' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: stage === "complete" ? 0 : 1 }}
      transition={{ duration: 0.8 }}
      onAnimationComplete={() => {
        if (stage === "complete") {
          // Remove from DOM after fade out
          setTimeout(() => {
            document.body.style.overflow = 'auto';
          }, 100);
        }
      }}
    >
      {/* Book Pages Flipping */}
      {stage === "books" && (
        <div className="relative flex gap-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="relative h-64 w-48 origin-left"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 180 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Book Page Front */}
              <div
                className="absolute inset-0 rounded-r-lg bg-white shadow-2xl"
                style={{
                  backfaceVisibility: "hidden",
                  boxShadow: "-2px 0 10px rgba(0,0,0,0.1), 4px 0 20px rgba(0,0,0,0.15)",
                }}
              >
                <div 
                  className="h-full border-l-4 bg-gradient-to-br from-white to-gray-50 p-6"
                  style={{ borderLeftColor: '#2E66B1' }}
                >
                  <div className="space-y-2">
                    {[...Array(12)].map((_, lineIdx) => (
                      <div
                        key={lineIdx}
                        className="h-2 rounded bg-gray-200"
                        style={{ width: `${Math.random() * 30 + 60}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Book Page Back */}
              <div
                className="absolute inset-0 rounded-l-lg shadow-2xl"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  backgroundColor: '#FFFEF0',
                }}
              >
                <div 
                  className="h-full border-r-4 p-6"
                  style={{ 
                    borderRightColor: '#F7D514',
                    background: 'linear-gradient(to bottom right, #FFFEF0, rgba(247, 213, 20, 0.1))'
                  }}
                >
                  <div className="space-y-2">
                    {[...Array(12)].map((_, lineIdx) => (
                      <div
                        key={lineIdx}
                        className="h-2 rounded"
                        style={{ 
                          width: `${Math.random() * 30 + 60}%`,
                          backgroundColor: 'rgba(247, 213, 20, 0.3)'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Logo Formation - AUSPEN ACADEMY stays visible */}
      {stage === "logo" && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative"
        >
          <div className="text-center">
            <motion.h1
              className="text-7xl font-bold md:text-8xl lg:text-9xl"
              style={{ 
                color: '#2E66B1',
                fontFamily: 'Orbitron, sans-serif'
              }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              AUSPEN
            </motion.h1>
            <motion.p
              className="mt-4 text-3xl font-semibold md:text-4xl"
              style={{ 
                color: '#2E66B1',
                fontFamily: 'Bebas Neue, sans-serif'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              ACADEMY
            </motion.p>
          </div>
          
          {/* Sparkle effects around text */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full"
              style={{
                backgroundColor: '#F7D514',
                top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}