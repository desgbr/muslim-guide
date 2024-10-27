export interface AyahT {
  number:        number;
  text:          string;
  edition:       Edition;
  surah:         Surah;
  numberInSurah: number;
  juz:           number;
  manzil:        number;
  page:          number;
  ruku:          number;
  hizbQuarter:   number;
  sajda:         boolean;
}

export interface Edition {
  identifier:  string;
  language:    string;
  name:        string;
  englishName: string;
  format:      string;
  type:        string;
  direction:   string;
}

export interface Surah {
  number:                 number;
  name:                   string;
  englishName:            string;
  englishNameTranslation: string;
  numberOfAyahs:          number;
  revelationType:         string;
}
