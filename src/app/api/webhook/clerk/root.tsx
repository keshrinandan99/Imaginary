// import { verifyWebhook } from '@clerk/nextjs/webhooks'
// import { NextResponse } from 'next/server'
// import { createUser, deleteUser, updateUser } from "../../../../lib/actions/user.action"

// export async function POST(request: Request) {
//   try {
//     const evt = await verifyWebhook(request)

//     // Get the ID and type
//     const { id } = evt.data
//     const eventType = evt.type

//     console.log(`Received webhook with ID ${id} and event type of ${eventType}`)

//     // CREATE
//     if (eventType === "user.created") {
//       const { id, email_addresses, image_url, first_name, last_name, username } = evt.data

//       const user = {
//         clerkId: id,
//         email: email_addresses[0].email_address,
//         username: username!,
//         firstName: first_name,
//         lastName: last_name,
//         photo: image_url,
//       }

//       const newUser = await createUser(user)

//       return NextResponse.json({ message: "OK", user: newUser })
//     }

//     // UPDATE
//     if (eventType === "user.updated") {
//       const { id, image_url, first_name, last_name, username } = evt.data

//       const user = {
//         firstName: first_name,
//         lastName: last_name,
//         username: username!,
//         photo: image_url,
//       }

//       const updatedUser = await updateUser(id, user)

//       return NextResponse.json({ message: "OK", user: updatedUser })
//     }

//     // DELETE
//     if (eventType === "user.deleted") {
//       const { id } = evt.data

//       const deletedUser = await deleteUser(id!)

//       return NextResponse.json({ message: "OK", user: deletedUser })
//     }

//     return new Response('Webhook received', { status: 200 })
//   } catch (err) {
//     console.error('Error verifying webhook:', err)
//     return new Response('Error verifying webhook', { status: 400 })
//   }
// }