import { functions } from "./firebase.js";
import { httpsCallable } from "firebase/functions";

const buyInteractionCallable = httpsCallable(
  functions,
  "buyInteraction"
);

export async function buyInteraction(interactionId) {
    
  const result = await buyInteractionCallable({
    interactionId,
  });

  console.log("🎬 Serverantwort:", result.data);

if (result.data.interaction) {
  console.log("🎬 Szene:", result.data.interaction.scene);
}

  return result.data;
}