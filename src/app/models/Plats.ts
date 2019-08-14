export interface Plats {
  Plats: Plat[];
}

export interface Plat {
  Categorie?:   string;
  Image:        string;
  ImageSearch?: string;
  Nom:          string;
  Rating:       number;
  key:          string;
}
