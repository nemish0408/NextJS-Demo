import Card from '@/components/Card'
import Link from 'next/link'
import React from 'react'

const Notificationpage = () => {
  return (
    <Card>Notificationpage {" "} <Link className='ps-2' href='/dashboard/archived'>Archived</Link></Card>
  )
}

export default Notificationpage