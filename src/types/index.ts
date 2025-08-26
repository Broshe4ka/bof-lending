export interface LinksDataProps {
  authClear: string
  authSubSeason: string
  authSubMountly: string
  mapLink: string
}

export interface NavDataProps {
  id: number
  name: string
  url: string
}

export interface SubProps {
  id: number
  period: string
  price: number | string
  featureList: string[]
  url: string
  image: string
  bg: string
}

export interface SocialsDataProps {
  id: number
  name: string
  icon: string
  url: string
}

export interface SliderProps {
  id: number
  icon: string
  title: string
  description: string
  images: string[]
}

export interface InfoDataProps {
  id: number
  icon: string
  title: string
  subtitle: string
  text: string[]
  image: string
}

export interface FaqDataProps {
  id: number
  question: string
  answer: string
}

export interface licenseDataProps {
  id: number
  name: string
  url: string
}
