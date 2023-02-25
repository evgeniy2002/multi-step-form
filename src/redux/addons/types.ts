export type AddOnsType = {
  items: OnsType[]
}

export type OnsType = {
  id: number
  title: string,
  subtitle: string
  rateMo: number,
  checked: boolean
}

export type targetCheked = {
  id: number,
  nextSeen: boolean
}