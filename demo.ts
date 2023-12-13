const db = await Deno.openKv()

// const facundoPreferences = {
//   username: "facundoCapua",
//   theme: "light",
//   language: "es-ES",
// }

// const miduPreferences = {
//   username: "midudev",
//   theme: "dark",
//   language: "en-US",
// }

// await db.set(["preferences", "facundo"], facundoPreferences);
// await db.set(["preferences", "midudev"], miduPreferences);

const entries = db.list({ prefix: ["preferences"] })


for await (const entry of entries) { // <- esto es javascript
  console.log(entry)
}

await db.delete(["preferences", "facundo"])