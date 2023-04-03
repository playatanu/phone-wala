interface specs {
  key: string;
  val: Array<string>;
}

interface specifications {
  title: string;
  specs: Array<specs>;
}

export interface IDetail {
  brand: string;
  phone_name: string;
  thumbnail: string;
  phone_images: Array<string>;
  release_date: string;
  dimension: string;
  os: string;
  storage: string;
  specifications: Array<specifications>;
}

export interface IPhone {
  brand: string;
  phone_name: string;
  slug: string;
  image: string;
  detail: string;
}

export interface ISearch {
  title: string;
  phones: Array<IPhone>;
}
