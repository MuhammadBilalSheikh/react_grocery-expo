import { createGroceryItem, listGroceryItems } from "@/lib/server/db-actions";

export async function GET() {
    try {
        const items = await listGroceryItems()

        return Response.json({ items })
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Failed to fetch items"
        console.error("Error fetching items:", errorMessage)
        return Response.json({ error: errorMessage }, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, category, quantity, priority } = body;
        // Validate input
        if (!name || !category || !priority) {
            return Response.json({ error: "please provide all required fields" }, { status: 400 });
        }
        // Create new item
        const newItem = await createGroceryItem({ name, category, quantity, priority });
        return Response.json({ newItem }, { status: 201 });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Failed to create item"
        console.error("Error creating item:", errorMessage)
        return Response.json({ error: errorMessage }, { status: 500 })
    }
}

