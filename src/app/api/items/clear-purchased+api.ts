import { clearPurchasedGroceryItems } from "@/lib/server/db-actions";

export async function POST() {
    try {
        await clearPurchasedGroceryItems();
        return Response.json({ message: "Purchased items cleared successfully" });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Failed to clear purchased items"
        console.error("Error clearing purchased items:", errorMessage)
        return Response.json({ error: errorMessage }, { status: 500 })
    }
}