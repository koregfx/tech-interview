import { NextResponse } from 'next/server'

export async function GET() {
  const countries = [
    'España',
    'México',
    'Argentina',
    'Colombia',
    'Chile',
    'Perú',
    'Venezuela',
    'Uruguay',
    'Paraguay',
    'Bolivia',
    'Ecuador',
    'Guatemala',
    'Cuba',
    'República Dominicana',
    'Honduras',
    'El Salvador',
    'Nicaragua',
    'Costa Rica',
    'Panamá',
    'Puerto Rico',
  ]

  return NextResponse.json(countries)
}
