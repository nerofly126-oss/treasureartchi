export const whatsappNumber = '2348142143579'
export const whatsappMessage = encodeURIComponent(
  "Hello Treasure Artchi, I'd love to enquire about your work.",
)
export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

export const emailAddresses = [
  'ndukwetreasure1@gmail.com',
  'treasureartchi@gmail.com',
] as const

export const emailAddress = emailAddresses[0]
export const emailLink = `mailto:${emailAddress}`
export const emailLinks = emailAddresses.map((email) => `mailto:${email}`)
