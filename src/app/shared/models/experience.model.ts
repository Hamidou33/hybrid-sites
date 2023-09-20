export class Experience {
  titre: string;
  entreprise: string;
  client: string;
  periode: string;
  description: string;

  constructor(
    titre: string,
    entreprise: string,
    client: string,
    periode: string,
    description: string
  ) {
    this.titre = titre;
    this.entreprise = entreprise;
    this.client = client;
    this.periode = periode;
    this.description = description;
  }
}
