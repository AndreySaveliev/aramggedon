export type Asteroid = {
  id: string;
  close_approach_data: {
    close_approach_date: String,
    miss_distance: {
      kilometers: String,
      lunar: String,
    }
  }[],
  estimated_diameter: {
    meters: {
      estimated_diameter_max: number,
      estimated_diameter_min: number
    }
  },
  is_potentially_hazardous_asteroid: Boolean,
  name: String,
}

export type Dates = {
  [date: number]: Asteroid[]
}

export type OrderContext = Asteroid[]
export type UnitOfMeasure = string
