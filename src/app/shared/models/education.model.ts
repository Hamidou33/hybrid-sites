export class Education {
  diplome: string;
  universite: string;
  lieu: string;
  periode: string;

  constructor(
    diplome: string,
    universite: string,
    lieu: string,
    periode: string
  ) {
    this.diplome = diplome;
    this.universite = universite;
    this.lieu = lieu;
    this.periode = periode;
  }
}
