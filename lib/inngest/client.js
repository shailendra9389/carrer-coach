import { Inngest } from "inngest";

<<<<<<< HEAD
// Create a client to send and receive events
export const inngest = new Inngest({ id: "carrer-coach-ai" });
=======
export const inngest = new Inngest({
  id: "career-coach", // Unique app ID
  name: "Career Coach",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
>>>>>>> d21eca763088847c0bd9929fdaa271b040099b82
