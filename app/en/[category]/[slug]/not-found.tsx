import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

export default async function NotFound() {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || ''
  const segments = pathname.split('/')
  const locale = segments[1]
  const category = segments[2]
  if (locale && category) redirect(`/${locale}/${category}`)
  redirect('/en')
}
