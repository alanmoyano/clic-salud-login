// import { EnvironmentSelect } from '@/components/environment-select'
// import { UsersTable } from '@/components/users-table'
// import { isClicSaludUser } from '@/lib/types'
// import { isFullPage } from '@notionhq/client'
// import { useEffect, useState } from 'react'

import Link from 'next/link'

export type Environment = 'demo' | 'test' | 'dev'

export default async function Home() {
  return (
    <div className='mt-4 flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-semibold'>Bienvenido!</h1>
      <p>
        Hice esta página para acelerar el login a los entornos que usamos
        nosotros, los chicos de desarrollo
      </p>
      <p>
        Cualquier cosa podés hablarme por discord si tenés alguna recomendación
        o duda
      </p>
      <Link
        href='/demo'
        className='text-lg font-semibold text-blue-500 underline hover:text-blue-700'
      >
        Empezar
      </Link>
    </div>
  )
}