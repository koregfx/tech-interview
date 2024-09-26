import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

interface RegisterData {
  name: string
  email: string
  password: string
  confirmPassword: string
  country: string
  terms: boolean
}

export async function POST(request: NextRequest) {
  try {
    const data: RegisterData = await request.json()

    // Simular validación del lado del servidor
    if (data.email === 'test@example.com') {
      return NextResponse.json(
        { error: 'El email ya está en uso' },
        { status: 400 },
      )
    }

    // Simular retardo para representar una operación real
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Devolver respuesta exitosa
    return NextResponse.json({ message: 'Registro exitoso' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 },
    )
  }
}
