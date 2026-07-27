import { httpsCallable } from "firebase/functions";
import { functions } from "./firebase.js";

const createCheckoutSession = httpsCallable(
    functions,
    "createCheckoutSession"
);

export async function buyCoinPackage(packageId) {

    const result = await createCheckoutSession({
        packageId
    });

    window.location.href = result.data.url;

}